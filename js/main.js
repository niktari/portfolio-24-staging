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