// box.onclick = (e) => {
//   console.log(`Body clicked : X: ${e.x} Y: ${e.y}`);

//   box.style.width = e.x + "px";
//   box.style.height = e.y + "px";
// };

function whBox(e) {
  console.log(`Body clicked : X: ${e.pageX} Y: ${e.pageY}`);
  box.style.width = e.pageX + "px";
  box.style.height = e.pageY + "px";
}
