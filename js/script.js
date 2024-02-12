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
window.onscroll = () => {

        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 && infoElem.classList.contains("hide-element")) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

}

// COLORS
let colors = ['rgb(95, 100, 231)', 'rgb(72, 182, 142)', 'rgb(227, 88, 58)', 'rgb(229, 177, 42)', 'rgb(118, 101, 105)']

let infoSection = document.getElementById("info");

infoSection.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

// HIGHLIGHT
window.onmousedown = () => {
    const color = colors.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    colors.push(color);
  };