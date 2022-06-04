let burger = document.querySelector('.menu__burger');
burger.addEventListener('click', function () {
    let header = document.querySelector('.header');
    header.classList.toggle('header--active')
    burger.classList.toggle('menu__burger--active')

});