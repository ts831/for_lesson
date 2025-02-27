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
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
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
      centerMode:true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
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

    const hover_2 = document.getElementById('nav-link2')

    const pc_menu2 = document.getElementById('pc_hamburger_menu')

    hover_2.addEventListener('mouseover',()=>{
      pc_menu2.style.opacity=1;
    });

    pc_menu2.addEventListener('mouseleave',()=>{
      pc_menu2.style.opacity=0;
    });


  });