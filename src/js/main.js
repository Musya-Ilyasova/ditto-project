import integrationsSlider from "./modules/integrations-slider";
import platformSlider from "./modules/platform-slider";
import toolsSlider from "./modules/tools-slider";
import addMenu from "./modules/menu";
import headerScroll from "./modules/headerScroll";

document.addEventListener("DOMContentLoaded",  () => {
  integrationsSlider();
  platformSlider();
  toolsSlider();
  addMenu();
  headerScroll();
})
