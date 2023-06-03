import Lottie from "lottie-web";

const lottie = Lottie;

import { animationOptions } from "./lottie";

let firstRender = true, lastAnim;

const restartAnimation = (i) => {
  if(firstRender) {
    lastAnim = lottie.loadAnimation(animationOptions('#js-animation-3', './js/animations/3.json'));
  }
  lastAnim.destroy();
  let thisAnim = lottie.loadAnimation(animationOptions(`#js-animation-${i+3}`, `./js/animations/${i+3}.json`));
  thisAnim.play();
  lastAnim = thisAnim;
  firstRender = false;
}

export const tabsAnimationStart = () => {
  const tabs = document.querySelectorAll('.cases-tabs__btn');
  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      restartAnimation(i);
    })
  })
}
