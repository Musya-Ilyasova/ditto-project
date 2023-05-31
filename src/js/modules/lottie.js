import Lottie from "lottie-web";

const lottie = Lottie;

const container1 = '#js-animation-1',
      path1 = './js/animations/1.json',
      container2 = '#js-animation-2',
      path2 = './js/animations/2.json',
      container3 = '#js-animation-3',
      path3 = './js/animations/3.json',
      container4 = '#js-animation-4',
      path4 = './js/animations/4.json',
      container5 = '#js-animation-5',
      path5 = './js/animations/5.json',
      container6 = '#js-animation-6',
      path6 = './js/animations/6.json',
      container7 = '#js-animation-7',
      path7 = './js/animations/7.json';

const animationOptions = (container, path) => {
  return {
    container: document.querySelector(container),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: path
  }
}

const animation1 = lottie.loadAnimation(animationOptions(container1, path1));
const animation2 = lottie.loadAnimation(animationOptions(container2, path2));
export const animation3 = lottie.loadAnimation(animationOptions(container3, path3));
export const animation4 = lottie.loadAnimation(animationOptions(container4, path4));
export const animation5 = lottie.loadAnimation(animationOptions(container5, path5));
export const animation6 = lottie.loadAnimation(animationOptions(container6, path6));
export const animation7 = lottie.loadAnimation(animationOptions(container7, path7));

const animationVisible = (container, animation) => {
  const target = document.querySelector(container);
  var targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
  windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };
  if (targetPosition.bottom > (windowPosition.top + 200) && targetPosition.top < (windowPosition.bottom - 200)) {
    if(!(target.classList.contains('animated'))){
      target.classList.add('animated');
      animation.play();
    }
  }
};

export const animationPlay = () => {
  window.addEventListener('scroll', () => {
    animationVisible(container1, animation1);
    animationVisible(container2, animation2);
    animationVisible(container3, animation3);
  })
}


