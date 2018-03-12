$(document).ready(function () {
    var audio = new Audio(); // Создаём новый элемент Audio
    var check_music_state = false;

    setTimeout(function() {
        audio.src = 'audio/Vangelis_-_Tears_in_Rain_(1982).mp3';
        audio.autoplay = true;
    },4000);
    
    $(".equa").click(function () {
        if (check_music_state == false) {
            audio.muted = true;
            check_music_state = true;
            $(this).attr("src","img/equalizeroff.gif");
        }
        else {
            audio.muted = false;
            check_music_state = false;
            $(this).attr("src","img/equalizer.gif");
        }
    });
    
});




