import { scrollHeader } from "../maths/header-scroll.js";

scrollHeader();

const dialog = document.querySelector('.dialog-alert');
const closeDialogBtn = document.querySelector('.modal__close-button');

closeDialogBtn.addEventListener("click", () => {
    dialog.style.display = 'none';
});