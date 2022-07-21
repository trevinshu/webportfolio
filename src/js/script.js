const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('menu');
burgerBtn.addEventListener('click', (e) => {
  menu.classList.toggle('showMenu');
  e.preventDefault();
});
