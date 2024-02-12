// INFO BUTTON
let infoButton = document.getElementById('nav--info');
let infoElem = document.getElementById('info');
let topButton = document.getElementById('nav--top');

function revealInfo() {
    infoElem.classList.toggle("grid");
    infoElem.classList.toggle("hide-element");

    if(infoElem.classList.contains("hide-element")) {
        infoButton.style.color = "var(--black-30)";
    } else {
        infoButton.style.color = "var(--black)";
    }

    if(infoElem.classList.contains("hide-element")) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
}

infoButton.addEventListener("click", revealInfo);

// BACK TO TOP
window.onscroll = () => {

        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 && infoElem.classList.contains("hide-element")) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

}