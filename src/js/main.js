import integrationsSlider from "./modules/integrations-slider";
import platformSlider from "./modules/platform-slider";
import toolsSlider from "./modules/tools-slider";
import addMenu from "./modules/menu";
import headerScroll from "./modules/headerScroll";
import firstScreenParralaxImg from "./modules/firstScreenParralax";
import titleSlider from "./modules/firstScreenSlider";

document.addEventListener("DOMContentLoaded",  () => {
  firstScreenParralaxImg();
  titleSlider();
  integrationsSlider();
  platformSlider();
  toolsSlider();
  addMenu();
  headerScroll();
})
