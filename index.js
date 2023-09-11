window.onscroll = function() {Menuniisticky()};

var navbar = document.getElementById("menu");

var sticky = navbar.offsetTop;

function Menuniisticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("background-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


var logo = document.querySelector(".logo h1");
        var imageContainer = document.querySelector(".imagecontainer");

        logo.addEventListener("click", function () {
            var offsetTop = imageContainer.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth" 
            });
});
