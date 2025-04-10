//synchronoous

function GetUserList() {
  document.querySelector("button").onclick = async () => {
    let cityName = document.querySelector(".input").value;
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=c96917e577617e96fa9c88bb28889d00`
    );
    let jsonData = await response.json();
    if (response.ok) {
      document.writeln(jsonData.weather[0].main);
    } else {
      console.log("Error getting api!");
      return;
    }
  };
}
GetUserList();
/*
async function getData() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    if (!response.ok) {
      throw `Response status: ${response.status}`;
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
getData();
*/

//Asynchronous request
/*
function GetUserList2() {
  const response = fetch("https://reqres.in/api/users?page=2")
    .then((respone) => {
      console.log("Start 2 request..");
      if (!respone.ok) {
        throw "Error!";
      }
      return respone.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("End 2 request..");
}
GetUserList2();
*/

/*
function Login() {
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Added header for JSON data
    },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslickag",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw "Error!";
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
Login();
*/
