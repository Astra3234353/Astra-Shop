export function scrollIndexHeader() {
    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const headerTitle = document.querySelector('.header-title');
    const dynamicViewportHeight = window.innerHeight;

    if (window.scrollY > dynamicViewportHeight * 0.1) {
        header.style.opacity = '1';
        header.style.background = '#ededed';
        headerTitle.style.opacity = '1';
        header.style.boxShadow = "0 0 8px black";
    } else {
        header.style.background = '';
        header.style.opacity = '0.8';
        headerTitle.style.opacity = '0';
        header.style.boxShadow = "0 0 0 black";
    }
  })
};

export function scrollHeader() {
    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.opacity = '1';
        header.style.background = '#ededed';
    }
  })
};



// Random Background
const mainInfoDiv = document.querySelector('.main-info');


const backgrounds = [
    'url("../img/wallpapers/hd-official-igg-backend-11k-fight.jpg")',
    'url("../img/wallpapers/hd-oficial-igg-backtend-image.jpg")',
    'url("../img/wallpapers/hd-official-igg-3.jpg")',
    'url("../img/wallpapers/hd-official-igg-chaos.jpg")',
    'url("../img/wallpapers/hd-official-igg-wesley.png")',
    'url("../img/wallpapers/hd-official-igg-hero.jpg")'
];

export function cambiarFondo() {
    const randomNum = Math.floor(Math.random() * backgrounds.length);
    if (mainInfoDiv) {
        mainInfoDiv.style.backgroundImage = backgrounds[randomNum];
    }
}

window.onload = cambiarFondo;

setInterval(cambiarFondo, 5000);
