const audio = new Audio();
audio.src = "./mouse-click-153941.mp3";

function myFunction() {
  document.getElementById("mydropdown").classList.toggle("show");
}

window.onclick = function(event){
  if(!event.target.matches('.dropbtn')){
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for(i=0;i< dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}