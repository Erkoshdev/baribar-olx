//promo frame
const isDesktop = window.innerWidth > 767;
const promo = document.querySelector('.promo-row');
if(isDesktop && promo) {
  const promoRightDistance = window.innerWidth - promo.getBoundingClientRect().right;
  document.querySelector('.promo-x').style.cssText = `right: -${promoRightDistance}px; width: ${promoRightDistance + 52}px`;
}

// test frame
const test = document.querySelector('.test-row');
if(isDesktop && test) {
  const testRightDistance = window.innerWidth - test.getBoundingClientRect().right;
  document.querySelector('.test-x').style.width = testRightDistance + 'px';
  document.querySelector('.test-img').style.right = testRightDistance + 'px'
}

//result frames
const result = document.querySelector('.result-container');
if(isDesktop && result) {
  const resultRightDistance = window.innerWidth - result.getBoundingClientRect().right;
  document.querySelector('.result-o').style.width = resultRightDistance + 'px';
  document.querySelector('.result-x').style.width = resultRightDistance + 'px'
}