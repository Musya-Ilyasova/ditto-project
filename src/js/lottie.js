import { animationPlay } from "./modules/lottie";
import { tabsAnimationStart } from "./modules/tabsAnimationStart"


document.addEventListener("DOMContentLoaded",  () => {
  if(document.querySelector('main').classList.contains('index')) {
    animationPlay();
    tabsAnimationStart();
  }
});
