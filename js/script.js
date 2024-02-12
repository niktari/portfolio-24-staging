// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');
let paramsNav = document.getElementById('nav--params')
let topButton = document.getElementById('nav--top');

function revealInfo() {
    infoElem.classList.toggle("grid");
    infoElem.classList.toggle("hide-element");

    if(infoElem.classList.contains("hide-element")) {
        infoButton.style.color = "var(--black-30)";
        paramsNav.style.display = 'flex';
        topButton.style.display = 'flex';
    } else {
        infoButton.style.color = "var(--black)";
            paramsNav.style.display = 'none';
            topButton.style.display = 'none'
    }
}

infoButton.addEventListener("click", revealInfo);

// BACK TO TOP

console.log(topButton)

window.onscroll = function () {

        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 && infoElem.classList.contains("hide-element")) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }

}