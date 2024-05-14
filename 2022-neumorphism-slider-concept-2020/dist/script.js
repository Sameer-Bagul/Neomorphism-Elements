/* Please ❤ this if you like it! */
/* Follow Me https://codepen.io/designfenix */

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots:false,
    draggable: false,
    touchMove: false
  });
  $('.next').on('click',function(){
    plopColor();
  })
})

function randomColor(){
  var colors = ['#ffe9f2','#f1f1f1','#fdffff','#e3deff','#defff2','#ffe5de'];
  return colors[Math.floor(Math.random() * 6)]
}
function plopColor(){
  var $button = $('.next'),
      $arrow = $('.next svg'),
      $bg = $('.bg'),
      lastColor = null,
      newColor = randomColor(),
      tl = gsap.timeline();
  
      if(localStorage.getItem('lastColor')){
        lastColor = localStorage.getItem('lastColor');
      }else{
        lastColor = randomColor();
      };
  
      $('.slider').slick('next');
  
      tl.to($arrow, {opacity:0, duration:.2});
      tl.to($button, {scale: 100, background: lastColor, duration: .8});
      tl.to($bg, {background: lastColor, duration: 0});
      tl.to($button, {scale: 0, duration: 0});
      tl.to($button, {scale: 1, background: newColor, duration: .2});
  tl.to($arrow, {opacity:1, duration:.2});
      localStorage.setItem('lastColor', newColor);
}