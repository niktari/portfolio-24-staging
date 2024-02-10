let srcLayer;
let maskLayer;
let textureLayer;
let maskLayerTexture;

let graphicSize = 400;

let semicircleFirst = document.querySelectorAll('.semicircle.first');
let semicircleSecond = document.querySelectorAll('.semicircle.second');

let firstColor, secondColor;

let prevMouseX;
let prevMouseY;

let targetX;
let targetY;

let delayFactor = 0.05; 


function setup() {

  const c = createCanvas(windowWidth, windowWidth);
  mess(c);
//   mess_resize();
  pixelDensity(1);

  srcLayer = createGraphics(graphicSize, graphicSize);
  maskLayer = createGraphics(graphicSize, graphicSize);
  textureLayer = createGraphics(graphicSize, graphicSize);
  maskLayerTexture = createGraphics(graphicSize, graphicSize);

      let random_color_index = floor(random(0, circles.length));

      firstColor = getComputedStyle(semicircleFirst[random_color_index]).backgroundColor;
      secondColor = getComputedStyle(semicircleSecond[random_color_index]).backgroundColor;

}

function draw() {

  clear();



  drawSrcLayer();
  
  let maskedImg = srcLayer.get();

  let textureImg = textureLayer.get();

  targetX = lerp(targetX, mouseX, delayFactor);
  targetY = lerp(targetY, mouseY, delayFactor);

  let maxMoveDistance = 2; 

  let dx = targetX - mouseX;
  let dy = targetY - mouseY;

  // Apply linear interpolation to smoothly move the graphic towards the target
  if (abs(dx) > maxMoveDistance) {
    targetX -= maxMoveDistance * sign(dx);
  } else {
    targetX = mouseX;
  }

  if (abs(dy) > maxMoveDistance) {
    targetY -= maxMoveDistance * sign(dy);
  } else {
    targetY = mouseY;
  }


    // Update the previous mouse positions
    prevMouseX = mouseX;
    prevMouseY = mouseY; 
   
  
  
  for (let i = 0; i < 30; i++) {
    
    drawMaskLayer(i);
    
    maskedImg.mask(maskLayer);
    
    
    push();
    translate(targetX, targetY); 
    rotate(5 * noise(frameCount/100 + 1 * i * 0.01));
    image(maskedImg, -graphicSize/2, -graphicSize/2);
    pop();
  }

  push();
  imageMode(CENTER);
  translate(targetX, targetY);
  drawMaskLayerTexture();
  textureImg.mask(maskLayerTexture);
  drawTexture();
  image(textureImg, 0, 0);
  pop();


}


// Get the sign of a number
function sign(val) {
  return val >= 0 ? 1 : -1;
}

function drawSrcLayer() {

    let document_body = getComputedStyle(document.body).backgroundColor;

if(document_body ==='rgb(35, 31, 32)'){
    srcLayer.background('rgb(35, 31, 32)');
} else {
    srcLayer.background('rgb(235, 237, 231)');
}

  srcLayer.noStroke();

  let points = 16;
  let pointAngle = 360 / points;
  let radius = graphicSize;
  
  for (let angle = 0; angle < 360; angle += pointAngle) {
    let mappedX = map(mouseX, 0, windowWidth, -graphicSize, graphicSize, true);
    let mappedY = map(mouseY, 0, windowHeight, -graphicSize, graphicSize, true);
    
    let x = cos(radians(angle)) * radius;
    let y = sin(radians(angle)) * radius;

    srcLayer.push();
    srcLayer.translate(graphicSize/2, graphicSize/2);

    if (angle <= 180) {

      srcLayer.fill(firstColor);

    } else {
      srcLayer.fill(secondColor);
    }

    for(let i = 0; i < circles.length; i++){

      circles[i].onclick = function() { 
        firstColor = getComputedStyle(semicircleFirst[i]).backgroundColor;
        secondColor = getComputedStyle(semicircleSecond[i]).backgroundColor;
      }

    }

    srcLayer.triangle(mappedX, mappedY, x, y, x + graphicSize/(graphicSize/10) * 10, y + graphicSize/(graphicSize/10) * 10);
    srcLayer.pop();
  }
}

function drawMaskLayer(i) {
  maskLayer.clear();
  maskLayer.noStroke();
  maskLayer.ellipse(graphicSize/2, graphicSize/2, graphicSize - (i * graphicSize/30));
}

function drawMaskLayerTexture() {
    maskLayerTexture.clear();
    maskLayerTexture.noStroke();
    maskLayerTexture.ellipse(graphicSize/2, graphicSize/2, graphicSize);
  }


function drawTexture() {
  textureLayer.clear();
  textureLayer.noStroke();
  
  for (let i = 0; i <= graphicSize; i += 5) {
    for (let j = 0; j <= graphicSize; j+=5) {
			textureLayer.stroke(255,255,255);
			textureLayer.point(i, j);
          
	}
}
  
}

function mess(c, wait_ms = 1000) {
    c.canvas.classList.add("mess");
    c.canvas.classList.add("hide");
    setTimeout(show, 1);
    c.canvas.setAttribute("style", "");
  
    // fade the canvas out when mouse is still
    let hide_timeout = null;
  
    function show() {
      c.canvas.classList.remove("hide");
      hide_timeout && clearTimeout(hide_timeout);
      hide_timeout = setTimeout(hide, wait_ms);
  
      if (window.mess_show) mess_show();
    }
  
    function hide() {
      c.canvas.classList.add("hide");
  
      if (window.mess_hide) mess_hide();
    }
  
    window.addEventListener("mousemove", () => {
      show();
    });
  
    // resize canvas
    window.addEventListener("resize", () => {
      resizeCanvas(windowWidth, windowHeight);
      c.canvas.setAttribute("style", "");
  
      if (window.mess_resize) mess_resize();
    });
  }



// SHOW & HIDE SPIRAL

let spiralElem = document.getElementById('spiral');

let revealButton = document.getElementById('nav--reveal');

let circles = document.querySelectorAll('.circle')

function revealSpiral() {
    spiralElem.classList.toggle("hide-spiral");
    if (spiralElem.classList.contains("hide-spiral")) { 
            revealButton.innerHTML = "Show Animation";
            for(let circle of circles){
                circle.style.display = 'none';
            }
        } else {
            revealButton.innerHTML = "Hide Animation";
            for(let circle of circles){
                circle.style.display = 'flex';
            }
        }
}

revealButton.addEventListener("click", revealSpiral);