const hamburguer = document.querySelector(".nav-humberguer");
const data= document.querySelector("#data");
const navmenu = document.querySelector(".nav-menu");
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navmenu.classList.toggle("active");
});

let novadata=new Date();
data.innerHTML=novadata.getFullYear();
