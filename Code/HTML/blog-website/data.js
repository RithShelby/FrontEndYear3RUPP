window.onscroll = function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 200) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
