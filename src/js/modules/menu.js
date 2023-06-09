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
  links.forEach(item => item.parentNode.classList.remove('active'));
  link.parentNode.classList.add('active');
  overlay.style.display = "block";
}

const closeSubMenu = (links, overlay) => {
  links.forEach(item => item.parentNode.classList.remove('active'));
  overlay.style.display = "";
}

const toggleSubMenuMobile = (links, link) => {
  if(link.parentNode.classList.contains('active')) {
    links.forEach(item => item.parentNode.classList.remove('active'));
  } else {
    links.forEach(item => item.parentNode.classList.remove('active'));
    link.parentNode.classList.add('active');
  }
}

const addMenu = () => {
  const menu = document.querySelector('.menu__wrapper');
  const links = document.querySelectorAll('.menu__link_submenu');
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.prepend(overlay);
  openMenu('.header__burger', menu);
  closeMenu('.menu__close', menu);
  links.forEach(link => {
    if(window.innerWidth<"768") {
      link.parentNode.addEventListener('click', () => toggleSubMenuMobile(links, link));
    } else {
      link.parentNode.addEventListener('mouseover', () => openSubMenu(links, link, overlay), true);
      link.parentNode.addEventListener('mouseout', () => closeSubMenu(links, overlay), true);
    }
  });
  overlay.addEventListener('click', () => closeSubMenu(links, overlay));
}

export default addMenu;
