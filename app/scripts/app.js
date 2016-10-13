$(function(){
    $('#dowebok').fullpage({
      menu: '#menu',
      lockAnchors: false,
      anchors:['info', 'show', 'exper', 'jobs'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['自我描述', '作品展示', '项目经验', '关于'],
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

    //第三屏项目经验
    $('.project-detail').fadeOut();
    $('.project-name').on('click', function(){
      $(this).parent('.projects-item').addClass('item-active').siblings('.projects-item').removeClass('item-active');
      $(this).siblings('.project-detail').fadeToggle();
      $(this).parent('.item-active').siblings('.projects-item').children('.project-detail').fadeOut();
    });
    //第4屏工作经验
    $('.job-detail').fadeOut();
    $('.job-name').on('click', function(){
      $(this).parent('.jobs-item').addClass('item-active').siblings('.jobs-item').removeClass('item-active');
      $(this).siblings('.job-detail').fadeToggle();
      $(this).parent('.item-active').siblings('.jobs-item').children('.job-detail').fadeOut();
    })
});