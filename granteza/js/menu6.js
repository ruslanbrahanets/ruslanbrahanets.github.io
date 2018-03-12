$(window).on("load", function () {
    var perfData = window.performance.timing
        , EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)
        , time = parseInt((EstimatedTime / 1000) % 60) * 100;
    var PercentageID = $('.percentage')
        , start = 0
        , end = 100
        , durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {
        var range = end - start
            , current = start
            , increment = end > start ? 1 : -1
            , stepTime = Math.abs(Math.floor(duration / range))
            , obj = $(id);
        var timer = setInterval(function () {
            current += increment;
            $(obj).text(current + "%");
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
});

$(document).ready(function () {
    var u = new Url;
    if ((u.path == '/live') || (u.path == '/live/')) {
        $('.hamburger, .menu, body').addClass('open');
        setTimeout(function () {
            $('.cloud-scene').addClass('no-animation');
        }, 500);
        urlLiveAjax();
    }
    else if (u.path.indexOf('article') >= 0) {
        $('.hamburger, .menu, body').addClass('open');
        setTimeout(function () {
            $('.cloud-scene').addClass('no-animation');
        }, 500);
        article_id = u.path.toString().replace(/^\D+/g, '');
        $('.article-page-header').removeClass('active').each(function () {
            if ($(this).data('article') == article_id) {
                $(this).addClass('active');
            }
        });
        urlArticleAjax();
    }
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    (function () {
        var beginAC = 30
            , endAC = 370
            , beginB = 30
            , endB = 370;

        function inAC(s) {
            s.draw('80% - 140', '80%', 0.3, {
                delay: 0.1
                , callback: function () {
                    inAC2(s)
                }
            });
        }

        function inAC2(s) {
            s.draw('100% - 595', '100% - 265', 0.6, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function inB(s) {
            s.draw(beginB - 160, endB + 360, 0.1, {
                callback: function () {
                    inB2(s)
                }
            });
        }

        function inB2(s) {
            s.draw(beginB + 160, endB - 160, 0.3, {
                easing: ease.ease('bounce-out', 1, 0.3)
            });
        }

        function outAC(s) {
            s.draw('90% - 240', '90%', 0.1, {
                easing: ease.ease('elastic-in', 1, 0.3)
                , callback: function () {
                    outAC2(s)
                }
            });
        }

        function outAC2(s) {
            s.draw('20% - 240', '20%', 0.3, {
                callback: function () {
                    outAC3(s)
                }
            });
        }

        function outAC3(s) {
            s.draw(beginAC, endAC, 0.7, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function outB(s) {
            s.draw(beginB, endB, 0.7, {
                delay: 0.1
                , easing: ease.ease('elastic-out', 2, 0.4)
            });
        }
        var pathA = document.getElementById('pathA')
            , pathB = document.getElementById('pathB')
            , pathC = document.getElementById('pathC')
            , segmentA = new Segment(pathA, beginAC, endAC)
            , segmentB = new Segment(pathB, beginB, endB)
            , segmentC = new Segment(pathC, beginAC, endAC)
            , trigger = document.getElementById('hamburger')
            , wrapper = document.getElementById('menu-icon-wrapper');
        wrapper.style.visibility = 'visible';
        $('.hamburger').mouseenter(function () {
            if ($(this).hasClass('open')) {
                outAC(segmentC);
                inAC(segmentC);
                outAC(segmentA);
                inAC(segmentA);
                $('.prev-name').addClass('on');
            }
            else {
                inB(segmentB);
                $('.hamburger').addClass('on');
            }
        }).mouseleave(function () {
            if ($(this).hasClass('open')) {
                $('.prev-name').removeClass('on');
            }
            else {
                outB(segmentB);
                $('.hamburger').removeClass('on');
            }
        });
        trigger.onclick = function () {
            if ($('.hamburger').hasClass('open')) {
                if ($('body').hasClass('portfolio-main')) {
                    outAC(segmentA);
                    outB(segmentB);
                    outAC(segmentC);
                    $('.hamburger, body').removeClass('open');
                    $('.wow-portfolio-ajax-block').addClass('hidden');
                    setTimeout(function () {
                        $('.wow-portfolio-ajax-block').animate({
                            scrollTop: 0
                        }, 1)
                    }, 400);
                    setTimeout(function () {
                        $('.wow-portfolio-ajax-block').removeClass('hidden').removeClass('done').removeClass('load');
                        $('.wow-portfolio-ajax').empty();
                        $('body').removeClass('portfolio-main');
                        $('body').removeClass('hambAnimation');
                    }, 450);
                    document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                    var u = new Url('/');
                    history.pushState(null, null, u);
                }
                else {
                    outAC(segmentA);
                    outB(segmentB);
                    outAC(segmentC);
                    $('.hamburger, .menu, body').removeClass('open');
                    $('.cloud-scene').removeClass('no-animation');
                }
            }
            else {
                inAC(segmentA);
                inB(segmentB);
                inAC(segmentC);
                $('.hamburger, .menu, body').addClass('open');
                setTimeout(function () {
                    $('.cloud-scene').addClass('no-animation');
                }, 500);
            }
            $('.hamburger').on('mousedown', function () {
                $('.prev-name').css('transform', 'scale(0.95)');
                setTimeout(function () {
                    $('.prev-name').css('transform', '');
                }, 300);
            });
        };
        if ($('body').hasClass('hambAnimation')) {
            inAC(segmentA);
            inB(segmentB);
            inAC(segmentC);
        }
        $('.wow-portfolio-item-block img, .wow-portfolio-item-block div').on('click', function () {
            inAC(segmentA);
            inB(segmentB);
            inAC(segmentC);
            $('.hamburger, body').addClass('open');
            $('body').addClass('portfolio-main');
            setTimeout(function () {
                $('.cloud-scene').addClass('no-animation');
            }, 500);
        });
        $('.live, .article, .works, .about, .contacts').on('click', function (e) {
            outAC(segmentC);
            outAC(segmentA);
            e.preventDefault();
        });
        $('.hamburger-arrow').mouseenter(function () {
            $(this).addClass('on')
        }).mouseleave(function () {
            $(this).removeClass('on')
        }).on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            inAC(segmentA);
            inB(segmentB);
            inAC(segmentC);
            $('body').removeClass('page-open main-page-open page-live page-article page-works page-about page-contacts');
            $('.live-page, .article-page, .works-page, .about-page, .contacts-page').removeClass('open');
            document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            var u = new Url('/');
            history.pushState(null, null, u);
        });
    })();

    function hamburgerClick() {
        var beginAC = 30
            , endAC = 370
            , beginB = 30
            , endB = 370;

        function inAC(s) {
            s.draw('80% - 140', '80%', 0.3, {
                delay: 0.1
                , callback: function () {
                    inAC2(s)
                }
            });
        }

        function inAC2(s) {
            s.draw('100% - 595', '100% - 265', 0.6, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function inB(s) {
            s.draw(beginB - 160, endB + 360, 0.1, {
                callback: function () {
                    inB2(s)
                }
            });
        }

        function inB2(s) {
            s.draw(beginB + 160, endB - 160, 0.3, {
                easing: ease.ease('bounce-out', 1, 0.3)
            });
        }

        function outAC(s) {
            s.draw('90% - 240', '90%', 0.1, {
                easing: ease.ease('elastic-in', 1, 0.3)
                , callback: function () {
                    outAC2(s)
                }
            });
        }

        function outAC2(s) {
            s.draw('20% - 240', '20%', 0.3, {
                callback: function () {
                    outAC3(s)
                }
            });
        }

        function outAC3(s) {
            s.draw(beginAC, endAC, 0.7, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function outB(s) {
            s.draw(beginB, endB, 0.7, {
                delay: 0.1
                , easing: ease.ease('elastic-out', 2, 0.4)
            });
        }
        var pathA = document.getElementById('pathA-work')
            , pathB = document.getElementById('pathB-work')
            , pathC = document.getElementById('pathC-work')
            , segmentA = new Segment(pathA, beginAC, endAC)
            , segmentB = new Segment(pathB, beginB, endB)
            , segmentC = new Segment(pathC, beginAC, endAC)
            , trigger = document.getElementById('hamburger-work')
            , wrapper = document.getElementById('menu-icon-wrapper-work');
        wrapper.style.visibility = 'visible';
        setTimeout(function () {
            inAC(segmentA);
            inB(segmentB);
            inAC(segmentC);
        }, 200);
        $('.hamburger').mouseenter(function () {
            outAC(segmentC);
            inAC(segmentC);
            outAC(segmentA);
            inAC(segmentA);
        }).mouseleave(function () {
            outB(segmentB);
        });
        $('#hamburger-work').on('click', function () {
            var marginTop = $('.works-list-item.active').position().top + 234;
            if ($('html').hasClass('touch')) {
                $('.works-item').animate({
                    scrollTop: 0
                }, 350);
                outAC(segmentA);
                outB(segmentB);
                outAC(segmentC);
                $('html').removeClass('overflow');
                setTimeout(function () {
                    $('body').scrollTop(marginTop);
                    $('.works-item').empty().remove();
                    $('.works-list-item').removeClass('active');
                    $('body').addClass('main-page-open').removeClass('one-works-item');
                    father.find('.works-list-item-cover').css('top', topFather);
                    setTimeout(function () {
                        father.find('.works-list-item-cover').css('transition', '');
                    }, 1);
                    document.title = "Р Р°Р±РѕС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                    var u = new Url('/works');
                    history.pushState(null, null, u);
                    return false;
                }, 1);
            }
            else {
                $('.works-item').animate({
                    scrollTop: 0
                }, 350);
                outAC(segmentA);
                outB(segmentB);
                outAC(segmentC);
                $('html').removeClass('overflow');
                setTimeout(function () {
                    $('.works-item').empty().remove();
                    $('.works-list-item').removeClass('active');
                    $('body').addClass('main-page-open').removeClass('one-works-item');
                    father.find('.works-list-item-cover').css('top', topFather).css('transition', 'all .3s');
                    setTimeout(function () {
                        father.find('.works-list-item-cover').css('transition', '');
                    }, 350);
                    document.title = "Р Р°Р±РѕС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                    var u = new Url('/works');
                    history.pushState(null, null, u);
                    return false;
                }, 450);
            }
        });
    }

    function feedbackClick() {
        var beginAC = 30
            , endAC = 370
            , beginB = 30
            , endB = 370;

        function inAC(s) {
            s.draw('80% - 140', '80%', 0.3, {
                delay: 0.1
                , callback: function () {
                    inAC2(s)
                }
            });
        }

        function inAC2(s) {
            s.draw('100% - 595', '100% - 265', 0.6, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function inB(s) {
            s.draw(beginB - 160, endB + 360, 0.1, {
                callback: function () {
                    inB2(s)
                }
            });
        }

        function inB2(s) {
            s.draw(beginB + 160, endB - 160, 0.3, {
                easing: ease.ease('bounce-out', 1, 0.3)
            });
        }

        function outAC(s) {
            s.draw('90% - 240', '90%', 0.1, {
                easing: ease.ease('elastic-in', 1, 0.3)
                , callback: function () {
                    outAC2(s)
                }
            });
        }

        function outAC2(s) {
            s.draw('20% - 240', '20%', 0.3, {
                callback: function () {
                    outAC3(s)
                }
            });
        }

        function outAC3(s) {
            s.draw(beginAC, endAC, 0.7, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function outB(s) {
            s.draw(beginB, endB, 0.7, {
                delay: 0.1
                , easing: ease.ease('elastic-out', 2, 0.4)
            });
        }
        var pathA = document.getElementById('pathA-feedback')
            , pathB = document.getElementById('pathB-feedback')
            , pathC = document.getElementById('pathC-feedback')
            , segmentA = new Segment(pathA, beginAC, endAC)
            , segmentB = new Segment(pathB, beginB, endB)
            , segmentC = new Segment(pathC, beginAC, endAC)
            , trigger = document.getElementById('hamburger-feedback')
            , wrapper = document.getElementById('menu-icon-wrapper-feedback');
        wrapper.style.visibility = 'visible';
        setTimeout(function () {
            inAC(segmentA);
            inB(segmentB);
            inAC(segmentC);
        }, 0);
        $('.hamburger').mouseenter(function () {
            outAC(segmentC);
            inAC(segmentC);
            outAC(segmentA);
            inAC(segmentA);
        }).mouseleave(function () {
            outB(segmentB);
        });
        $('#hamburger-feedback').on('click', function () {
            outAC(segmentA);
            outB(segmentB);
            outAC(segmentC);
            $('body').removeClass('fixed');
            $('html').removeClass('fixed');
            setTimeout(function () {
                $('.pencil-bg').removeClass('active').empty();
                $('.pencil').removeClass('show');
                $('.pencil-bg').removeClass('show');
                $(this).removeClass('show');
            }, 100);
            if ($('body').hasClass('open')) {}
            else {
                $('.cloud-scene').removeClass('no-animation');
            }
            var u = new Url(oldU.path);
            if (u.path == '/feedback') {
                var u = new Url('/');
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
            else if (u.path == '/brief') {
                var u = new Url('/');
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
            else {
                var u = new Url(oldU.path);
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
        });
    }

    function liveShow() {
        $('.post').each(function () {
            if ($(window).height() > ($(this).offset().top) + 250) {
                $(this).find('img').each(function () {
                    var img = $(this)
                        , imgData = img.data('src');
                    img.attr('src', imgData);
                });
                $(this).removeClass('hide');
            }
        });
    }

    function worksShow() {
        $('.works-list-item').each(function () {
            if ($(window).height() > ($(this).offset().top) + 250) {
                $(this).find('img').each(function () {
                    var img = $(this)
                        , imgData = img.data('src');
                    img.attr('src', imgData);
                });
                $(this).removeClass('hide');
            }
        });
    }

    function worksItemShow() {
        $('.animate-block').each(function () {
            if ($(window).height() > ($(this).offset().top) + 250) {
                $(this).removeClass('hide');
            }
        });
    }

    function aboutShow() {
        $('.animate-block').each(function () {
            if ($(window).height() > ($(this).offset().top) + 250) {
                $(this).removeClass('hide');
            }
        });
    }

    function urlLiveAjax() {
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/live.html'
            , dataType: 'html'
            , success: function (live_show) {
                var u = new Url('/live');
                history.pushState(null, null, u);
                document.title = "Р›Р°Р№РІ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.live-page-container').html(live_show);
                    liveShow();
                }, 1000);
            }
        });
        $('body').addClass('page-open page-live');
        $('.live-page').addClass('open');
    }

    function urlAboutAjax() {
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/about.html'
            , dataType: 'html'
            , success: function (about_show) {
                var u = new Url('/about');
                history.pushState(null, null, u);
                document.title = "Рћ СЃС‚СѓРґРёРё вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.about-page-container').html(about_show);
                    slider();
                    scrollToAwards();
                    aboutShow();
                }, 1000);
            }
        });
        $('body').addClass('main-page-open page-about');
        $('.about-page').addClass('open');
    }

    function urlArticleAjax() {
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/article/' + article_id + '.html'
            , dataType: 'html'
            , success: function (article_show) {
                var u = new Url('/article/' + article_id);
                history.pushState(null, null, u);
                document.title = "РЎС‚Р°С‚СЊРё вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.article-page-container').html(article_show);
                    $('.article-page-container').removeClass('hide');
                }, 1000);
            }
        });
        $('body').addClass('page-open page-article');
        $('.article-page').addClass('open');
    }

    function urlWorksAjax() {
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/works.html'
            , dataType: 'html'
            , success: function (works_show) {
                var u = new Url('/works');
                history.pushState(null, null, u);
                document.title = "Р Р°Р±РѕС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.works-page-container').html(works_show);
                    worksShow();
                    worksOpen();
                }, 1000);
            }
        });
        $('body').addClass('main-page-open page-works');
        $('.works-page').addClass('open');
    }

    function urlMainPortfolioAjax() {
        $('.wow-portfolio-ajax-block').addClass('load');
        $('body').addClass('open');
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/works/' + work_id + '.html'
            , dataType: 'html'
            , success: function (works_main_show) {
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.wow-portfolio-ajax').html(works_main_show);
                    var u = new Url('/works/' + work_id);
                    history.pushState(null, null, u);
                    var work_name = $('.one-item-main-image h1').html();
                    document.title = work_name + " вЂ” Р Р°Р±РѕС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                    setTimeout(function () {
                        $('.wow-portfolio-ajax-block').addClass('done').removeClass('load');
                    }, 100);
                    worksItemShow();
                    workScrollMain();
                }, 1000);
            }
        });
    }

    function urlContactsAjax() {
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
                document.title = "Some Title";
            }
            , url: '/content/contacts.html'
            , dataType: 'html'
            , success: function (contacts_show) {
                var u = new Url('/contacts');
                history.pushState(null, null, u);
                document.title = "РљРѕРЅС‚Р°РєС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.contacts-page-container').html(contacts_show);
                    addClass();
                }, 1000);
            }
        });
        $('body').addClass('main-page-open page-contacts');
        $('.contacts-page').addClass('open');
    }

    function urlOneWorkAjax() {
        $('.wow-portfolio-ajax-block').addClass('load');
        $('.hamburger, body').addClass('open');
        $('body').addClass('portfolio-main');
        setTimeout(function () {
            $('.cloud-scene').addClass('no-animation');
        }, 500);
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/works/' + work_id + '.html'
            , dataType: 'html'
            , success: function (works_main_show) {
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.wow-portfolio-ajax').html(works_main_show);
                    var work_name = $('.one-item-main-image h1').html();
                    document.title = work_name + " вЂ” Р Р°Р±РѕС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                    setTimeout(function () {
                        $('.wow-portfolio-ajax-block').addClass('done').removeClass('load');
                    }, 100);
                    worksItemShow();
                    workScrollMain();
                }, 1000);
            }
        });
    }

    function urlOneWorkAjaxClick() {
        $('.works-list-item-text, .works-list-item-cover').on('click', function () {
            father = $(this).parent();
            if (father.hasClass('active')) {}
            else {
                var heightWork = $('.works-list-item-cover').height();
                $(this).parent().css('height', heightWork);
            }
            work_id = father.data('worksid');
            marginTop = $('body').scrollTop();
            if ($('.works-list-item').hasClass('active')) {}
            else {
                topFather = father.find('.works-list-item-cover').css('top');
                if (father.hasClass('active')) {}
                else {
                    father.find('.works-list-item-cover').css('top', 0);
                    var offset = father.find('.works-list-item-cover').offset().top - $(window).scrollTop();
                    father.find('.works-list-item-cover').css('top', -offset);
                    father.addClass('active');
                    $('body').removeClass('main-page-open');
                }
                $.ajax({
                    beforeSend: function () {
                        $('.page-loader').addClass('show');
                    }
                    , url: '/content/works/' + work_id + '.html'
                    , dataType: 'html'
                    , success: function (works_item_show) {
                        var u = new Url('/works/' + work_id);
                        history.pushState(null, null, u);
                        $('.page-loader').removeClass('show');
                        setTimeout(function () {
                            father.find('.works-list-item-cover').append('<div class="works-item"></div>');
                            $('.works-item').html(works_item_show);
                            var work_name = $('.one-item-main-image h1').html();
                            document.title = work_name + " вЂ” Р Р°Р±РѕС‚С‹ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                            hamburgerClick();
                            setTimeout(function () {
                                $('.works-item').addClass('done');
                                if ($('html').hasClass('touch')) {
                                    $('html').addClass('overflow');
                                    $('.works-page').scrollTop(marginTop);
                                }
                                workScroll();
                            }, 100);
                        }, 1000);
                    }
                });
                $('body').addClass('one-works-item');
            }
        });
    }

    function urlFeedbackAjax() {
        $('.pencil-bg').addClass('active');
        $('body').addClass('fixed');
        setTimeout(function () {
            $('.cloud-scene').addClass('no-animation');
        }, 300);
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/feedback.html'
            , dataType: 'html'
            , success: function (feedback_show) {
                oldU = new Url;
                var u = new Url('/feedback');
                history.pushState(null, null, u);
                document.title = "Р—Р°СЏРІРєР° вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.pencil-bg').html(feedback_show);
                    feedbackClick();
                    $('#hamburger-feedback').removeClass('show');
                    $('#form-feedback').removeClass('hide');
                    ajaxSend();
                }, 1000);
            }
        });
    }

    function urlBriefAjax() {
        $('.pencil-bg').addClass('active');
        $('body').addClass('fixed');
        setTimeout(function () {
            $('.cloud-scene').addClass('no-animation');
        }, 300);
        $.ajax({
            beforeSend: function () {
                $('.page-loader').addClass('show');
            }
            , url: '/content/brief.html'
            , dataType: 'html'
            , success: function (brief_show) {
                oldU = new Url;
                var u = new Url('/brief');
                history.pushState(null, null, u);
                document.title = "Р‘СЂРёС„ вЂ” РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
                $('.page-loader').removeClass('show');
                setTimeout(function () {
                    $('.pencil-bg').html(brief_show);
                    feedbackClick();
                    $('#hamburger-feedback').removeClass('show');
                    $('#form-brief').removeClass('hide');
                    ajaxSendBrief();
                }, 1000);
            }
        });
    }
    $('.live').on('click', function () {
        urlLiveAjax();
    });
    $(window).scroll(function () {
        var nowScroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var winScroll = nowScroll + windowHeight;
        $('.post').each(function () {
            if (winScroll > $(this).offset().top + 300) {
                $(this).removeClass('hide');
            }
            if (winScroll > $(this).offset().top - 1000) {
                $(this).find('img').each(function () {
                    var img = $(this)
                        , imgData = img.data('src');
                    img.attr('src', imgData);
                });
            }
        });
        $('.works-list-item').each(function () {
            if (winScroll > $(this).offset().top + 300) {
                $(this).removeClass('hide');
            }
            if (winScroll > $(this).offset().top - 1000) {
                $(this).find('img').each(function () {
                    var img = $(this)
                        , imgData = img.data('src');
                    img.attr('src', imgData);
                });
            }
        });
        if ($('html').hasClass('mobile')) {
            $('.about-page').find('.animate-block').each(function () {
                if ($(window).height() > ($(this).offset().top) - 100 - $(window).scrollTop()) {
                    $(this).removeClass('hide');
                }
            });
            $('.about-team').find('.team-item').each(function () {
                if ($(window).height() > ($(this).offset().top) - 100 - $(window).scrollTop()) {
                    $(this).removeClass('animate');
                }
            });
            $('.works-list-item').each(function () {
                if (winScroll > $(this).offset().top - 100) {
                    $(this).removeClass('hide');
                }
            });
        }
        else if ($('html').hasClass('safari')) {
            $('.works-list-item').each(function () {
                if (winScroll > $(this).offset().top + 200) {
                    $(this).removeClass('hide');
                }
            });
            $('.about-page').find('.animate-block').each(function () {
                if ($(window).height() > ($(this).offset().top) + 200 - $(window).scrollTop()) {
                    $(this).removeClass('hide');
                }
            });
            $('.about-team').find('.team-item').each(function () {
                if ($(window).height() > ($(this).offset().top) + 200 - $(window).scrollTop()) {
                    $(this).removeClass('animate');
                }
            });
        }
        else {
            $('.about-page').find('.animate-block').each(function () {
                if ($(window).height() > ($(this).offset().top) + 200 - $(window).scrollTop()) {
                    $(this).removeClass('hide');
                }
            });
            $('.about-team').find('.team-item').each(function () {
                if ($(window).height() > ($(this).offset().top) + 200 - $(window).scrollTop()) {
                    $(this).removeClass('animate');
                }
            });
            $('.works-list-item').each(function () {
                if (winScroll > $(this).offset().top + 200) {
                    $(this).removeClass('hide');
                }
                if (winScroll > $(this).offset().top) {
                    var nullScroll = winScroll - $(this).offset().top;
                    var prlx = nullScroll / 10;
                    $(this).find('.works-list-item-cover').css('transform', 'translate3d(0px, -' + prlx + 'px, 0px)');
                }
            });
        }
    });
    $('.live-page').scroll(function () {
        $('.post').each(function () {
            var nowScroll = $(this).scrollTop();
            var windowHeight = $(window).height();
            var winScroll = nowScroll + windowHeight;
            if (winScroll > $(this).offset().top) {
                $(this).removeClass('hide');
            }
            if (winScroll > $(this).offset().top - 1000) {
                $(this).find('img').each(function () {
                    var img = $(this)
                        , imgData = img.data('src');
                    img.attr('src', imgData);
                });
            }
        });
    });

    function workScroll() {
        $('.one-item div').each(function () {
            if ($(window).height() > ($(this).offset().top) - $(window).scrollTop()) {
                $(this).removeClass('hide');
            }
        });
        $('.works-item').scroll(function () {
            $('.one-item-main-image h1').css('margin-top', -($(this).scrollTop() / 5));
            $('.one-item div').each(function () {
                if ($(window).height() > ($(this).offset().top) - $(window).scrollTop()) {
                    $(this).removeClass('hide');
                }
            });
        });
    }

    function workScrollMain() {
        $('.one-item div').each(function () {
            if ($(window).height() > ($(this).offset().top) - $(window).scrollTop()) {
                $(this).removeClass('hide');
            }
        });
        $('.wow-portfolio-ajax-block').scroll(function () {
            $('.one-item-main-image h1').css('margin-top', -($(this).scrollTop() / 5));
            $('.one-item div').each(function () {
                if ($(window).height() > ($(this).offset().top) - $(window).scrollTop()) {
                    $(this).removeClass('hide');
                }
            });
        });
    }
    $('.article').on('click', function () {
        $('.article-page-header').each(function () {
            if ($(this).hasClass('active')) {
                article_id = $(this).data('article');
            }
        });
        urlArticleAjax();
    });
    $('.article-page-header').on('click', function () {
        $('.article-page-container').addClass('hide');
        setTimeout(function () {
            $('.article-page-container').empty();
        }, 300)
        $('.article-page-header').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var father = $(this).parent();
        if ($('html').hasClass('mobile')) {
            if (father.hasClass('show')) {
                father.removeClass('show');
            }
            else {
                father.addClass('show');
                return false;
            }
        }
        article_id = $(this).data('article');
        urlArticleAjax();
    });
    $('.works').on('click', function () {
        urlWorksAjax();
    });

    function worksOpen() {
        urlOneWorkAjaxClick();
    }
    $('.hamburger-arrow').on('click', function () {
        $('.live-page-container, .article-page-container, .works-page-container, .about-page-container, .contacts-page-container').addClass('hide');
        setTimeout(function () {
            $('.live-page-container, .works-page-container, .article-page-container, .about-page-container, .contacts-page-container').empty().removeClass('hide');
        }, 1000);
    });
    $('.pencil-button').on('click', function () {
        $('.pencil-bg').addClass('show');
        $('.pencil').addClass('show');
    });
    $('.close-button').on('click', function () {
        $('.pencil-bg').removeClass('show');
        $('.pencil').removeClass('show');
    });
    $('.feedback-button').on('click', function () {
        $('html').addClass('fixed');
        urlFeedbackAjax();
    });
    $('.brief-button').on('click', function () {
        $('html').addClass('fixed');
        urlBriefAjax();
    });
    $(document).mouseup(function (e) {
        var pencil = $('.pencil');
        if ((pencil.hasClass('show')) && (!pencil.is(e.target)) && pencil.has(e.target).length === 0) {
            pencil.css('transform', 'scale(1.03)');
            $('.pencil-bg').removeClass('show');
            pencil.removeClass('show');
            setTimeout(function () {
                pencil.css('transform', '');
            }, 100);
        }
    });
    $('.about').on('click', function (e) {
        urlAboutAjax();
        e.preventDefault();
    });

    function slider() {
        if ($('html').hasClass('touch')) {}
        else {
            var slideCount = $('.slider ul li').length;
            var slideWidth = $('.slider ul').width();
            var slideHeight = $('.slider ul li .about-review-text-text').height() + 190;
            var sliderUlWidth = slideCount * slideWidth;
            $('.slider').css({
                width: slideWidth
                , height: slideHeight
            });
            $('.slider ul').css({
                width: sliderUlWidth
                , marginLeft: -slideWidth
            });
            $('.slider ul li').css({
                width: slideWidth
            });
            $('.slider ul li:last-child').prependTo('.slider ul');

            function moveRight() {
                $('.slider ul').animate({
                    left: -slideWidth
                }, 200, function () {
                    $('.slider ul li:first-child').appendTo('.slider ul');
                    $('.slider ul').css('left', '');
                });
            }
            $('.control_next').click(function () {
                moveRight();
            });
        }
    }

    function scrollToAwards() {
        $('.view-all div').on('click', function () {
            $('html, body').animate({
                scrollTop: $('.about-awards-list').offset().top
            }, 1000);
        });
    }
    $('.contacts').on('click', function (e) {
        urlContactsAjax();
        e.preventDefault();
    });

    function addClass() {
        setTimeout(function () {
            $('.contacts-right-block').addClass('show')
            $('.contacts-left-block').addClass('show')
        }, 200);
    }

    function ajaxSend() {
        $('#form-feedback').submit(function (e) {
            var form_data = $(this).serialize();
            $('.send-feedback').addClass('send');
            $('body').removeClass('fixed');
            $('html').removeClass('overflow').removeClass('fixed');
            $.ajax({
                type: "POST"
                , url: "mail.php"
                , data: form_data
                , success: function () {}
            });
            setTimeout(function () {
                $('.pencil-bg').removeClass('active').empty().removeClass('show');
                $('.pencil').removeClass('show');
                setTimeout(function () {
                    $('.pencil').addClass('done');
                }, 200);
            }, 50);
            setTimeout(function () {
                $('.pencil').removeClass('done')
            }, 4000);
            var u = new Url(oldU.path);
            if (u.path == '/feedback') {
                var u = new Url('/');
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
            else {
                var u = new Url(oldU.path);
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
            e.preventDefault();
        });
    }

    function ajaxSendBrief() {
        $('#form-brief').submit(function (e) {
            var form_data_brief = $(this).serialize();
            var b_target = $("input[name='target']:checked").map(function () {
                return this.value;
            }).get();
            var b_add_more = $("input[name='add_more']:checked").map(function () {
                return this.value;
            }).get();
            $('.send-feedback').addClass('send');
            $('body').removeClass('fixed');
            $('html').removeClass('overflow').removeClass('fixed');
            $.ajax({
                type: "POST"
                , url: "brief.php"
                , data: form_data_brief + b_target + b_add_more
                , success: function () {}
            });
            setTimeout(function () {
                $('.pencil-bg').removeClass('active').empty().removeClass('show');
                $('.pencil').removeClass('show');
                setTimeout(function () {
                    $('.pencil').addClass('done');
                }, 200);
            }, 50);
            setTimeout(function () {
                $('.pencil').removeClass('done')
            }, 4000);
            var u = new Url(oldU.path);
            if (u.path == '/brief') {
                var u = new Url('/');
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
            else {
                var u = new Url(oldU.path);
                history.pushState(null, null, u);
                document.title = "РЎС‚СѓРґРёСЏ Рў вЂ” РѕРґРЅР° РёР· СЃРёР»СЊРЅРµР№С€РёС… СЃС‚СѓРґРёР№ РЎРёР±РёСЂРё. Р”РµР»Р°РµРј РѕС‡РµРЅСЊ РєСЂСѓС‚РѕР№ РґРёР·Р°Р№РЅ. РЎРѕР·РґР°РЅРёРµ СЃР°Р№С‚РѕРІ, SEO, РіСЂР°С„РёС‡РµСЃРєРёР№ РґРёР·Р°Р№РЅ.";
            }
            e.preventDefault();
        });
    }
    $(document.body).ready(function () {
        $.ajax({
            url: 'news.txt'
        }).done(function (content) {
            lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
            if (lines && lines.length) {
                var lastRandomNumber = 0;
                $('.refresh').on('click', function () {
                    $('.news-block').addClass('refresh');
                    setTimeout(function () {
                        $('.news-block').removeClass('refresh');
                    }, 300);
                    lastRandomNumber++;
                    if (lastRandomNumber > lines.length) {
                        lastRandomNumber = 1;
                    }
                    setTimeout(function () {
                        $('.news-block-text').html(lines[lastRandomNumber - 1]);
                    }, 100);
                });
            }
        });
    });
    $(window).on('mousemove', function (e) {
        if ($('body').hasClass('open') || $('body').hasClass('fixed')) {}
        else {
            var w = $(window).width();
            var offsetX = 0.5 - e.pageX / w;
            $('.parallax').each(function (i, el) {
                var offset = parseInt($(el).data('offset'));
                var translate = "translate3d(" + Math.round(offsetX * offset) + "px, 0px, 0px)";
                $(el).css({
                    '-webkit-transform': translate
                    , 'transform': translate
                    , 'moz-transform': translate
                });
            });
        }
    });
    var main_offset = $('.main .mount img').offset().top + 500;
    $('.main .cloud-scene').css('height', main_offset);
    $('.cloud-one img, .cloud-three img, .cloud-five img, .cloud-seven img, .cloud-eight img, .cloud-more img').css('width', main_offset * 2.3);
    $('.cloud-two img, .cloud-four img, .cloud-six img, cloud-zero img').css('width', main_offset * 2.8);
    $(document).ready(function () {
        if ($('html').hasClass('mobile')) {}
        else {
            $('.wow-portfolio').fullpage({
                anchors: ['main', 'one', 'two', 'three', 'four', 'five', 'six']
                , normalScrollElements: 'footer, .menu, .live-page, .article-page, .works-page, .about-page, .contacts-page, .wow-portfolio-ajax-block'
                , menu: '#menuMain'
                , onLeave: function (index, nextIndex, direction) {
                    if (direction == 'up') {
                        $('body').addClass('slide-up').removeClass('slide-down').addClass('up-animation');
                    }
                    if (direction == 'down') {
                        $('body').removeClass('slide-up').addClass('slide-down').addClass('down-animation');
                    }
                }
                , afterLoad: function () {
                    setTimeout(function () {
                        $('body').removeClass('up-animation down-animation');
                    }, 10);
                }
            });
        }
    });

    function addClassActive() {
        $('.main-nav ul li').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    }
    $('[data-menuanchor="main"]').on('click', function () {
        addClassActive();
        if ($(this).hasClass('no-click')) {}
        else {
            $.fn.fullpage.moveTo(1, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });
    $('[data-menuanchor="one"]').on('click', function () {
        if ($(this).hasClass('no-click')) {}
        else {
            $.fn.fullpage.moveTo(2, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });
    $('[data-menuanchor="two"]').on('click', function () {
        if ($(this).hasClass('no-click')) {}
        else if ($('body').hasClass('fp-viewing-main')) {
            $.fn.fullpage.moveTo(2, 0);
            setTimeout(function () {
                $.fn.fullpage.moveTo(3, 0);
            }, 500);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
        else {
            $.fn.fullpage.moveTo(3, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });
    $('[data-menuanchor="three"]').on('click', function () {
        if ($(this).hasClass('no-click')) {}
        else if ($('body').hasClass('fp-viewing-main')) {
            $.fn.fullpage.moveTo(2, 0);
            setTimeout(function () {
                $.fn.fullpage.moveTo(4, 0);
            }, 500);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
        else {
            $.fn.fullpage.moveTo(4, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });
    $('[data-menuanchor="four"]').on('click', function () {
        if ($(this).hasClass('no-click')) {}
        else if ($('body').hasClass('fp-viewing-main')) {
            $.fn.fullpage.moveTo(2, 0);
            setTimeout(function () {
                $.fn.fullpage.moveTo(5, 0);
            }, 500);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
        else {
            $.fn.fullpage.moveTo(5, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });
    $('[data-menuanchor="five"]').on('click', function () {
        if ($(this).hasClass('no-click')) {}
        else if ($('body').hasClass('fp-viewing-main')) {
            $.fn.fullpage.moveTo(2, 0);
            setTimeout(function () {
                $.fn.fullpage.moveTo(6, 0);
            }, 500);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
        else {
            $.fn.fullpage.moveTo(6, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });
    $('[data-menuanchor="six"]').on('click', function () {
        if ($(this).hasClass('no-click')) {}
        else if ($('body').hasClass('fp-viewing-main')) {
            $.fn.fullpage.moveTo(2, 0);
            setTimeout(function () {
                $.fn.fullpage.moveTo(7, 0);
            }, 500);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
        else {
            $.fn.fullpage.moveTo(7, 0);
            $('#menuMain li').addClass('no-click');
            setTimeout(function () {
                $('#menuMain li').removeClass('no-click');
            }, 700);
        }
    });

    function close() {
        var beginAC = 30
            , endAC = 370
            , beginB = 30
            , endB = 370;

        function inAC(s) {
            s.draw('80% - 140', '80%', 0.3, {
                delay: 0.1
                , callback: function () {
                    inAC2(s)
                }
            });
        }

        function inAC2(s) {
            s.draw('100% - 595', '100% - 265', 0.6, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function inB(s) {
            s.draw(beginB - 160, endB + 360, 0.1, {
                callback: function () {
                    inB2(s)
                }
            });
        }

        function inB2(s) {
            s.draw(beginB + 160, endB - 160, 0.3, {
                easing: ease.ease('bounce-out', 1, 0.3)
            });
        }

        function outAC(s) {
            s.draw('90% - 240', '90%', 0.1, {
                easing: ease.ease('elastic-in', 1, 0.3)
                , callback: function () {
                    outAC2(s)
                }
            });
        }

        function outAC2(s) {
            s.draw('20% - 240', '20%', 0.3, {
                callback: function () {
                    outAC3(s)
                }
            });
        }

        function outAC3(s) {
            s.draw(beginAC, endAC, 0.7, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function outB(s) {
            s.draw(beginB, endB, 0.7, {
                delay: 0.1
                , easing: ease.ease('elastic-out', 2, 0.4)
            });
        }
        var pathA = document.getElementById('pathA-work')
            , pathB = document.getElementById('pathB-work')
            , pathC = document.getElementById('pathC-work')
            , segmentA = new Segment(pathA, beginAC, endAC)
            , segmentB = new Segment(pathB, beginB, endB)
            , segmentC = new Segment(pathC, beginAC, endAC)
            , trigger = document.getElementById('hamburger-work')
            , wrapper = document.getElementById('menu-icon-wrapper-work');
        wrapper.style.visibility = 'visible';
        setTimeout(function () {
            inAC(segmentA);
            inB(segmentB);
            inAC(segmentC);
        }, 200);
        $('.hamburger').mouseenter(function () {
            outAC(segmentC);
            inAC(segmentC);
            outAC(segmentA);
            inAC(segmentA);
        }).mouseleave(function () {
            outB(segmentB);
        });
        $('#hamburger-work').on('click', function () {
            $('body').removeClass('open');
            $('.wow-portfolio-ajax-block').addClass('hidden');
            $('html').removeClass('overflow');
            setTimeout(function () {
                $('.wow-portfolio-ajax-block').removeClass('done').removeClass('hidden').empty();
            }, 500);
        });
    }
    $('.wow-portfolio-item-block img, .wow-portfolio-item-block div').on('click', function () {
        father = $(this).parent();
        work_id = father.data('worksid');
        urlMainPortfolioAjax();
    });
    $('.like').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });
});