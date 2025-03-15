function GetWeather() {
  const selectWeather = document.querySelector("#weatherIMG");
  const weatherIcons = {
    Clear: "images/clear.png",
    Clouds: "images/clouds.png",
    Drizzle: "images/drizzle.png",
    Mist: "images/mist.png",
    Rain: "images/rain.png",
    Wind: "images/wind.png",
    Snow: "images/snow.png",
  };
  document.querySelector("button").onclick = () => {
    let cityName = document.querySelector("input").value;
    const response = fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=c96917e577617e96fa9c88bb28889d00`
    )
      .then((response) => {
        if (!response.ok) {
          details.style.display = "none";
          error.style.display = "block";
          throw "Invalid City Name!";
        }
        return response.json();
      })
      .then((data) => {
        details.style.display = "flex";
        error.style.display = "none";
        document.querySelector("#temp").innerHTML =
          Math.floor(data.main.temp) + " °C";
        document.querySelector("#cityName").innerHTML = data.name;
        document.querySelector("#humidity").innerHTML =
          data.main.humidity + " %";
        document.querySelector("#windSpeed").innerHTML =
          data.wind.speed + " km/h";
        selectWeather.src = weatherIcons[data.weather[0].main];
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
GetWeather();
