
/* 상단 이벤트 제어 스크립트 */
	$(document).ready(function() {
        $(".eventClose").click(function() {
          $("#topArea").slideUp(200);
		  $(".eventArea").css({'display':'none'});
		  $('#fixAnchor').addClass('js_fixed2');
		  $('#fixNav').addClass('fix2');
		  $(".content").showUp(200);
        });
      });

/* btn hover */
$(document).ready(function() {
		
		$(".blog").hover(function() {
          $(this).addClass("on");
        }, function(){
		$(this).removeClass('on');
		});

		$(".facebook").hover(function() {
          $(this).addClass("on");
        }, function(){
		$(this).removeClass('on');
		});

        $(".btn_prev").hover(function() {
          $(this).addClass("on");
        }, function(){
		$(this).removeClass('on');
		});

		$(".btn_next").hover(function() {
          $(this).addClass("on");
        }, function(){
		$(this).removeClass('on');
		});

      });

/* 인트로 이미지 오버 */
function imgOn(imgElement) {
	imgElement.src = imgElement.src.replace("_off.png", "_on.png");
	}
function imgOff(imgElement) {
	imgElement.src = imgElement.src.replace("_on.png", "_off.png");
	}

/* 슬라이드 스크립트 제어 */
$(document).ready(function() {
	
	/* 아이치즈 슬라이드 */
	$("#cheese01").touchSlider({
		flexible : true,
		btn_prev : $("#cheese01 .btn_prev"),
		btn_next : $("#cheese01 .btn_next"),
		initComplete : function (e) {
			$("#cheese01_paging").html("");
			$("#cheese01 ul li").each(function (i, el) {
				$("#cheese01_paging").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese01_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese01").get(0).go_page(i);
			});
			$("#cheese01_icon").html("");
			$("#cheese01 ul li").each(function (i, el) {
				$("#cheese01_icon").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese01_icon .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese01").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#cheese01_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});

	/* 대표치즈 슬라이드 */
	$("#cheese02").touchSlider({
		flexible : true,
		btn_prev : $("#cheese02 .btn_prev"),
		btn_next : $("#cheese02 .btn_next"),
		initComplete : function (e) {
			$("#cheese02_paging").html("");
			$("#cheese02 ul li").each(function (i, el) {
				$("#cheese02_paging").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese02_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese02").get(0).go_page(i);
			});
			$("#cheese02_icon").html("");
			$("#cheese02 ul li").each(function (i, el) {
				$("#cheese02_icon").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese02_icon .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese02").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#cheese02_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});

	/* 간식치즈 슬라이드 */
	$("#cheese03").touchSlider({
		flexible : true,
		btn_prev : $("#cheese03 .btn_prev"),
		btn_next : $("#cheese03 .btn_next"),
		initComplete : function (e) {
			$("#cheese03_paging").html("");
			$("#cheese03 ul li").each(function (i, el) {
				$("#cheese03_paging").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese03_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese03").get(0).go_page(i);
			});
			$("#cheese03_icon").html("");
			$("#cheese03 ul li").each(function (i, el) {
				$("#cheese03_icon").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese03_icon .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese03").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#cheese03_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});

	/* 피자치즈 슬라이드 */
	$("#cheese04").touchSlider({
		flexible : true,
		btn_prev : $("#cheese04 .btn_prev"),
		btn_next : $("#cheese04 .btn_next"),
		initComplete : function (e) {
			$("#cheese04_paging").html("");
			$("#cheese04 ul li").each(function (i, el) {
				$("#cheese04_paging").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese04_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese04").get(0).go_page(i);
			});
			$("#cheese04_icon").html("");
			$("#cheese04 ul li").each(function (i, el) {
				$("#cheese04_icon").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese04_icon .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese04").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#cheese04_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
		/* 치즈이야기 슬라이드 */
	$("#cheese05").touchSlider({
		flexible : true,
		btn_prev : $("#cheese05 .btn_prev"),
		btn_next : $("#cheese05 .btn_next"),
		initComplete : function (e) {
			$("#cheese05_paging").html("");
			$("#cheese05 ul li").each(function (i, el) {
				$("#cheese05_paging").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese05_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese05").get(0).go_page(i);
			});
			$("#cheese05_icon").html("");
			$("#cheese05 ul li").each(function (i, el) {
				$("#cheese05_icon").append('<a href="#" onclick="return false;" class="btn_page">page' + (i+1) + '</a>');
			});
			$("#cheese05_icon .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#cheese05").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#cheese05_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
});

/* 스크롤 효과 스크립트 */

({
	init: function() {
		var self = this;
		$(function() {
			self.mainVisual.init();
			self.sec_01_gallery.init();
			self.sec_03_gallery.init();
			self.sec_04_gallery.init();
			self.fixAnchor();
		});
	},
	
	
	mainVisual: {
		init: function() {
			$('#mainVisual').find('.slide:eq(0)').fadeIn(500);
			this.colorSelector();
		},
		
		
		colorSelector: function() {
			var $slide = $('#mainVisual .slide');
			var $list = $('#mainVisual .colorSelector li');
			$list.eq(0).find('a').addClass('js_current');
			$('.currentColor').html($list.eq(0).find('span').html())

			$list.each(function(index) {
				
				$(this).find('a').click(function() {
					if ( $(this).hasClass('js_current') ) return;
					$list.find('a').removeClass('js_current');
					$(this).addClass('js_current');
					$slide.fadeOut(500);
					$slide.eq(index).fadeIn(500);
					var currentColorName = $(this).find('span').html();
					$('.currentColor').html(currentColorName);
				});
			});
		}
	},
	
	
	sec_01_gallery: {
		container: '#section_01 .slideGallery',
		startFlg: false,

		
		init: function() {
			var self = this;
			$('#section_01').waypoint(function() {
				if (!self.startFlg) {
					self.opening();
					self.startFlg = true;
				}		
			});
		},

		
		opening: function() {
			var self = this;
			$(self.container).find('.slide').css({opacity: 0});
			$(self.container).find('.slide').each(function(index) {
				$(this).delay(300*index).css({display: 'block'}).animate({opacity: 1}, 300, function() {
					$(this).animate({opacity: 0}, 300);
				});
			});
			
			setTimeout(function() {
				$(self.container).stop().css({opacity: 0});
				setTimeout(function() {
					$(self.container).stop().animate({opacity: 1}, 1000);
				}, 300);
			}, 2700)
		}
	},

	sec_03_gallery: {
		init: function() {
			var self = this;
			$('#section_03').waypoint(function() {
				if (!self.startFlg) {
					self.start();
					self.startFlg = true;
				}		
			});
		},

		start: function() {
			var self = this;
			$(self.car).find('img').css({opacity: 0});
			$(self.car).stop().animate({left: '314px'}, 1200, 'easeOutQuad', function() {
				setTimeout(function() {
					if (!self.replayFlg) {
						self.restart();
						self.replayFlg = true;
					}
				}, 2000); 
			});
			setTimeout(function() {
				$(self.car).find('img').animate({opacity: 1}, 300);
			}, 900);
		},

		restart: function() {
			var self = this;
			$(self.car).find('img').animate({opacity: 0}, 400); 
			$(self.car).stop().animate({left: '-600px'}, 1000, 'easeInQuad', function() {
				$(this).css({left: '1400px'});
				setTimeout(function() {
					self.start();
				}, 1000);
			});
		}
	},

	sec_04_gallery: {
		
		init: function() {
			var self = this;
			$(self.container).find('p.img').css({opacity: 0});
			$('#section_04').waypoint(function() {
				if (!self.startFlg) {

					setTimeout(function() {
						self.light();
						self.startFlg = true;
					}, 1000);
				}		
			});
		},
		
		light: function() {
			var self = this;
			$(self.container).find('p.img_01').css({display: 'block'}).stop().animate({opacity: 1}, 50);
			setTimeout(function() {
				self.flash();
			}, 2000);
		},
		
		flash: function() {
			var self = this;
			$(self.container).find('p.img_02').css({display: 'block'}).stop().animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50)
			.delay(75).animate({opacity: 1}, 50)
			.delay(100).animate({opacity: 0}, 50);
		}
	},

	fixAnchor: function() {
		var win = window;
		var windowHeight = $(win).height();
		var fixedFlg = false;
		
		$('#fixAnchor .ac a').hover(function() {
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("_off.png" , "_on.png"));
		}, function() {
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("_on.png" , "_off.png"));
		});

		$('#fixAnchor #up a').click(function() {
			$('html,body').stop().animate({scrollTop: 0}, 800, 'easeInOutCubic');
			return false;
		});

		$(win).load(function() {
			$('#topContent .separator').waypoint(function(event, direction) {
				if (direction === 'down') {
					var index = $(this).index() + 1;
					$('#fixAnchor .ac a').mouseleave();
					$('#fixAnchor #ac'+index+' a ').mouseenter();
				} else {
					var index = $(this).index();
					$('#fixAnchor .ac a').mouseleave();
					$('#fixAnchor #ac'+index+' a ').mouseenter();
				}
			}, {
				offset: '10%'
			});

			$('#topMain').waypoint(function(event, direction) {
				$('#fixAnchor #ac1').mouseleave();
			}, {
				offset: '10%'
			});
			$('#auto-footer').waypoint(function(event, direction) {
				if (direction === 'down') {
					$('#fixAnchor #ac9').mouseleave();
				} else {
					$('#fixAnchor #ac9').mouseenter();
				}
			}, {
				offset: '10%'
			});
		});

		// df
		var fixPosition = function() {
			if ( $(win).scrollTop() >= 520 - windowHeight / 2 ) {
				if (!fixedFlg) {
					$('#fixAnchor').addClass('js_fixed');
					fixedFlg = true;
				}
			} else {
				if (fixedFlg) {
					$('#fixAnchor').removeClass('js_fixed');
					fixedFlg = false;
				}
			}
		}

		$(win).scroll(fixPosition);
		$(win).resize(function() {
			windowHeight = $(win).height();
		});
	}

}).init();