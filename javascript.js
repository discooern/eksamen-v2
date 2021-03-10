// gets 2 classes from index.html and stores them in variables
var btn = document.querySelector('.hamburgerMenu');
var hamMenu = document.querySelector('.links');
let isOpen = false;

// Gives the element with class hamburgerMenu a click function
btn.addEventListener('click', function() { 
    // Sets a variable to the numeral value of .links (width)
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