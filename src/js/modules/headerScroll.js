function headerSticky() {
  const header = document.querySelector('.header');
  let position = window.scrollY;
  document.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
      header.classList.add('show');
      header.classList.remove('scroll');
    } else if(position != 0 && position > window.scrollY) {
      header.classList.add('show');
      header.classList.add('scroll');
    } else {
      header.classList.remove('show');
      header.classList.remove('scroll');
    };
    position = window.scrollY;
  })
}

export default headerSticky;
