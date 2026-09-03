const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  // Toggle Nav
  navLinks.classList.toggle("nav-active");

  // Optional: If you choose to use the Bonus Tip: Animate Hamburger lines to an X
  hamburger.classList.toggle("is-active");
});
