import { scrollIndexHeader, cambiarFondo } from "../maths/header-scroll.js";

const header = document.querySelector('.header');
const headerTitle = document.querySelector('.Astra-Shop-title');
const headerItems = document.querySelectorAll('.header-items');

header.style.opacity = '0.8';
headerTitle.style.opacity = '0';
header.style.boxShadow = "0 0 0 black";
headerItems.forEach((headerItem) => {
  headerItem.style.color = 'white';
  headerItem.style.textShadow = '0 0 3px black';
})


scrollIndexHeader();
cambiarFondo();

const dialog = document.querySelector('.dialog-alert');
const closeDialogBtn = document.querySelector('.modal__close-button');

closeDialogBtn.addEventListener("click", () => {
    dialog.style.display = 'none';
});
