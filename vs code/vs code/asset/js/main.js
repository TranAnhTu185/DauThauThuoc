window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.header').classList.add('nav');
    }
    else {
      document.querySelector('.header').classList.remove('nav');
    }
}

document.querySelector('.menu__mobile').onclick = () => {
    document.querySelector('.nav__menu-mobile').classList.add('show');
    document.querySelector('.menu__mobile').style.display = "none";
    document.querySelector('.close-menu').style.width = "16%";
}

document.querySelector('.close-menu').onclick = () => {
    
    document.querySelector('.nav__menu-mobile.show').classList.remove('show');
    // document.querySelector('.nav__menu-mobile.show').style.animation = "fadeOutMenubobile 2s linear";
    document.querySelector('.menu__mobile').style.display = "flex";
    document.querySelector('.close-menu').style.width = "0";
}