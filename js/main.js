window.addEventListener("DOMContentLoaded", (event) => {

  const menuBtn = document.querySelector('.menu__btn');
  const menuClose = document.querySelector('.menu__close');
  const menuList = document.querySelector('.menu__list');
  const menuSladow = document.querySelector('.menu--close');

  menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open')
    menuSladow.classList.toggle('menu--open')
  });
  menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open')
    menuSladow.classList.remove('menu--open')
  });


});