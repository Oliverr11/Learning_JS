//synchronoous

/*
async function GetUserList() {
  console.log("Start 1 request...");
  const response = await fetch("https://reqres.in/api/users?page=2");
  let jsonData = await response.json();
  if (response.ok) {
    console.log("Api1 getting success!");
    console.log(jsonData);
  } else {
    console.log("Error getting api!");
    return;
  }
  console.log("End 1 request...");
}
GetUserList();
*/

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
