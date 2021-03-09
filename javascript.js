var btn = document.querySelector('.hamburgerMenu');
var hamMenu = document.querySelector('.links');
let isOpen = false;

btn.addEventListener('click', function() { 
   let hamMenuWidth = window.getComputedStyle(hamMenu).width;
   // opens menu
    if(!isOpen){
      btn.style.background = 'gray';
      hamMenu.style.animationName = "linksAnimation";
      isOpen = true;
      console.log("open");
      // closes menu
    } else {
      btn.style.background = 'white';
      hamMenu.style.animationName = "linksAnimation2";
      isOpen = false;
      console.log(hamMenuWidth)
    }
})

