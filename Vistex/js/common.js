$(document).ready(function () {
    $(window).on('load', function () {
      var $preloader = $('#page'),
            $svg_anm   = $('#loader');
        $svg_anm.delay(1000).fadeOut('slow');
        $preloader.delay(1000).fadeOut('slow');
    });
});
