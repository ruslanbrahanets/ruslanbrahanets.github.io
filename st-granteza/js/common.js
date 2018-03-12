$(document).ready(function () {
    //Цели для Яндекс.Метрики и Google Analytics
    var check_click = false;
    var windowsize = $(window).width();
    var counter = 0;
    var c = 0;
    $(".count_element").on("click", (function () {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    function heightDetect() {
        $(".head").css("height", $(window).height());
	};
	heightDetect();
        $(window).resize(function() {
		heightDetect();
	});
 
    $('.source').click(function(e)
    {
        e.preventDefault();
        $('.source').each(function( index ) {
            $( this ).removeClass("vid-list-item");
        });
        $(this).addClass("vid-list-item");
    });
    
    
    
    $(window).on('load', function () {
      var $preloader = $('#page'),
            $svg_anm   = $('#loader');
        $svg_anm.delay(5000).fadeOut('slow');
        $preloader.delay(5000).fadeOut('slow');
  });
    
    function checkWidth() {
        windowsize = $(window).width();
    }
    // Execute on load
    // Bind event listener
    $(window).resize(checkWidth);

    
});




