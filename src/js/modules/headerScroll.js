export const headerScroll = () => {
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.menu__link_submenu');
  const overlay = document.querySelector('.overlay');
  let position = window.scrollY;
  document.addEventListener('scroll', () => {
    if(window.scrollY <= 0) {
      setTimeout(() => {
        header.classList.add('show');
        header.classList.remove('scroll');
      }, '100');
    } else if(position != 0 && position > window.scrollY) {
      setTimeout(() => {
        header.classList.add('show');
        header.classList.add('scroll');
      }, '100');
    } else {
      links.forEach(item => item.classList.remove('active'));
      overlay.style.display = "";
      setTimeout(() => {
        header.classList.remove('show');
        header.classList.remove('scroll');
      }, '100');
    };
    position = window.scrollY;
  })
}

export const scrollToTheSection = () => {
  const anchors = document.querySelectorAll('.header a[href*="./#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(3);
      let elem = document.getElementById(blockID),
      elemY = elem.getBoundingClientRect().top,
      elemH = elem.clientHeight,
      wHeight = document.documentElement.clientHeight,
      height = (wHeight - elemH) / 2,
      scrollheight = elemY - height;
      window.scrollBy({
        top: scrollheight,
        left: 0,
        behavior: 'smooth'
      });
    });
  };
}


