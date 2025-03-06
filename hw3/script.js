//Task 1
let text = " be, or not to be, that is the question...";
let i = 0;

let task1 = setInterval(() => {
  document.getElementById("ptext").innerHTML += text[i];
  i++;
  if (i == text.length) {
    clearInterval(task1);
    setTimeout(() => {
      document.getElementById("ptext").innerHTML +=
        '<br>William Shakespeare, from "Hamlet"';
    }, 100);
  }
}, 200);
//Task 2
setInterval(() => {
  let today = new Date();
  let nextYear = today.getFullYear() + 1; // get next year
  let newYearsDay = new Date(nextYear, 0, 1); // jan 1st of next year
  // calculate the difference in milliseconds
  let timeDifference = newYearsDay - today;
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

//task 3
let products = ["apple", "ice cream", "kiwi", "potato", "sour cream", "tomato"];
function printList() {
  document.getElementById("task3").innerHTML = "";
  products.sort();
  let count = 0;

  for (let item of products) {
    document.getElementById("task3").innerHTML += `${++count}. ${item} <br>`;
    //console.log(`${++count}. ${item}`);
  }
}
function add() {
  products.push("pumpkin");
}

printList();
setTimeout(() => {
  add();
  printList();
  setTimeout(() => {
    products = ["C#", "HTML", "JavaScript", "PHP"];
    printList();
  }, 4000);
}, 4000);
