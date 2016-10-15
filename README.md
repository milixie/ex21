# 效果 <a href="http://7xj5et.com1.z0.glb.clouddn.com/github/myinfo/html/index.html" target="_blank">http://7xj5et.com1.z0.glb.clouddn.com/github/myinfo/html/index.html</a>

# 项目说明

## 项目构建

### 基本安装

- 安装nodejs
- 使用`npm`安装Yeoman(现代web app的脚手架工具)`npm install -g yo`
- 使用模具 `generators`,安装方法`npm install -g generator-angular`
- 使用`npm`安装`bower`（web的包管理器）,`npm install -g bower`
- 使用`npm`安装`grunt`,`npm install -g grunt-cli`
- 使用`grunt`（js的任务运行者）构建文件，编写`gruntfile.js`,copy 文件和 clean文件需要安装两个相关包：`npm install grunt-contrib-copy --save-dev`,`npm install grunt-contrib-clean --save-dev`

### 创建一个项目
1. 在github上创建一个完整项目
2. `git clone projectAddress`
3. `cd projectName`
4. 使用Yeoman脚手架工具构建项目`yo angular projectName`
5. 执行`grunt serve`项目便运行起来了

## 项目中使用的技术

- 使用了`flex`的布局

- 使用了`css3`中的动画

- 使用`sass`来编译`css`

- 使用了jQuery的全屏滚动框架fullpage.js
  使用方法：
  1. 使用`bower`安装fullpage.js `bower install fullpage.js`
  2. 引入文件
```language
<link rel="stylesheet" type="text/css" href="bower_components/fullpage.js/jquery.fullPage.css">
<script src="bower_components/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="bower_components/fullpage.js/vendors/jquery.easings.min.js"></script>
<script type="text/javascript" src="bower_components/fullpage.js/vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="bower_components/fullpage.js/jquery.fullPage.js"></script>
```
  3.html结构
  ```language
  <div id="dowebok">
    <div class="section">
        <h3>第一屏</h3>
    </div>
    <div class="section">
        <h3>第二屏</h3>
    </div>
    <div class="section">
        <div class="slide">第三屏的第一屏</div>
        <div class="slide">第三屏的第二屏</div>
        <div class="slide">第三屏的第三屏</div>
        <div class="slide">第三屏的第四屏</div>
    </div>
    <div class="section">
        <h3>第四屏</h3>
    </div>
</div>
```
  4. js
```language
  $(function(){
    $('#dowebok').fullpage();
  });
```
其他配置
```
  $(function(){
    $('#dowebok').fullpage({
      menu: '#menu',
      lockAnchors: false,
      anchors:['info', 'show', 'exper', 'jobs'],
      navigation: false,
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
```
当浏览器窗口小于1024px的时候，取消滚动，出现滚动条
```language
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
```


## 解决浏览器兼容性问题

- 对于IE8以及IE8以下的浏览器，引入`http://html5shiv.googlecode.com/svn/trunk/html5.js`解决ie浏览器不支持HTML5新标签的兼容性问题

- 对于ie10以下不支持`flex`布局方式，使用了 css hack的方式：
```language
display: flex;
display: -webkit-flex;
display: -ms-flex;
justify-content: flex-end;
-webkit-justify-content: flex-end;
-ms-justify-content: flex-end;
display: block\0;  //for ie8 ie9 ie10
float: right\0;  //for ie8 ie9 ie10
```
- 页面在IE8中内容不显示，只显示一行让用户升级浏览器的提示语
```language
<!--[if lte IE 8]>
      <h2 style="text-align: center; margin: 400px auto;">
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      </h2>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js">
<![endif]-->
```


## 移动端效果

- 引入`<meta name="viewport" content="width=device-width,initial-scale=1">`

- 使用`@media screen and (max-width: 768px)`使得页面响应到移动端