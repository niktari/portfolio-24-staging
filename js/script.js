// ANIMATION

let spiralElem = document.getElementById('spiral');

let revealButton = document.getElementById('nav--reveal');

let circles = document.querySelectorAll('.circle')

let paramsNav = document.getElementById('nav--params')

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

// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');

function revealInfo() {
    infoElem.classList.toggle("grid");
    infoElem.classList.toggle("hide-element");

    if(infoElem.classList.contains("hide-element")) {
        infoButton.style.color = "var(--black-30)";
        paramsNav.style.display = 'flex';
    } else {
        infoButton.style.color = "var(--black)";
            paramsNav.style.display = 'none';
    }
}

infoButton.addEventListener("click", revealInfo);