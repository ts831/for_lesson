$(document).ready(function(){
    $('.main-img').slick();

    $('.carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed:3500,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase:'linear',
      arrows:false,
      dots:false,
      pauseOnHover:false,
      infinete:true,
      centerMode:true,
    });

    $('.carousel2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed:3500,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase:'linear',
      arrows:false,
      dots:false,
      infinete:true,
      pauseOnHover:false,
      rtl:true,
      centerMode:true
    });


    // iphone ipag用のハンバーガーメニュー
    const humburger_btn = document.getElementById('menu_iphone');

    const ipad_menu = document.getElementById('ipad_hamburger_menu')

    humburger_btn.addEventListener('click',()=>{
      

      ipad_menu.style.display ='block';
    });

    const close_btn = document.getElementById('close_btn');

    close_btn.addEventListener('click',()=>{
      ipad_menu.style.display = 'none';
    });



  });