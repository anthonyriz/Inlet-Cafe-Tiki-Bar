function toggleMenu() {
  var x = document.getElementById("myTopnav");

  var icon = document.getElementById("menuIcon");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon.className = "fa fa-times"; // Change to the "X" icon
  } else {
    x.className = "topnav";
    icon.className = "fa fa-bars"; // Change back to the hamburger icon
  }

  
}
