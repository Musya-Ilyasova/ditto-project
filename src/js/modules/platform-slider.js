import KeenSlider from 'keen-slider'

const platformSlider = () => {
  const selectorSlider = '.platform-list';
  const selectorSlide = '.platform-list__item'
  if(window.innerWidth<"768") {
    new KeenSlider(
      selectorSlider,
      {
        selector: selectorSlide,
        loop: false,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 24,
        },
      }
    )
  } else {
    document.querySelector(selectorSlider).classList.remove('keen-slider');
    document.querySelectorAll(selectorSlide).forEach((item) => item.classList.remove('keen-slider__slide'));
  }
}
export default platformSlider;
