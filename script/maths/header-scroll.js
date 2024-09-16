
headerTitle = document.querySelector('.header-title');
headerItems = document.querySelector('.header-items');


function scrollheader() {
    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.style.opacity = '1';
        header.style.background = 'white';
    } else {
        header.style.background = '';
        header.style.opacity = '0.8';
    }
  })
};

scrollheader();



// Random Background
const mainInfoDiv = document.querySelector('.main-info');


const backgrounds = [
    'url("../img/wallpapers/hd-official-igg-backend-11k-fight.jpg")',
    'url("../img/wallpapers/hd-oficial-igg-backtend-image.jpg")',
    'url("../img/wallpapers/hd-official-igg-3.jpg")'
];

function cambiarFondo() {
    const randomNum = Math.floor(Math.random() * backgrounds.length);
    if (mainInfoDiv) {
        mainInfoDiv.style.backgroundImage = backgrounds[randomNum];
    }
}

window.onload = cambiarFondo;

setInterval(cambiarFondo, 5000);