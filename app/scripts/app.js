$(function(){
  var $ww = $(window).width();
  if ($ww > 768){
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
      scrollingSpeed: 1000,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'linear',
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
      onLeave: function(index, nextIndex, direction){
        if (index == 1) {
          // $('.section1 .head').animate({
          //   top: '-1000px'
          // }, 800);
          $('.section1 .head').removeClass('head-anim');
          $('.section1 ul').animate({
            top: '500px'
          }, 800);
        }
        if (index == 3) {
          $('.project-name').animate({
            left: '-1000px'
          }, 1000);
          $('.job-name').animate({
            left: '1000px'
          }, 1000);
        }
        if (index == 4) {
          $('.skills li').each(function(i){
            var $rel = $(this).css('left');
            var $arr = $rel.split('px');

            switch (i % 2) {
              case 0:
                $(this).animate({
                  left: '2000px',
                  top: '1000px'
                }, (Math.random() * (i % 4) + 1) * 200);
                break;
              case 1:
                $(this).animate({
                  left: '-2000px',
                  top: '1000px'
                }, (Math.random() * (i % 4) + 1) * 100);
                break;
              default:
                break;
            }
          });
        }
      },
      afterLoad: function(anchorLink, index){
        if (index == 1) {
          // $('.section1 .head').animate({
          //   top: '0px'
          // }, 800);
          $('.section1 .head').addClass('head-anim');
          $('.section1 ul').animate({
            top: '0px'
          }, 800);
        }
        if (index == 3) {
          $('.expers-public-name').each(function(i){
            $(this).animate({
              left: '0px'
            }, (Math.random() * (i % 4) + 1) * 400);
          })
        }
        if (index == 4) {
          $('.skills li').each(function(i){
            var $rel = $(this).css('left');
            var $arr = $rel.split('px');

            //使得最终每个li都是left:[-25, 25], top:[-25, 25]
            $(this).animate({
              left: Math.random() * 50 - 25 + 'px',
              top: Math.random() * 50 - 25 + 'px'
            }, (Math.random() * (i % 4) + 1) * 400);

          });
        }
      },
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww1 = $(window).width();
        if($ww1 < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
  } else {
    var a1 = $('<a name="info" class="tips"></a>'),
        a2 = $('<a name="show" class="tips"></a>'),
        a3 = $('<a name="exper" class="tips"></a>'),
        a4 = $('<a name="skill" class="tips"></a>');
    $('.section1').prepend(a1);
    $('.section2').prepend(a2);
    $('.section3').prepend(a3);
    $('.section4').prepend(a4);
  }


    

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

    //移动端点击项目经验和工作经验弹框显示
    var detailEle = $('<div id="detailEle"><div class="ele-detail"></div></div>');
    $('body').prepend(detailEle);

    //第三屏项目经验
    $('.projects-item .project-detail').fadeOut();
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