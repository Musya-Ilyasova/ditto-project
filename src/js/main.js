import integrationsSlider from "./modules/integrationsSlider";
import platformSlider from "./modules/platformSlider";
import toolsSlider from "./modules/toolsSlider";
import addMenu from "./modules/menu";
import headerScroll from "./modules/headerScroll";
import firstScreenParralaxImg from "./modules/firstScreenParralax";
import titleSlider from "./modules/firstScreenSlider";
import casesTabs from "./modules/casesTabs";
import loadCss from "./modules/loadCss";
import wow from "./modules/animated";

loadCss('css/style.min.css');

document.addEventListener("DOMContentLoaded",  () => {
  wow.init();
  firstScreenParralaxImg();
  titleSlider();
  integrationsSlider();
  platformSlider();
  toolsSlider();
  addMenu();
  headerScroll();
  casesTabs();
})
