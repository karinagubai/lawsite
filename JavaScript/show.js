const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const mainNav = document.querySelector('.main-nav-block');
const showAbout = document.querySelector('.about .show-hidden');
const buttonMore = document.querySelector('.about-text button');
const serviceList = document.querySelector('.service-list');
const closeService = document.querySelector('.close');
const modal  = document.querySelector('.modal');
const showPortfolio = document.querySelector('.more-portfolio');
const buttonPortfolio = document.querySelector('.portfolio button');


buttonMore.addEventListener ('click', () => {
    showAbout.style.display = 'block';
    buttonMore.style.display = 'none';
})

buttonPortfolio.addEventListener ('click', () => {
    showPortfolio.className = 'portfolio-block';
    buttonPortfolio.style.display = 'none';
})

// open-close navigation

openNav.addEventListener ('click', () => {
    mainNav.style.display = 'block';
})

mainNav.addEventListener ('click', (event) => {
    if (event.target.tagName = 'li' && window.innerWidth <= 768) {
        mainNav.style.display = 'none';
    }
})

closeNav.addEventListener ('click', () => {
    mainNav.style.display = 'none';
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mainNav.style.display = 'flex';
    } else {
        mainNav.style.display = 'none';
    }
})

// show service

serviceList.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        let figcaption = event.target.parentNode;
        let modalDiv = figcaption.nextElementSibling;
        modalDiv.className = 'modal';
    }
})

window.addEventListener ('click', (event) => {
    if(event.target.className === 'close'){
        let modalContent  = event.target.parentNode;
        let modal  = modalContent.parentNode;
        modal.className  = 'show-hidden';
    } else if (event.target.className === 'modal'){
        modal.className  = 'show-hidden';
    }

})
