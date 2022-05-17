const MenuMoble = document.querySelector('.menu__mobile');
const NavMenuNobule = document.querySelector('.nav__menu-mobile');
const CloseMenu = document.querySelector('.close-menu');
let animateMuis =  document.querySelectorAll('.animate-mui');
let procedureContainers = document.querySelectorAll('.procedure-container');
let ProcedureDes = document.querySelectorAll('.procedure-description');

const btnScollTop = document.querySelector('.controller__right-up');

console.log(btnScollTop);
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
}, 2000);

// if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  
// } else {
//   btnScollTop.style.display = "none";
// }


btnScollTop.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

//scroll to element
document.querySelector('#benefit').addEventListener('click',function(){
  document.querySelector('.benefit').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})