$(document).ready(function () {
    //Цели для Яндекс.Метрики и Google Analytics
    var check_click = false;
    var windowsize = $(window).width();
    var counter = 0;
    var c = 0;
    var map;
    $(".count_element").on("click", (function () {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
		}));
		var $preloader = $('#page'),
		$svg_anm   = $('#loader');
		$svg_anm.delay(1000).fadeOut('slow');
		$preloader.delay(1000).fadeOut('slow');
    
    function heightDetect() {
        $(".wdt").css("height", $(window).height());
	}
	heightDetect();
        $(window).resize(function() {
		heightDetect();
	});    
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
		
    function oneclosemenu() {
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
    }
    function oneclosemenumini() {
        $('.menu_bgm').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.menu_listm').removeClass('fadeIn');
        $('.menu_listm').addClass('fadeOut');
        $('.menu_listm').css('visibility','hidden');
        $('.menu_bgm').css('width','35px');
        $('.menu_bgm').css('height','35px');
        $('.menu_bgm').css('margin-right','30px');
        $('.menu_bgm').css('margin-top','30px');
        $('.menu_btn_closem').css('display','none');
        $('.menu_btnm').css('display','inline-block');
    }
    $('#homebtn').click(function(e)
    {
        $("[href$='#1']").click();
        oneclosemenu();
    });
    $('#aboutbtn').click(function(e)
    {
        $("[href$='#2']").click();
        oneclosemenu();
    });
    $('#skillsbtn').click(function(e)
    {
        $("[href$='#3']").click();
        oneclosemenu();
    });
    $('#portfoliobtn').click(function(e)
    {
        $("[href$='#4']").click();
        oneclosemenu();
    });
    $('.servicesbtn').click(function(e)
    {
        $("[href$='#5']").click();
        oneclosemenu();
		});
		$('.contactsbtn').click(function(e)
    {
        $("[href$='#5']").click();
        oneclosemenu();
    });
    $('.cases-open').click(function(e)
    {
        e.preventDefault();
        $('.cases-bg').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.cases-bg').css('opacity','1');
        $('.cases-bg').css('width','100%');
        $('.cases-bg').css('height','100%');
        $('.cases-bg').css('left','0');
        $('.cases-bg').css('bottom','0');
        $('.cases-bg').css('border-radius','0');
        $('.cases-bg').css('margin-top','-30px');
        $('.cases-bg').css('z-index','2500');
        $('.cases-list').fadeIn(2000);
        $('.cases-list').css('display','inline-block');
        $('.cases-list').css('z-index','3000');
        $('.BRG-page-portfolio-elements').css('opacity','0');
        $('.BRG-page-portfolio-btn').css('opacity','0');
    });
    $('.cases-close').click(function(e)
    {
        e.preventDefault();
        $('.cases-bg').css('transition','all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19)');
        $('.cases-list').css('display','none');
        $('.BRG-page-portfolio-elements').css('opacity','1');
        $('.BRG-page-portfolio-btn').css('opacity','1');
        $('.cases-bg').css('width','5px');
        $('.cases-bg').css('height','5px');
        $('.cases-bg').css('border-radius','100%');
        $('.cases-bg').css('margin-top','0');
        $('.cases-bg').css('left','calc((100% - 5px)/2)');
        $('.cases-bg').css('bottom','25px');
        $('.cases-bg').css('z-index','auto');
        $('.cases-bg').css('opacity','0');
    });
    initMap();
    $('.BRG-page-location').click(function(e)
    {
        e.preventDefault();
        $('.BRG-page-location').css('display','none');
        $('.BRG-page-locationcls').css('display','block');
        $('.BRG-page-contacts-text').css('transition','all 500ms linear');
        $('.BRG-page-contacts-text').css('opacity','0');
        $('.BRG-page-contacts-info').css('transition','all 500ms linear');
        $('.BRG-page-contacts-info').css('opacity','0');
        $('.BRG-page-map').css('transition','all 1000ms ease-in-out');
        $('.BRG-page-map').css('opacity','1');
        $('.BRG-page-map').css('z-index','1');
        $('.BRG-page-inf').fadeIn(1500);
    });
    $('.BRG-page-locationcls').click(function(e)
    {
        e.preventDefault();
        $('.BRG-page-inf').css('display','none');
        $('.BRG-page-locationcls').css('display','none');
        $('.BRG-page-location').css('display','block');
        $('.BRG-page-map').css('transition','all 500ms linear');
        $('.BRG-page-map').css('opacity','0');
        $('.BRG-page-map').css('z-index','-1000');
        $('.BRG-page-contacts-text').css('transition','all 1000ms ease-in-out');
        $('.BRG-page-contacts-text').css('opacity','1');
        $('.BRG-page-contacts-info').css('transition','all 1000ms ease-in-out');
        $('.BRG-page-contacts-info').css('opacity','1');
    }); 
    function initMap() {
    // Styles a map in night mode.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 47.910483,
            lng: 33.391783
        },
        zoom: 6,
        styles: [
            {
                "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#1d2c4d"
                      }
                  ]
              },
               {
                "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#babebf"
                      }
                  ]
              },
               {
                "elementType": "labels.text.stroke",
                 "stylers": [
                    {
                        "color": "#1a3646"
                      }
                  ]
              },
               {
                "featureType": "administrative.country",
                 "elementType": "geometry.stroke",
                 "stylers": [
                    {
                        "color": "#fc3fa7"
                      }
                  ]
              },
               {
                "featureType": "administrative.land_parcel",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#64779e"
                      }
                  ]
              },
               {
                "featureType": "administrative.province",
                 "elementType": "geometry.stroke",
                 "stylers": [
                    {
                        "color": "#ffe2f2"
                      }
                  ]
              },
               {
                "featureType": "landscape.man_made",
                 "elementType": "geometry.stroke",
                 "stylers": [
                    {
                        "color": "#334e87"
                      }
                  ]
              },
               {
                "featureType": "landscape.natural",
                 "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#103258"
                      }
                  ]
              },
               {
                "featureType": "poi",
                 "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#283d6a"
                      }
                  ]
              },
               {
                "featureType": "poi",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#6f9ba5"
                      }
                  ]
              },
               {
                "featureType": "poi",
                 "elementType": "labels.text.stroke",
                 "stylers": [
                    {
                        "color": "#1d2c4d"
                      }
                  ]
              },
               {
                "featureType": "poi.park",
                 "elementType": "geometry.fill",
                 "stylers": [
                    {
                        "color": "#023e58"
                      }
                  ]
              },
               {
                "featureType": "poi.park",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#3C7680"
                      }
                  ]
              },
               {
                "featureType": "road",
                 "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#304a7d"
                      }
                  ]
              },
               {
                "featureType": "road",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#98a5be"
                      }
                  ]
              },
               {
                "featureType": "road",
                 "elementType": "labels.text.stroke",
                 "stylers": [
                    {
                        "color": "#1d2c4d"
                      }
                  ]
              },
               {
                "featureType": "road.arterial",
                 "elementType": "geometry.fill",
                 "stylers": [
                    {
                        "color": "#fcac5f"
                      }
                  ]
              },
               {
                "featureType": "road.highway",
                 "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#2c6675"
                      }
                  ]
              },
               {
                "featureType": "road.highway",
                 "elementType": "geometry.stroke",
                 "stylers": [
                    {
                        "color": "#e900e6"
                      }
                  ]
              },
               {
                "featureType": "road.highway",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#ffffff"
                      }
                  ]
              },
               {
                "featureType": "road.highway",
                 "elementType": "labels.text.stroke",
                 "stylers": [
                    {
                        "color": "#023e58"
                      }
                  ]
              },
               {
                "featureType": "transit",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#98a5be"
                      }
                  ]
              },
               {
                "featureType": "transit",
                 "elementType": "labels.text.stroke",
                 "stylers": [
                    {
                        "color": "#1d2c4d"
                      }
                  ]
              },
               {
                "featureType": "transit.line",
                 "elementType": "geometry.fill",
                 "stylers": [
                    {
                        "color": "#e6574c"
                      }
                  ]
              },
               {
                "featureType": "transit.station",
                 "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#3a4762"
                      }
                  ]
              },
               {
                "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [
                    {
                        "color": "#0e1626"
                      }
                  ]
              },
               {
                "featureType": "water",
                 "elementType": "labels.text.fill",
                 "stylers": [
                    {
                        "color": "#4e6d70"
                      }
                  ]
              }
          ]
    });
    var myLatLng = {lat: 47.910483, lng: 33.391783};
    var image = 'img/marker.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
    google.maps.event.addListener(map, "idle", function()
    {
        google.maps.event.trigger(map, 'resize');
    });
}
});
function asArr(arrayLike) {
	return [].slice.call(arrayLike, 0)
}
function setActiveArticle(articlesNodes, activeArticleNode, direction) {
	articlesNodes.forEach(function(articleNode) {
			if (articleNode === activeArticleNode) {
					if(direction=="left")
					{
							articleNode.classList.add('fadeIn');
							articleNode.classList.add('current');
					}
					if(direction=="right")
					{
							articleNode.classList.add('fadeIn');
							articleNode.classList.add('current');
					}
			} else {
					articleNode.classList.remove('current');
					articleNode.classList.remove('fadeIn');
			}
	})
}
function getNextArticle(articlesNodes, articleNode) {
	var articleIndex = articlesNodes.indexOf(articleNode)
	var totalArticlesIndexes = articlesNodes.length - 1
	if (articleIndex === totalArticlesIndexes) {
			return articlesNodes[0]
	} else {
			return articlesNodes[articleIndex + 1] 
	}
}
function getPrevArticle(articlesNodes, articleNode) {
	var articleIndex = articlesNodes.indexOf(articleNode)
	var totalArticlesIndexes = articlesNodes.length - 1
	if (articleIndex === 0) {
			return articlesNodes[totalArticlesIndexes]
	} else {
			return articlesNodes[articleIndex - 1] 
	}
}
var ACTIVE_ARTICLE_DEFAULT_INDEX = 0
function main() {
	var articlesNodes = asArr(document.querySelectorAll('.BRG-page-portfolio-elements-hid .place'))
	var nextNode = document.querySelector('#next')
	var prevNode = document.querySelector('#prev')
	console.log('got', articlesNodes)
	var currentlyActiveArticle = articlesNodes[ACTIVE_ARTICLE_DEFAULT_INDEX]
	setActiveArticle(articlesNodes, currentlyActiveArticle)
	nextNode.addEventListener('click', function (event) {
			event.preventDefault();
			var nextArticle = getNextArticle(articlesNodes, currentlyActiveArticle)
	setActiveArticle(articlesNodes, nextArticle, "left")
	currentlyActiveArticle = nextArticle
	})
	prevNode.addEventListener('click', function (event) {
			event.preventDefault();
			var prevArticle = getPrevArticle(articlesNodes, currentlyActiveArticle)
	setActiveArticle(articlesNodes, prevArticle, "right")
	currentlyActiveArticle = prevArticle
	})
}
main()