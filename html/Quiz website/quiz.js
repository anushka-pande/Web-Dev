const audio = new Audio();
audio.src = "./mouse-click-153941.mp3";

function myFunction() {
  document.getElementById("mydropdown").classList.toggle("show");
}

document.addEventListener("click", function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

var modal = document.getElementById('id01');

function openModal() {
  modal.style.display = "block";
}

modal.addEventListener("click", function (event){
  if(event.target == modal) {
    modal.style.display = "none";
  }
});

var Modal = document.getElementById('id02');

function openModal2() {
  Modal.style.display = "block";
}

modal.addEventListener("click", function (event){
  if(event.target == Modal) {
    Modal.style.display = "none";
  }
});