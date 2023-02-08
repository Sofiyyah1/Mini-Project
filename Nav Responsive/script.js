// const navShow = document.querySelector(".hamburger");
// const navLinks = document.querySelector("nav ul");

// navShow.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector("nav ul");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
