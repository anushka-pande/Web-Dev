let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}

var icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "theme-icons/sun.png"
  }
  else {
    icon.src = "theme-icons/moon.png";
  }
}