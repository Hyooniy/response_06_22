import $ from 'jquery';

$(function(){
    //미디어 크기 설정
    let windowW = $(window).width()
    if(windowW > 1555){
        nav();
        asideNav();
    }
    else if(windowW > 980 && windowW <= 1154){
        nav();
        asideNav();
    }
    else if(windowW > 580 && windowW <= 979){
        tNav()
    }
    else if(windowW <= 579){
        asideNav();
        nav();
    }

    //함수 만들기
    function nav(){
        $('nav li>a').on('click',function(){
            const navA = $(this).attr('href');
            const aPos = $(navA).offset().top;
            const hh = $('header').innerHeight();
            $('html,body').animate({scrollTop : aPos - hh},800);
            return false;
        })
    }
    function tNav(){
        let navW = $('nav').width();
        $('header .btn').on('click',function(){
            $(this).hide();
            $('nav').animate({left: 0},500)
        })
        $('nav li>a').on('click',function(){
            let navB = $(this).attr('href');
            let aPos = $(navB).offset().top;
            let headerH = $('header').innerHeight();
            $('html,body').animate({scrollTop: navB -headerH },500)
            $('nav').css('left','-'+navW+'px')
            $('header .btn').show()
            return false
        })
        $('nav .close').on('click',function(){
            $('nav').css('left','-'+navW+'px')
            $('header .btn').show()
        })
    }
    function asideNav(){}

})