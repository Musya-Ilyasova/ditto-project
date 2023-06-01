import integrationsSlider from "./modules/integrationsSlider";
import platformSlider from "./modules/platformSlider";
import toolsSlider from "./modules/toolsSlider";
import addMenu from "./modules/menu";
import { headerScroll, scrollToTheSection } from "./modules/headerScroll";
import firstScreenParralaxImg from "./modules/firstScreenParralax";
import titleSlider from "./modules/firstScreenSlider";
import casesTabs from "./modules/casesTabs";
import loadCss from "./modules/loadCss";
import wow from "./modules/animated";
import { animationPlay } from "./modules/lottie";
import { validateInputEmail, formSubmit } from "./modules/form"

if(document.querySelector('main').classList.contains('index')) {
  loadCss('css/style.min.css');
}

document.addEventListener("DOMContentLoaded",  () => {
  wow.init();
  if(document.querySelector('main').classList.contains('index')) {
    firstScreenParralaxImg();
    titleSlider();
    integrationsSlider();
    platformSlider();
    toolsSlider();
    casesTabs();
    animationPlay();
    scrollToTheSection();
  }
  addMenu();
  headerScroll();
  if(document.querySelector('main').classList.contains('contacts-page')) {
    validateInputEmail();
    formSubmit();
  }
})
