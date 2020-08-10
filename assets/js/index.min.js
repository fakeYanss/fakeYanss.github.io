$(document).ready(function(){
  var $shutter = $('#cameraShutter');

  function printPhoto() {
    $('.info-content').toggleClass('animate');
    $('.camera .glass').toggleClass('active');
    
    var photoImg = document.getElementsByClassName("info-photo");
    var timer = setTimeOut(function(){
      photoImg.src = "{{site.default_photo}}";
    }, 2000);
    oImg.onload = function () {
      clearTimeOut(timer);
      timer = null;
    }
  }
  
  $shutter.on('click', printPhoto);

  setTimeout(printPhoto, 500);

  console.log('© zchen9 🙋 2015-' + (new Date()).getFullYear());
  console.log('特别鸣谢zchen9小仙女的精彩主题，希望大家去逛逛她的github：https://github.com/zchen9');
  
});
