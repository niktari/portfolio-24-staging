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

// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');
let paramsNav = document.getElementById('nav--params');

revealButton.addEventListener("click", revealSpiral);

function revealInfo() {
    infoElem.classList.toggle("grid");
    infoElem.classList.toggle("hide-element");

    if(infoElem.classList.contains("hide-element")) {
        paramsNav.style.display = 'flex';
    } else {
        paramsNav.style.display = 'none';
    }
}

infoButton.addEventListener("click", revealInfo);