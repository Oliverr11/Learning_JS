/*
function showAlert() {
  alert("This is onclick event with global function and paste by reference");
}
clickableDiv.onclick = function () {
  alert("This is onclick event with annonymous function");
};

// clickableDiv.onclick = showAlert;

// clickableDiv.onclick = () => alert("This is onclick event with arrow function");
*/

// clickableDiv.onclick = (e) => {
//   alert("Div has been clicked");
//   console.log(e);
// };

boxBlue.addEventListener("click", (e) => {
  alert(
    "This is onclick event method. (clickableDiv.onclick ( it's call by properties ) )"
  );
  console.log(e);
});

function moveBoxRed(e) {
  //moving box
  console.log(`Body clicked : X: ${e.x} Y: ${e.y}`);
  boxRed.style.left = e.pageX + "px";
  boxRed.style.top = e.pageY + "px";
}



box.onclick = (e) => {
  box.style.backgroundColor =
    "rgb(" +
    Math.round(255 * Math.random()) +
    "," +
    Math.round(255 * Math.random()) +
    "," +
    Math.round(255 * Math.random()) +
    ")";
};
