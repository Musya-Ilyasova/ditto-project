import partnersSlider from "./modules/partners-slider";
import platformSlider from "./modules/platform-slider";
import toolsSlider from "./modules/tools-slider";
import addMenu from "./modules/menu";
import headerScroll from "./modules/headerScroll";

document.addEventListener("DOMContentLoaded",  () => {
  partnersSlider();
  platformSlider();
  toolsSlider();
  addMenu();
  headerScroll();
})
