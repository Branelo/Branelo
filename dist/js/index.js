function toggleMenu() {
  line1.classList.toggle("line1__active");
  line2.classList.toggle("line2__active");
  line3.classList.toggle("line3__active");
  menu.classList.toggle("menu-list__active");
}

btnMenu.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (
    !(target === menu || menu.contains(target)) &&
    menu.classList.contains("menu-list__active")
  ) {
    toggleMenu();
  }
});

const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu-list");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
