var btn = document.querySelector('.hamburgerMenu');
var hamMenu = document.querySelector('.links');
let isOpen = false;

btn.addEventListener('click', function() { 
   let hamMenuWidth = window.getComputedStyle(hamMenu).width;
   // opens menu
    if(!isOpen){
      btn.style.background = '#ce643e';
      hamMenu.style.animationName = "linksAnimation";
      isOpen = true;
      console.log("open");
      // closes menu
    } else {
      btn.style.background = '#FE7D4E';
      hamMenu.style.animationName = "linksAnimation2";
      isOpen = false;
      console.log(hamMenuWidth)
    }
})