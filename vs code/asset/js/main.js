const MenuMoble = document.querySelector('.menu__mobile');
const NavMenuNobule = document.querySelector('.nav__menu-mobile');
const CloseMenu = document.querySelector('.close-menu');
let animateMuis =  document.querySelectorAll('.animate-mui');
let procedureContainers = document.querySelectorAll('.procedure-container');
let ProcedureDes = document.querySelectorAll('.procedure-description');

const btnScollTop = document.querySelector('.controller__right-up');

window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.header').classList.add('nav');
      btnScollTop.style.display = "flex";
    }
    else {
      document.querySelector('.header').classList.remove('nav');
      btnScollTop.style.display = "none";
    }
}

MenuMoble.onclick = () => {
  NavMenuNobule.classList.add('show');
  MenuMoble.style.display = "none";
  CloseMenu.style.width = "16%";
}

CloseMenu.addEventListener('click', closeMenu) 

function closeMenu() {
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
}, 1500);


btnScollTop.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function stopInterval() {
  clearInterval();
}

//scroll to element
const menuBenefits = document.querySelectorAll('.menu-benefit');
const menuProcedures = document.querySelectorAll('.menu-procedure');
const menuPersonnals = document.querySelectorAll('.menu-personnel');
const menuContacts = document.querySelectorAll('.menu-contact');

for(const menuBenefit of menuBenefits ) {
  menuBenefit.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.benefit').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    closeMenu();
  }
}

for(const menuProcedure of menuProcedures ) {
  menuProcedure.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.procedure').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    closeMenu();
  }
}

for(const menuPersonnal of menuPersonnals ) {
  menuPersonnal.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.new-personnel').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    closeMenu();
  }
}

for(const menuContact of menuContacts ) {
  menuContact.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.contact').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    closeMenu();
  }
}