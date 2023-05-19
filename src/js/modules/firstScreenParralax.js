const firstScreenParralaxImg = () => {
  let img = document.querySelector('.first-sc__img_desktop'),
  imgX = img.offsetLeft+(img.offsetWidth/2),
  imgY = img.offsetTop+(img.offsetHeight/2);

  let img1 = img.querySelector('img:first-child'),
      img2 = img.querySelector('img:nth-child(2)'),
      img3 = img.querySelector('img:nth-child(3)'),
      img4 = img.querySelector('img:nth-child(4)'),
      img5 = img.querySelector('img:nth-child(5)'),
      img6 = img.querySelector('img:nth-child(6)');
  window.addEventListener('mousemove', function(e) {
    let x = (e.clientX - imgX) / 100;
    let y = (e.clientY - imgY) / 100;
    img3.style.transform = `translate3d(${x * 1}px, ${y * 2}px, 0 )`;
    img4.style.transform = `translate3d(${x * 2}px, ${y * 2}px, 0 )`;
    img1.style.transform = `translate3d(${x * 4}px, ${y * 4}px, 0 )`;
    img2.style.transform = `translate3d(${x * 2}px, ${y * 2}px, 0 )`;
    img5.style.transform = `translate3d(${x * 3}px, ${y * 3}px, 0 )`;
    img6.style.transform = `translate3d(${x * 3}px, ${y * 4}px, 0 )`;
    // document.querySelector('.subscription-first-image-desktop__back').style.transform = `translate3d(${x * 2}px, ${y * 2}px, 0 )`;
    // document.querySelector('.subscription-first-image-desktop__front').style.transform = `translate3d(${x * 1}px, ${y * 1}px, 0 )`;
  })
}


export default firstScreenParralaxImg;
