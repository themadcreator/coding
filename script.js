var header = document.querySelector("h1");

function changeColor() {
  header.style.color = "hsl( " + Math.random() + " , 100%, 50%)";
  setTimeout(changeColor, 500);
}
setTimeout(changeColor, 500);
