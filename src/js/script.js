const hamburguer = document.querySelector(".nav-humberguer");
const navmenu = document.querySelector(".nav-menu");
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navmenu.classList.toggle("active");
});
