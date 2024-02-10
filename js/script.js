// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');
let paramsNav = document.getElementById('nav--params')

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