(function () {
  let $body = document.querySelector("body");
  $body.classList.remove("no-js");
  $body.classList.add("js");

  let menu = new Menu({
    container: ".header__nav",
    toggleBtn: ".header__btnMenu",
    widthEnable: 940,
  });

  let carouselImgs = new Carousel({
    container: ".laptop-slider .slideshow",
    itens: "figure",
    btnPrev: ".prev",
    btnNext: ".next",
  });
})();
