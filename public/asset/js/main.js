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

 let PCInterval = setInterval(() => {
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
  clearInterval(PCInterval);
  clearInterval(mobileInterval);
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


// register Test

const btnRegisterTests = document.querySelectorAll('.js-register');
const modal = document.querySelector('.js-modal');
const buttonCloseTest = document.querySelector('.close-test');
const modalContainer = document.querySelector('.js-modal-container');
const formRes = document.querySelector('.form-resgister');

for(const btnRegisterTest of btnRegisterTests) {
  btnRegisterTest.onclick = () => {
    if(formRes.classList.contains('hide')) {
      formRes.classList.remove('hide');
    }
    modal.classList.add('open');
    formRes.classList.add('show');
  }
}

buttonCloseTest.onclick = () => {
  formRes.classList.remove('show');
  formRes.classList.add('hide');
  setTimeout(() => {
    modal.classList.remove('open');
  }, 700);
  
}

modalContainer.addEventListener('click', function (event) {
  //ng???ng n???i b???t
  event.stopPropagation()
})

// animation-mobile 
 const MuiMobiles = document.querySelectorAll('.animate-mui-m');
 const desMobiles = document.querySelectorAll('.procedure-mobile-des');
 let index = 0;

 let mobileInterval = setInterval(() => {
  MuiMobiles.forEach(item => {
     if (item.classList.contains('active')) {
         item.classList.remove('active');
     }
   }) 
 
   desMobiles.forEach(des => {
     if(index + 1 > 8 ) {
      desMobiles[0].classList.add('active');
     }
     if(des.classList.contains('active') && index + 1 <= 8) {
       des.classList.remove('active');
     }
   })
 
 
   if (index == MuiMobiles.length) {
     desMobiles[0].classList.add('active');
     setTimeout(() => {
       index = 0;
     },1000)
   }
   document.querySelector(`.dt-${index}`).classList.add('active');
   document.querySelector(`.pos-${index + 1}`).classList.add('active');
   index++;
 }, 1500);