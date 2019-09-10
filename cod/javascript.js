$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
    $('.here').slick({
            infinite: true,
            dots:true,
            slidesToShow: 1,
            centerMode: true, //要素を中央寄せ
            centerPadding:'100px', //両サイドの見えている部分のサイズ
            autoplay:true, //自動再生
            responsive: [{
                 breakpoint: 480,
                      settings: {
                           centerMode: false,
                 }
            }]
       });
    //スクロールポイント　waypointの利用
    $('.animated-element').waypoint(function(direction){ //実行する場所を渡す
        var activpoint = $(this.element)
        if (direction == 'down'){
          activpoint.addClass('fadeIn');
        }else{
          activpoint.removeClass('fadeIn');
        }
      },{offset: '80%'}
    );
});
