import Lottie from "lottie-web";

export const lottie = Lottie;

const container1 = '#js-animation-1',
      path1 = './js/animations/1.json',
      container2 = '#js-animation-2',
      path2 = './js/animations/2.json',
      container3 = '#js-animation-3',
      path3 = './js/animations/3.json';

export const animationOptions = (container, path) => {
  return {
    container: document.querySelector(container),
    renderer: "svg",
    loop: false,
    autoplay: false,
    progressiveLoad: true,
    path: path,
    rendererSettings: {
      mount: false,
    },
  }
}

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

const animation1 = lottie.loadAnimation(animationOptions(container1, path1));
const animation2 = lottie.loadAnimation(animationOptions(container2, path2));
const animation3 = lottie.loadAnimation(animationOptions(container3, path3));

export const animationPlay = () => {
  window.addEventListener('scroll', () => {
    animationVisible(container1, animation1);
    animationVisible(container2, animation2);
    animationVisible(container3, animation3);
  })
}


