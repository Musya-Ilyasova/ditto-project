import KeenSlider from 'keen-slider'

const integrationsSlider = () => {
  const animation = { duration: 10000, easing: (t) => t }
  let perViewAdaptive = 2.5, spacing = 10;
  if(window.innerWidth > "979")  {
    perViewAdaptive = 5.7;
    spacing = 56
  }
  new KeenSlider(
    '#my-keen-slider',
    {
      selector: '.integrations-slider__item',
      mode: "free",
      loop: true,
      slides: {
        origin: "center",
        perView: perViewAdaptive,
        spacing: spacing
      },
      renderMode: "performance",
      drag: true,
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    }
  )
}

export default integrationsSlider;
