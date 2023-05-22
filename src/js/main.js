import integrationsSlider from "./modules/integrationsSlider";
import platformSlider from "./modules/platformSlider";
import toolsSlider from "./modules/toolsSlider";
import addMenu from "./modules/menu";
import headerScroll from "./modules/headerScroll";
import firstScreenParralaxImg from "./modules/firstScreenParralax";
import titleSlider from "./modules/firstScreenSlider";
import casesTabs from "./modules/casesTabs";
import loadCss from "./modules/loadCss";

loadCss('css/style.min.css');

document.addEventListener("DOMContentLoaded",  () => {
  firstScreenParralaxImg();
  titleSlider();
  integrationsSlider();
  platformSlider();
  toolsSlider();
  addMenu();
  headerScroll();
  casesTabs();
})
