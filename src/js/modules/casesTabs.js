import { animation3, animation4, animation5, animation6, animation7 } from "./lottie";

const animations = [animation3, animation4, animation5, animation6, animation7];
const casesTabs = () => {
  const header = document.querySelector('.cases-tabs__btns'),
        tab = document.querySelectorAll('.cases-tabs__btn'),
        content = document.querySelectorAll('.cases-tabs-content__item');
  function hideTabContent() {
    content.forEach(item => {
      item.classList.remove('active');
    });

    tab.forEach(item => {
      item.classList.remove('active');
    })
  };

  let firstRender = true;

  function showTabContent(i = 0) {
    content[i].classList.add('active');
    tab[i].classList.add('active');
    if(!firstRender) {
      animations[i].goToAndPlay(0);
      animations[i].play();
    }
    firstRender = false;
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if(target && (target.classList.contains('cases-tabs__btn') || target.parentNode.classList.contains('cases-tabs__btn'))) {
      tab.forEach((item, i) => {
        if(target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })
}

export default casesTabs;
