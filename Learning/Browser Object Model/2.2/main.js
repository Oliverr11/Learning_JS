/*
newWin = window.open("https://itstep.org", "StepWin", "resizable");

buttonClose.onclick = (e) => {
  newWin.close();
};
*/
let text = [
  `<p>Cookie Enabled: ${navigator.cookieEnabled} </p>`,
  `<p>Browser Online: ${navigator.onLine} </p>`,
];
document.write(text.join(""));

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((location) => {
    document.writeln(`<p>Latitude : ${location.coords.latitude}</p>`);
    document.writeln(`<p>Longtitude : ${location.coords.longitude}</p>`);
  });
}
