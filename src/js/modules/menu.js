const openMenu = (selectorBurger, menu) => {
  const burger = document.querySelector(selectorBurger);
  burger.addEventListener('click', () => {
    menu.classList.add('show');
    document.body.style.overflow = 'hidden';
  })
}

const closeMenu = (selectorClose, menu) => {
  const close = document.querySelector(selectorClose);
  close.addEventListener('click', () => {
    menu.classList.remove('show');
    document.body.style.overflow = '';
  })
}

const addMenu = () => {
  const menu = document.querySelector('.header-menu__wrapper');
  openMenu('.header__burger', menu);
  closeMenu('.header-menu__close', menu)
}

export default addMenu;
