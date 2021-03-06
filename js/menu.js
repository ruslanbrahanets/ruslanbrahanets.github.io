$(document).ready(function () {
    $('.menu_btn').click(function(e)
    {
        e.preventDefault();
        $('.menu_btn').css('display','none');
        $('.menu_bg').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.menu_bg').css('width','6000px');
        $('.menu_bg').css('height','6000px');
        $('.menu_bg').css('margin-right','-3000px');
        $('.menu_bg').css('margin-top','-3000px');
        $('.menu_list').css('visibility','visible');
        $('.menu_list').removeClass('fadeOut');
        $('.menu_list').addClass('fadeIn');
        $('.menu_btn_close').css('display','inline-block');
    });
    $('.menu_btn_close').click(function(e)
    {
        e.preventDefault();
        $('.menu_bg').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.menu_list').removeClass('fadeIn');
        $('.menu_list').addClass('fadeOut');
        $('.menu_list').css('visibility','hidden');
        $('.menu_bg').css('width','35px');
        $('.menu_bg').css('height','35px');
        $('.menu_bg').css('margin-right','105px');
        $('.menu_bg').css('margin-top','155px');
        $('.menu_btn_close').css('display','none');
        $('.menu_btn').css('display','inline-block');
    }); 
    $('.menu_btn_m').click(function(e)
    {
        e.preventDefault();
        $('.menu_btn_m').css('display','none');
        $('.menu_bg_m').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.menu_bg_m').css('width','4000px');
        $('.menu_bg_m').css('height','4000px');
        $('.menu_bg_m').css('margin-right','-2000px');
        $('.menu_bg_m').css('margin-top','-2000px');
        $('.menu_list_m').css('visibility','visible');
        $('.menu_list_m').removeClass('fadeOut');
        $('.menu_list_m').addClass('fadeIn');
        $('.menu_btn_close_m').css('display','inline-block');
    });
    $('.menu_btn_close_m').click(function(e)
    {
        e.preventDefault();
        $('.menu_bg_m').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.menu_list_m').removeClass('fadeIn');
        $('.menu_list_m').addClass('fadeOut');
        $('.menu_list_m').css('visibility','hidden');
        $('.menu_bg_m').css('width','35px');
        $('.menu_bg_m').css('height','35px');
        $('.menu_bg_m').css('margin-right','30px');
        $('.menu_bg_m').css('margin-top','30px');
        $('.menu_btn_close_m').css('display','none');
        $('.menu_btn_m').css('display','inline-block');
    }); 
});




