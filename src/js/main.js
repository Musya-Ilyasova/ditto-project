import integrationsSlider from "./modules/integrationsSlider";
import platformSlider from "./modules/platformSlider";
import toolsSlider from "./modules/toolsSlider";
import addMenu from "./modules/menu";
import headerScroll from "./modules/headerScroll";
import firstScreenParralaxImg from "./modules/firstScreenParralax";
import titleSlider from "./modules/firstScreenSlider";
import casesTabs from "./modules/casesTabs";

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
