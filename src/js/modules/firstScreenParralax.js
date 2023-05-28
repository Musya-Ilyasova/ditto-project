const firstScreenParralaxImg = () => {
  let img = document.querySelector('.first-sc__img_desktop'),
  imgX = img.offsetLeft+(img.offsetWidth/2),
  imgY = img.offsetTop+(img.offsetHeight/2);

  let img1 = img.querySelector('picture:first-child'),
      img2 = img.querySelector('picture:nth-child(2)');
  window.addEventListener('mousemove', function(e) {
    let x = (e.clientX - imgX) / 100;
    let y = (e.clientY - imgY) / 100;
    img1.style.transform = `translate3d(${x * 4}px, ${y * 4}px, 0 )`;
    img2.style.transform = `translate3d(${x * 2}px, ${y * 2}px, 0 )`;
  })
}


export default firstScreenParralaxImg;
