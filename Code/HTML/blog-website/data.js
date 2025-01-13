document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const main = document.querySelector("main");

  function adjustMainPadding() {
    const navbarHeight = navbar.offsetHeight;
    main.style.paddingTop = `${navbarHeight}px`;
  }

  // Adjust on page load
  adjustMainPadding();

  // Adjust when the window is resized
  window.addEventListener("resize", adjustMainPadding);
});
