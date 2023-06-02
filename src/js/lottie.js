import { animationPlay } from "./modules/lottie";

document.addEventListener("DOMContentLoaded",  () => {
  if(document.querySelector('main').classList.contains('index')) {
    animationPlay();
  }
});
