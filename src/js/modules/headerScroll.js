function headerSticky() {
  const header = document.querySelector('.header');
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
      setTimeout(() => {
        header.classList.remove('show');
        header.classList.remove('scroll');
      }, '100');
    };
    position = window.scrollY;
  })
}

export default headerSticky;
