function showImg(){
    $('.code-img').css('display','block');
    $('.code-img').animate({ "left": "-=220px" }, "1000" );
    setTimeout(function (){
        $('.design-img').css('display','block');
        $('.design-img').animate({ "left": "+=220px" }, "1000" );
      }, 500);
}



$(document).ready ( function () {

   $('.design-img1 img').animate({left: '50px'}, 1000);
    $('.design-img2 img').animate({right: '50px'}, 1000);
    $('.design-img3 img').animate({left: '50px'}, 1000);
    $('.design-img4 img').animate({right: '50px'}, 1000);
});
