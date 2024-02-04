const button = document.getElementById("mybutton");
const audio = document.getElementById("myaudio");
button.addEventListener("click", () => {
  audio.play();
  setTimeout(() => {
    window.location.href = "quiz.html";
  }, audio.duration * 1000);
});