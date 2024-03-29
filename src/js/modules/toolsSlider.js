import KeenSlider from 'keen-slider'

const toolsSlider = () => {
  function ThumbnailPlugin(main) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active")
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            main.moveToIdx(idx)
          })
        })
      }

      slider.on("created", () => {
        addActive(slider.track.details.rel);
        addClickEvents();
        if(main.size>=713 && main.size<1110) {
          document.querySelector('.tools-slider-gallary__wrapper').style.width = '300px';
          main.update();
        } else if(main.size===1110) {
          document.querySelector('.tools-slider-gallary__wrapper').style.width = '523px';
          main.update();
        }
        main.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  };

  var slider = new KeenSlider(
    ".tools-slider-gallary",
    {
      slides: {
        spacing: 16
      }
    }
  );

  var thumbnails = new KeenSlider(
    ".tools-slider-thumbnail",
    {
      initial: 0,
      rtl: false,
      vertical: true,
      mode: "snap",
      slides: {
        perView: "auto"
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: {
            perView: 4
          }
        },
        '(min-width: 1280px)': {
          slides: {
            perView: "auto"
          }
        },
      },
    },
    [ThumbnailPlugin(slider)]
  )
}

export default toolsSlider;

