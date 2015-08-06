/**
 * HONDA
 *
 * base.js
 * @version  1.0  (updated: 2012.10.13)
 */


var $win = $(window);
var fixNav = {};

$(function(){

  //fixNav
  fixNav.selector = $('#fixNav');
  if(fixNav.selector.length){
    fixNav.H = fixNav.selector.outerHeight();
    fixNav.top = fixNav.selector.offset().top;
    fixNav.flag = true;
    fixNav.selector.wrap('<div id="fixNavWrap"/>');
    $win.scroll(function(){
      var scrTop = $win.scrollTop();
      if(fixNav.top < scrTop && fixNav.flag){
        fixNav.flag = false;
		if ($.browser.msie && $.browser.version < 7) {
	        fixNav.selector.addClass('fix_ie');
		} else {
	        fixNav.selector.addClass('fix');
		}
      }
      if(fixNav.top >= scrTop && !fixNav.flag){
        fixNav.flag = true;
		if ($.browser.msie && $.browser.version < 7) {
        	fixNav.selector.removeClass('fix_ie');
		} else {
        	fixNav.selector.removeClass('fix');
		}
      }
    }).scroll();
  }

  //$.scroller({adjustPosition: -(fixNav.H - 4)});
 
  //smooth scroll
  $('a[href^=#]').not('.noScroll').click(function(){
    if(this.hash){
      var duration=700;
      var easing='easeInOutCubic';
      var newHash=this.hash;
      var target=$(this.hash).offset().top - fixNav.H + 4;
      var oldLocation=window.location.href.replace(window.location.hash, '');
      var newLocation=this;
      if(oldLocation+newHash==newLocation){
        $('html,body').stop().animate({ scrollTop: target }, duration, easing, function() {
          //if(!$.ua.isIE){ location.hash = newHash; }
          //setTimeout(function(){ $(this).scrollTop(target); },1);
        });
      }
    }
    return false;
  });

  //auto Smooth Scroll
  var thisHash = location.hash;
  if(thisHash){
    var duration=1800;
    var easing='easeInOutCubic';
    var target= $(thisHash).offset().top - fixNav.H + 4;
	//setTimeout(function() {
	//	$.scroller(thisHash, {adjustPosition: -(fixNav.H - 4)});
	//}, 1000);
	
    $('html,body').scrollTop(0).stop().animate({ scrollTop: target }, duration, easing, function() {
      //window.location.href = location.pathname;
      $(this).scrollTop(target);
    });
	
  }

  //Cancel Smooth Scroll
  $win.bind('mousewheel',function(){
    $('html,body').stop();
  });

  //current page
  var carrentURL = location.href;
  if(/\/styling\//.test(carrentURL)){ $('#fixNav #n1 a').addClass('current'); }
  else if(/\/interior\//.test(carrentURL)){ $('#fixNav #n2 a').addClass('current'); }
  else if(/\/type\//.test(carrentURL)){ $('#fixNav #n3 a').addClass('current'); }
  else if(/\/performance\//.test(carrentURL)){ $('#fixNav #n4 a').addClass('current'); }
  else if(/\/equipment\//.test(carrentURL)){ $('#fixNav #n5 a').addClass('current'); }
  else if(/\/premium\//.test(carrentURL)){ $('#fixNav #n6 a').addClass('current'); }
  else if(/\/faq\//.test(carrentURL)){ $('#fixNav #n7 a').addClass('current'); }

  //マウスオーバー 透明度
  $('img.opacity').hover(
    function(){ $(this).css('opacity','0.7');},
    function(){ $(this).css('opacity','1');}
  );

});

