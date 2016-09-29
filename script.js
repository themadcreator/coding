// script.js

function changeColor() {
  var header = document.querySelector("h1");
  var hue = 360 * Math.random();
  header.style.color = "hsl(" + hue + ", 80%, 50%)";
}
setInterval(changeColor, 500);

