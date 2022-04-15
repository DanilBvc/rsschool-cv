let burger = document.querySelector('.burger');
let greyWrapper = document.querySelector(".wrapper-grey");
let burgerTransformation = function () {
    document.querySelector('.burger-line').classList.toggle('active-burger');
    document.querySelector('.nav-bar__items').classList.toggle('visible');
    let body = document.querySelector('body');
    if(body.style.overflow === 'hidden') {
        body.style.overflow = "visible";
    }else {
        body.style.overflow = "hidden";
    }
    document.querySelector(".header").classList.toggle('header__black-bg');
    document.querySelector(".header__down").classList.toggle('hidden');
    document.querySelector(".header__copy").classList.toggle('hidden');
    document.querySelector(".wrapper-grey").classList.toggle('hidden');
}
burger.addEventListener('click', function () {
   burgerTransformation();
});
let liItems = document.getElementsByClassName('close-burger');
for(let i = 0; i < liItems.length; i++) {
    liItems[i].addEventListener('click', function() {
        burgerTransformation();
    })
}
greyWrapper.addEventListener('click', function() {
    burgerTransformation();
})
/* slider */
let rightArrow = document.querySelector('.arrow-right');
let leftArrow = document.querySelector('.arrow-left');
console.log(rightArrow);
let index = 0;
rightArrow.addEventListener('click', function() {
    index += 1;
    changeSlider();
    console.log('+');
});
leftArrow.addEventListener('click', function() {
  index--;
  changeSlider();
  console.log('-');
 })
let slides = document.getElementsByClassName('slider__item');
function changeSlider() {
for(let i = 0; i < slides.length; i++) {
    if(index > 3) {
        index = 1;
    }else if(index <= 0) {
        index = 1;
    }
}
slides[index - 1].style.display = "flex";
}
