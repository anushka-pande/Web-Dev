document.addEventListener('DOMContentLoaded', function() {
  const mybutton = document.getElementById('mybutton');
  const myrules = document.getElementById('myrules');
  const quizBox = document.querySelector('.quiz_box');

  mybutton.addEventListener('click', function(event) {
    event.preventDefault(); 
    myrules.style.display = 'none'; 
    quizBox.style.display = 'block'; 
  });
});

