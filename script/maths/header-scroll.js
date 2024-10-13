export function scrollIndexHeader() {
    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const headerTitle = document.querySelector('.Astra-Shop-title');
    const headerItems = document.querySelectorAll('.header-items');
    const dynamicViewportHeight = window.innerHeight;

    if (window.scrollY > dynamicViewportHeight * 0.1) {
        header.style.opacity = '1';
        header.style.background = '#ededed';
        headerTitle.style.opacity = '1';
        header.style.boxShadow = "0 0 8px black";
        headerItems.forEach((headerItem) => {
            headerItem.style.color = 'black';
            headerItem.style.textShadow = 'none';
            headerItem.addEventListener('mouseenter', () => {
                headerItem.style.color = 'white';
            });
            headerItem.addEventListener('mouseleave', () => {
                headerItem.style.color = 'black';
            });
        })
    } else {
        header.style.background = '';
        header.style.opacity = '0.8';
        headerTitle.style.opacity = '0';
        header.style.boxShadow = "0 0 0 black";
        headerItems.forEach((headerItem) => {
            headerItem.style.color = 'white';
            headerItem.style.textShadow = '0 0 3px black';
            headerItem.addEventListener('mouseleave', () => {
                headerItem.style.color = 'white';
            });
        });
    }
  })
};

export function scrollHeader() {
    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const headerItems = document.querySelectorAll('.header-items');
    if (window.scrollY > 0) {
        header.style.opacity = '1';
        header.style.background = '#ededed';
        headerItems.forEach((headerItem) => {
            headerItem.style.textShadow = 'none';
            headerItem.addEventListener('mouseenter', () => {
                headerItem.style.color = 'white';
            });
            headerItem.addEventListener('mouseleave', () => {
                headerItem.style.color = 'black';
            });
        })

    }
  })
};



// Random Background
const mainInfoDiv = document.querySelector('.main-info');


const backgrounds = [
    'url("https://astra3234353.github.io/Astra-Shop/img/wallpapers/hd-official-igg-backend-11k-fight.jpg")',
    'url("https://astra3234353.github.io/Astra-Shop/img/wallpapers/hd-oficial-igg-backtend-image.jpg")',
    'url("https://astra3234353.github.io/Astra-Shop/img/wallpapers/hd-official-igg-3.jpg")',
    'url("https://astra3234353.github.io/Astra-Shop/img/wallpapers/hd-official-igg-chaos.jpg")',
    'url("https://astra3234353.github.io/Astra-Shop/img/wallpapers/hd-official-igg-wesley.png")'
];

export function cambiarFondo() {
    const randomNum = Math.floor(Math.random() * backgrounds.length);
    if (mainInfoDiv) {
        mainInfoDiv.style.backgroundImage = backgrounds[randomNum];
    }
}

window.onload = cambiarFondo;

setInterval(cambiarFondo, 5000);
