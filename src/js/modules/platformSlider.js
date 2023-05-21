import KeenSlider from 'keen-slider';

const selectorSlider = '.platform-list',
      selectorSlide = '.platform-list__item',
      slider = document.querySelector(selectorSlider),
      slides = document.querySelectorAll(selectorSlide),
      arrowBtns = document.querySelector('.platform-list__btns'),
      arrowLeft = document.querySelector('.platform-list__btn_left'),
      arrowRight = document.querySelector('.platform-list__btn_right'),
      closeBtn = document.querySelector('.platform-list__close'),
      btnsMore = document.querySelectorAll('.platform__btn');

const updateClasses = (activeSlide, lastSlide) => {
  activeSlide === 0
    ? arrowLeft.classList.add("disabled")
    : arrowLeft.classList.remove("disabled")
  activeSlide === lastSlide
    ? arrowRight.classList.add("disabled")
    : arrowRight.classList.remove("disabled")
}

const addIndexes = (zIndexes, slidesIndex) => {
  let countIndex = 0;
  slides.forEach(item => item.classList.remove('active'));
  let lastSlide = slidesIndex.length-1,
      activeSlide = slidesIndex[countIndex];
  slides[activeSlide].classList.add('active');
  arrowBtns.setAttribute('data-order', activeSlide+1);
  closeBtn.setAttribute('data-order', activeSlide+1);

  for(let i=zIndexes.length-1; i >=0; i--) {
    slides[slidesIndex[countIndex]].setAttribute('data-order', zIndexes[i]);
    updateClasses(activeSlide, lastSlide);
    countIndex++
  }
}

const inintIndexes = (idx, zIndexes, slidesIndex) => {
  for(let s = 0; s<=slides.length - 1; s++ ) {
    zIndexes.push(s + 1);
    slidesIndex.push(idx);
    idx === slides.length - 1 ? idx = 0 : idx++;
  }
}

const nextSlide = (zIndexes, slidesIndex) => {
  slidesIndex.push(slidesIndex.shift());
  addIndexes(zIndexes, slidesIndex);
};

const prevSlide = (zIndexes, slidesIndex) => {
  slidesIndex.unshift(slidesIndex.pop());
  addIndexes(zIndexes, slidesIndex);
};

const platformSliderMobile = () => {
  const sliderOptions = {
    selector: selectorSlide,
    loop: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 24,
    },
  }
  var mySlider = new KeenSlider( selectorSlider, sliderOptions );

  arrowLeft.addEventListener('click', () => mySlider.prev());
  arrowRight.addEventListener('click', () => mySlider.next());

  mySlider.on("slideChanged", () => {
    let activeSlide = mySlider.track.details.rel,
        lastSlide = mySlider.track.details.slides.length - 1;
    updateClasses(activeSlide, lastSlide);
  })
}

const platformSliderDesktop = () => {
  slider.classList.remove('keen-slider');
  slides.forEach((item) => item.classList.remove('keen-slider__slide'));

  let zIndexes, slidesIndex;

  btnsMore.forEach((btn, i) => {
    btn.setAttribute('data-slide', i );
    btn.addEventListener('click', () => {
      zIndexes = [], slidesIndex = [];
      document.querySelector(selectorSlider).parentNode.classList.add('show');
      inintIndexes(i, zIndexes, slidesIndex);
      addIndexes( zIndexes, slidesIndex);
    })
  });

  closeBtn.addEventListener('click', () => {
    document.querySelector(selectorSlider).parentNode.classList.remove('show');
  })

  arrowLeft.addEventListener('click', () => prevSlide(zIndexes, slidesIndex));
  arrowRight.addEventListener('click', () => nextSlide(zIndexes, slidesIndex));
}

const platformSlider = () => {
  if(window.innerWidth < "768") {
    platformSliderMobile();
  } else {
    platformSliderDesktop();
  }
}

export default platformSlider;
