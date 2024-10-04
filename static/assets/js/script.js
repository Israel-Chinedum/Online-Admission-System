const navBtn = document.querySelector(".navbar-toggler");
let navBtnOpen = document.getElementById("navTogglerOpen");
let navBtnClose = document.getElementById("navTogglerClose");
const navbar = document.getElementById("navbar");
const navBarNav = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll("a.nav-link");

navBtnClose.style.display = "none";
function changeNavIcon() {
  if (!(navBtnClose.style.display == "block")) {
    navBtnOpen.style.display = "none";
    navBtnClose.style.display = "block";
  } else {
    navBtnOpen.style.display = "block";
    navBtnClose.style.display = "none";
  }
}
