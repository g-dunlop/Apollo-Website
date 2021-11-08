//picture darken//

const navSlide = () =>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', ()=>{
  nav.classList.toggle('nav-active');

navLinks.forEach((link, index) => {
  if (link.style.animation){
    link.style.animation = '';}
    else{  
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
    }
});
  burger.classList.toggle('toggle');
});
}

navSlide();


const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
        
        portfolioItems.forEach(portfolioItem => {
          portfolioItem.addEventListener('mouseover', () => {
            portfolioItem.childNodes[1].classList.add('img-darken');
                                      
          })
          
          portfolioItem.addEventListener('mouseout', () => {
            portfolioItem.childNodes[1].classList.remove('img-darken');
                                      
          })
        })
        
     //Netflix tabs//
        
        const tabItems = document.querySelectorAll(".tab-item");

const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder(){
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}

function removeShow(){
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});

//trainer pics//

const trainerPics = document.querySelectorAll(".trainer-pic");

const trainerBios = document.querySelectorAll(".trainer-bio")

function showBio(e) {
  
  removeTheShow();
  const trainerBio = document.querySelector(`#${this.id}-bio`);
  trainerBio.classList.add('show');
}

function removeTheShow(){
  trainerBios.forEach(item => {
    item.classList.remove('show');
  })
}

function pictureOpacity(e){
  removePictureOpacity();
  const trainerPic = document.querySelector(`#${this.id}`);
  trainerPic.classList.add('solid');
}

function removePictureOpacity(){
  trainerPics.forEach(item => {
    item.classList.remove('solid');
  });
}

trainerPics.forEach(item => {
  item.addEventListener('click', showBio);
  item.addEventListener('click', pictureOpacity);
});
