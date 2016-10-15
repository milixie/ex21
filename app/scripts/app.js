$(function(){
    $('#dowebok').fullpage({
      menu: '#menu',
      lockAnchors: false,
      anchors:['info', 'show', 'exper', 'skill'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['自我描述', '作品展示', '经验总结', '技术总结'],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      sectionsColor : ['#ccc', '#fff'],
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();

    // var navigatorName = "Microsoft Internet Explorer"; 
    // if( navigator.appName == navigatorName ){ 
    //   alert("ie") 
    // }else{
    //   alert("not ie") 
    // }

    // if(document.all){ 
    // alert("IE"); 
    // }else{ 
    // alert("not ie"); 
    // }

    // var explorer = navigator.userAgent ;
    // //ie 
    // if (explorer.indexOf("MSIE") >= 0) {
    //   // $('body').html('<h2 style="text-align: center;">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</h2>')
    // }

    // var browser = navigator.appName,
    //     b_version = navigator.appVersion,
    //     version = b_version.split(";"),
    //     trim_Version = version[1].replace(/[ ]/g, "");

    // if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
    //    // alert("IE9");
    // } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
    //   $('header').remove();
    //   $('#dowebok').remove();
    // } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE10.0") {
    //    // alert("IE10");
    // } 

    // alert(browser);
    // alert(trim_Version);

    //第三屏项目经验
    $('.projects-item .project-detail').fadeOut();
    //移动端点击项目经验和工作经验弹框显示
    var detailEle = $('<div id="detailEle"><div class="ele-detail"></div></div>');
    $('body').prepend(detailEle);

    $('.project-name').on('click', function(){
      if ($(window).width() > 768) {
        $(this).parent('.projects-item').addClass('item-active').siblings('.projects-item').removeClass('item-active');
        $(this).siblings('.project-detail').fadeToggle();
        $(this).parent('.item-active').siblings('.projects-item').children('.project-detail').fadeOut();
      } else {
        var proDetail = $(this).siblings('.project-detail').html();
        $('#detailEle .ele-detail').html(proDetail);
        $('#detailEle').show();
      }
    });

    //第4屏工作经验
    $('.jobs-item .job-detail').fadeOut();
    $('.job-name').on('click', function(){
      if ($(window).width() > 768) {
        $(this).parent('.jobs-item').addClass('item-active').siblings('.jobs-item').removeClass('item-active');
        $(this).siblings('.job-detail').fadeToggle();
        $(this).parent('.item-active').siblings('.jobs-item').children('.job-detail').fadeOut();
      } else {
        var jobDetail = $(this).siblings('.job-detail').html();
        $('#detailEle .ele-detail').html(jobDetail);
        $('#detailEle').show();
      }
    });

    $('#detailEle').on('click', function(){
      $('#detailEle').hide();
      $('#detailEle .ele-detail').html('');
    });

});