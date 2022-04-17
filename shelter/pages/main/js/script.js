let burger = document.querySelector('.burger');
let greyWrapper = document.querySelector(".wrapper-grey");
let container = document.querySelector('.header .container');

let burgerTransformation = function () {
    document.querySelector('.burger-line').classList.toggle('active-burger');
    document.querySelector('.nav-bar__items').classList.toggle('visible');
    container.style.padding = '0px 30px 0px 10px;'; 
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
