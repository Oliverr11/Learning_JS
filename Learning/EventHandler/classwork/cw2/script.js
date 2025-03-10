function changeColor(e, color) {
  box.style.backgroundColor = `${color}`;
}
function moveBox(e) {
  boxMove.style.left = e.pageX + "px";
  boxMove.style.top = e.pageY + "px";
}
