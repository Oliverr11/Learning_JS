document.getElementById("click-me-btn").innerHTML = "Click Me Bro~~";
document.getElementById("click-me-btn").style.backgroundColor = "Blue";
document.getElementById("click-me-btn").style.color = "white";
document.getElementById("click-me-btn").style.borderStyle = "none";
document.getElementById("click-me-btn").style.borderRadius = "4px";
document.getElementById("click-me-btn").style.height = "45px";

let itemList = document.getElementsByClassName("list");
itemList[2].style.color = "blue";
itemList[1].style.color = "red";

document.getElementsByTagName("h1")[0].style.backgroundColor = "navy";
document.getElementsByTagName("h1")[0].style.color = "white";
document.getElementsByTagName("h1")[0].style.textAlign = "center";

document.querySelector(".list").innerText = "Hello All Bro~";

// document.querySelector(".list").children[0].innerText = "Go To Google";

const elements = document.querySelectorAll(".list");

// Check if there are enough elements and then change the background color of the third one
if (elements.length >= 3) {
  elements[2].style.backgroundColor = "red"; // Apply background color to the third element
}
