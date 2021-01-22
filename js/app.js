/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// build the nav
const nav_list= document.querySelectorAll("section");
const myUl = document.getElementById("navbar__list");
   // create fragment
let nav_fragment = document.createDocumentFragment();
 /**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function addItemList(){
  for (let i = 0; i < nav_list.length; i++){
      let newText= nav_list[i].getAttribute("data-nav");
      // creat new li
      let newLi= document.createElement("li");
      // create new link
      let newLink= document.createElement ("a");
      // create text node
      let textNode = document.createTextNode (newText);

      // add eventListener
      newLink.addEventListener("click", function(){
          nav_list[i].scrollIntoView({behavior : "smooth"});
      });
      // add the text to the link
      newLink.appendChild(textNode);
      //add the link to the li item 
      newLi.appendChild(newLink);
      //add the li items to the fragment 
      nav_fragment.appendChild(newLi);
  }
  //add the fragmnet to the navbar menue
  myUl.appendChild(nav_fragment);
}
// Build menu
addItemList();


// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",function() {
  for (let i = 0; i < nav_list.length; i++) {
    //check the section if it is in the viewport
      let rect =  nav_list[i].getBoundingClientRect();
      if (rect.top > 0 && rect.bottom <= window.innerHeight) {
        let active = nav_list[i];
        nav_list.forEach((item)=>{
          //remove the active class from the first section
          item.classList.remove("your-active-class");
        });
        // Set sections as active
        active.classList.add("your-active-class");
        let link= document.querySelectorAll("a");
        link.forEach((sectionLink) =>{
          for (var section of nav_list){
            // set the section-link in the navbar as active
            sectionLink.classList.remove("your-active-class");
            if (sectionLink.innerText == section.getAttribute("data-nav")){
              sectionLink.classList.add("your-active-class")
            }
        };
      });  
    };
  }
});
// Hide navbar when scrolling
$(function(){
  var t;
  document.addEventListener('scroll',function(e){
    $("#navbar__list").fadeOut(500);
      clearTimeout(t);
      checkScroll();
  });
  // check if the scorlling is stopped to show the navbar
  function checkScroll(){
      t = setTimeout(function(){
         $("#navbar__list").fadeIn(500);
      },1000);
  }
});


// create Back to Top Button
var toTopButton = document.createElement("Button");
toTopButton.id="bttButton";
// Add the inner text and append the button to the body
function addButton(){
  toTopButton.innerText="Top";
  document.body.querySelector("main").appendChild(toTopButton);
  toTopButton.addEventListener("click", backToTop);
}
addButton();
// show the button when the page scrolled down
window.onscroll= function(){showButton()};
function showButton(){
  let screenheight = window.scrollY;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    //show the button
    toTopButton.style.display = "block";
  }
  else{
    //hide the button
    toTopButton.style.display = "none";
  }
  }
// click the button to go back to the top of the page
function backToTop(){
  // button.preventDefault();
 document.documentElement.scrollTo({top:0, behavior: "smooth"}) ;
}

