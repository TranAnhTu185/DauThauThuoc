const MenuMoble = document.querySelector('.menu__mobile');
const NavMenuNobule = document.querySelector('.nav__menu-mobile');
const CloseMenu = document.querySelector('.close-menu');
let animateMuis =  document.querySelectorAll('.animate-mui');
let procedureContainers = document.querySelectorAll('.procedure-container');
let ProcedureDes = document.querySelectorAll('.procedure-description');

console.log(ProcedureDes);
window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.header').classList.add('nav');
    }
    else {
      document.querySelector('.header').classList.remove('nav');
    }
}

MenuMoble.onclick = () => {
  NavMenuNobule.classList.add('show');
  MenuMoble.style.display = "none";
  CloseMenu.style.width = "16%";
}

CloseMenu.onclick = () => {
  document.querySelector('.nav__menu-mobile.show').classList.remove('show');
  MenuMoble.style.display = "flex";
  CloseMenu.style.width = "0";
}

let indexActive = 0;

setInterval(() => {
  animateMuis.forEach(item => {
    if (item.classList.contains('active')) {
        item.classList.remove('active');
    }
  }) 

  ProcedureDes.forEach(pro => {
    if(indexActive + 1 > 8 ) {
      ProcedureDes[0].classList.add('active');
    }
    if(pro.classList.contains('active') && indexActive + 1 <= 8) {
      pro.classList.remove('active');
    }
  })


  if (indexActive == animateMuis.length) {
    ProcedureDes[0].classList.add('active');
    setTimeout(() => {
      indexActive = 0;
    },1000)
  }
  animateMuis[indexActive].classList.add('active');
  ProcedureDes[indexActive + 1].classList.add('active');
  indexActive++;
}, 2000)