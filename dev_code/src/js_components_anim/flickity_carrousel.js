// const Flickity = require('flickity')
// const carousel = document.querySelector('.projects_imgs_carroucel');
const carousels = document.querySelectorAll('.projects_imgs_carroucel');
// console.log(carousels)

carousels.forEach(carousel => {
  console.log(carousel)
  const flkty = new Flickity(carousel, {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    // wrapAround:true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  });

  const imgs = carousel.querySelectorAll('.carousel-cell img');
  console.log(imgs)
  // get transform property
  const docStyle = document.documentElement.style;
  const transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      const img = imgs[i];
      const x = (slide.target + flkty.x) * -1 / 3;
      img.style[transformProp] = 'translateX(' + x + 'px)';
    });
  });

})
