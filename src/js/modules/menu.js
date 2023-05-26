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

const openSubMenu = (links, link, overlay) => {
  links.forEach(item => item.classList.remove('active'));
  link.classList.add('active');
  overlay.style.display = "block";
}

const closeSubMenu = (links, overlay) => {
  links.forEach(item => item.classList.remove('active'));
  overlay.style.display = "";
}

const addMenu = () => {
  const menu = document.querySelector('.menu__wrapper');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.menu__link_submenu');
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.prepend(overlay);
  openMenu('.header__burger', menu);
  closeMenu('.menu__close', menu);
  links.forEach(link => {
    link.addEventListener('mouseover', () => openSubMenu(links, link, overlay));
    link.addEventListener('click', () => openSubMenu(links, link, overlay));
  });
  overlay.addEventListener('click', () => closeSubMenu(links, overlay));
}

export default addMenu;
