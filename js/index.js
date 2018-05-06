function showImg(){
    console.log("run");
    
    $('.code-img').css('display','block');
    $('.code-img').animate({ "left": "-=220px" }, "1000" );
    setTimeout(function (){
        $('.design-img').css('display','block');
        $('.design-img').animate({ "left": "+=220px" }, "1000" );
      }, 500);
  
}