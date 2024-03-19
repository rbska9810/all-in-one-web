var swiper = new Swiper(".main", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop : true,
});

/* new-meat */
var swiper = new Swiper(".new-meat", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop : true,
});


/* review */
var swiper = new Swiper(".review", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

/* category-Left */



let mainContainer = document.querySelector('.main-container');
let category = document.querySelector('.category');

let trigger = document.querySelectorAll('.trigger');
let categoryBg = document.querySelector('.category-black-bg');
let categoryCloseBtn = document.querySelector('.category-close-btn');

window.addEventListener('resize',function(){
  let mainContainerleft = mainContainer.offsetLeft;
  category.style.left = mainContainerleft+'px';
})
window.addEventListener('load',function(){
  let mainContainerleft = mainContainer.offsetLeft;
  category.style.left = mainContainerleft+'px';
})
trigger.forEach(function(button){
  button.addEventListener('click',function(){
    categoryBg.classList.add('on');
  })
})
categoryCloseBtn.addEventListener('click',function(){
  categoryBg.classList.remove('on');
})

/* 카테고리안에 있는 리스트 누르면 서브 리스트 나옴 */
let view = document.querySelectorAll('.view');
let viewList = document.querySelectorAll('.category-list>li>ul');

for(let i = 0; i<view.length; i++){
  view[i].addEventListener('click',function(){
    let viewOn = document.querySelector('.view.on');
    for(let j = 0;j<viewList.length;j++){
      view[j].classList.remove('on');
      view[i].classList.add('on');
    }
    viewOn.classList.remove('on');
  })
  
}
