const button = document.getElementById("mybutton");
const audio = document.getElementById("myaudio");
button.addEventListener("click", () => {
  audio.play();
  setTimeout(() => {
  }, audio.duration * 1000);
});