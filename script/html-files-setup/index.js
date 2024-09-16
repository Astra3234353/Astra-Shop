import { scrollIndexHeader, cambiarFondo } from "../maths/header-scroll.js";

const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header-title');

header.style.opacity = '0.8';
headerTitle.style.opacity = '0';
header.style.boxShadow = "0 0 0 black";

scrollIndexHeader();
cambiarFondo();

const dynamicViewportHeight = window.innerHeight;
