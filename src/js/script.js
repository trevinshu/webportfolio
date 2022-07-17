const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('menu');
burgerBtn.addEventListener('click', (e) => {
  menu.classList.toggle('showMenu');
  if (menu.classList.contains('showMenu')) {
    menu.classList.add('animate__animated', 'animate__slideInLeft', 'animate__fast');
  } else {
    menu.classList.remove('animate__slideInLeft', 'animate__fast');
  }
  e.preventDefault();
});
