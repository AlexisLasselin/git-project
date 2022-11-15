(function (){

})();

let x = 10;

const manageNotes = document.querySelector('#manage-notes');
const fullscreenBtn = document.querySelector('#fullscreen');
let isFullscreen = false;

fullscreenBtn.addEventListener('click', () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      fullscreen(document.body);
    }
    isFullscreen = !isFullscreen;
  });
  
  function fullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();  
  }
  
  function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozExitFullScreen) document.mozExitFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }