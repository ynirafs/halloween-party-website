/*=============== SHOW MENU ===============*/
const 
    navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/*validate if constant exists*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/*validate if constant exists*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    
    //when click on each nav__link, we remove show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')

    //if scroll > 50vh, add bg-header class to <header>
    this.scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const 
            sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link')
            } else {
                sectionClass.classList.remove('active-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    //if scroll > 350vh, add show-scroll class
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animations repeat
})

sr.reveal(`.home__data, .footer__content, .footer__logo, .footer__description`)
sr.reveal(`.home__tree-1`, {origin: 'left', delay: 800})
sr.reveal(`.home__tree-2`, {origin: 'right', delay: 800})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.category__card, .items__card`, {interval: 100})
sr.reveal(`.about__img, .about__data, .footer__tree-2`, {origin: 'left'})
sr.reveal(`.party__images, .party__data, .footer__tree-1`, {origin: 'right'})