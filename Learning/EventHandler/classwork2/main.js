function clickBox(id, name, soundUrl) {
  const element = document.getElementById(id);
  element.addEventListener("click", () => {
    //alert(`You hit: ${name}`);

    const sound = new Audio(`assets/sounds/` + soundUrl);
    sound.play();
  });
}
clickBox(`tom1`, `W`, `tom-1.mp3`);
clickBox(`tom2`, `A`, `tom-2.mp3`);
clickBox(`tom3`, `S`, `tom-3.mp3`);
clickBox(`tom4`, `D`, `tom-4.mp3`);
clickBox(`snare`, `J`, `snare.mp3`);
clickBox(`crash`, `K`, `crash.mp3`);
clickBox(`kick`, `L`, `kick-bass.mp3`);

function keyPress(key, name, soundFile) {
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() == key.toLowerCase()) {
      //alert(`You hit: ${name}`);

      const sound = new Audio(`assets/sounds/` + soundFile);
      sound.play();
    }
  });
}
keyPress("w", `W`, `tom-1.mp3`);
keyPress("a", `A`, `tom-2.mp3`);
keyPress("s", `S`, `tom-3.mp3`);
keyPress("d", `D`, `tom-4.mp3`);
keyPress("j", `J`, `snare.mp3`);
keyPress("k", `K`, `crash.mp3`);
keyPress("l", "L", "kick-bass.mp3");
