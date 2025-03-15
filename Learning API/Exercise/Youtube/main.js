const api = `https://api.adviceslip.com/advice`;
const container = document.getElementById("container");
const advice = document.getElementById("advice");
const fetching = document.getElementById("fetch");

container.addEventListener("click", () => {
  fetching.innerHTML = "Fetching...";
  fetch(api)
    .then((respone) => {
      fetching.innerHTML = "";
      return respone.json();
    })
    .then((data) => {
      advice.innerHTML = data.slip.advice;
    });
});
