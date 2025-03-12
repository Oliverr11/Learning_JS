function clickBox(id, name, soundUrl) {
  const element = document.getElementById(id);
  element.addEventListener("click", (e) => {
    let button = e.currentTarget;
    addAnimation(button);
    playSound(soundUrl);
  });
}
//having name arg because the first exercise want me to alert the key that i press
clickBox(`w`, `W`, `tom-1.mp3`);
clickBox(`a`, `A`, `tom-2.mp3`);
clickBox(`s`, `S`, `tom-3.mp3`);
clickBox(`d`, `D`, `tom-4.mp3`);
clickBox(`j`, `J`, `snare.mp3`);
clickBox(`k`, `K`, `crash.mp3`);
clickBox(`l`, `L`, `kick-bass.mp3`);
function keyPress(key, name, soundUrl) {
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() == key.toLowerCase()) {
      let button = document.getElementById(name.toLowerCase());
      addAnimation(button);
      playSound(soundUrl);
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

function playSound(soundFile) {
  const sound = new Audio(`assets/sounds/` + soundFile);
  sound.play();
}
function addAnimation(button) {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
}
