const menu = document.querySelector(".lista");
const botaoMenu = document.querySelector("#botao-menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const linksInternos = document.querySelectorAll("a[href^='#']");
linksInternos.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const abas = document.querySelectorAll(".abas-skills input");
const listaSkills = document.querySelectorAll(".lista-skills");
const softSkills = document.querySelectorAll(".soft");

abas.forEach((aba, index) => {
  aba.addEventListener("change", () => {
    listaSkills.forEach(skill => skill.style.display = "none");
    softSkills.forEach(skill => skill.style.display = "none");

    if (aba.checked) {
      if (index === 0) {
        listaSkills[index].style.display = "block";
      } else {
        softSkills[index - 1].style.display = "block";
      }
    }
  });
});

