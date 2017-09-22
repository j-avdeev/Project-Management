(function ($) {
	$.fn.extend({
		customStyle: function (options) {
			return this.each(function () {
				var currentSelected = $(this).find(':selected');
				$(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">' + currentSelected.text() + '</span></span>').css({
					position: 'absolute',
					opacity: 0,
					fontSize: $(this).next().css('font-size')
				});
				var selectBoxSpan = $(this).next();
				var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) - parseInt(selectBoxSpan.css('padding-right'));
				var selectBoxSpanInner = selectBoxSpan.find(':first-child');
				selectBoxSpan.css({display: 'inline-block'});
				selectBoxSpanInner.css({width: selectBoxWidth, display: 'inline-block'});
				var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
				$(this).height(selectBoxHeight).change(function () {
					selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
				});
			});
		}
	});
})(jQuery);

var bxInit1280 = {
	auto: false,
	minSlides: 1,
	maxSlides: 4,
	slideWidth: 198,
	slideMargin: 0,
	pager: false,
	autoControls: false,
	prevSelector: '.slider__control-prev',
	nextSelector: '.slider__control-next',
	prevText: '<span class="i i_slide-left"><img src="/bitrix/templates/production/images/slide-left-grey.png" alt="" class="i_slide-nohover i_slide-left-grey"><img src="/bitrix/templates/production/images/slide-left-black.png" alt="" class="i_slide-hover i_slide-left-black"></span>',
	nextText: '<span class="i i_slide-right"><img src="/bitrix/templates/production/images/slide-right-grey.png" alt="" class="i_slide-nohover i_slide-right-grey"><img src="/bitrix/templates/production/images/slide-right-black.png" alt="" class="i_slide-hover i_slide-right-black"></span>'
};

var bxInit768 = {
	auto: false,
	minSlides: 1,
	maxSlides: 3,
	slideWidth: 198,
	slideMargin: 40,
	pager: false,
	autoControls: false,
	prevSelector: '.slider__control-prev',
	nextSelector: '.slider__control-next',
	prevText: '<span class="i i_slide-left"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>',
	nextText: '<span class="i i_slide-right"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>'
};

var bxInit320 = {
	auto: false,
	minSlides: 1,
	maxSlides: 1,
	slideWidth: 198,
	slideMargin: 0,
	pager: false,
	autoControls: false,
	prevSelector: '.slider__control-prev',
	nextSelector: '.slider__control-next',
	prevText: '<span class="i i_slide-left"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>',
	nextText: '<span class="i i_slide-right"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>',
	onSliderLoad: function (currentIndex) {
		$(".magazine-slider__mobile-price").html($('.shop-slider .slider__item').eq(2).find(".slide__price").html());
		$(".magazine-slider__mobile-button").attr('href', $('.shop-slider .slider__item').eq(2).find("a").attr('href'));
	},
	onSlideBefore: function ($slideElement, oldIndex, newIndex) {
		var curSlideIndex = $slideElement.index() + 1,
				curSlide = $('.slider__item').eq(curSlideIndex);
		// console.log($slideElement.index());
		$(".magazine-slider__mobile-price").html(curSlide.find(".slide__price").text());
		$(".magazine-slider__mobile-button").attr('href', curSlide.find("a").attr('href'));
	}
};

var bxNewsInit320 = {
	auto: false,
	minSlides: 1,
	maxSlides: 1,
	slideWidth: 280,
	slideMargin: 0,
	pager: false,
	autoControls: false,
	prevSelector: '.slider__control-prev',
	nextSelector: '.slider__control-next',
	prevText: '<span class="i i_slide-left"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>',
	nextText: '<span class="i i_slide-right"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>'
};

var bxInfographicsInit768 = {
	auto: false,
	onSlideBefore: function ($slideElement, oldIndex, newIndex) {
		$("h3#event_photo_title").text($slideElement.find("img").data("description"));
		$("p#event_photo_author").text($slideElement.find("img").data("author"));
	},
	minSlides: 1,
	maxSlides: 1,
	// slideWidth: 760,
	slideMargin: 0,
	pager: false,
	controls: true,
	autoControls: false,
	adaptiveHeight: true,
	prevSelector: '.infographics-slider__controls .slider__control-prev',
	nextSelector: '.infographics-slider__controls .slider__control-next',
	prevText: '<span class="i i_slide-left"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>',
	nextText: '<span class="i i_slide-right"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>'
};

var bxInfographicsInit320 = {
	auto: false,
	minSlides: 1,
	maxSlides: 1,
	// slideWidth: 300,
	slideMargin: 0,
	pager: false,
	autoControls: false,
	prevSelector: '.infographics-slider__controls .slider__control-prev',
	nextSelector: '.infographics-slider__controls .slider__control-next',
	prevText: '<span class="i i_slide-left"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>',
	nextText: '<span class="i i_slide-right"><img src="/bitrix/templates/production/images/slide-top.png" alt=""></span>'
};

var infographixSliderSelector = '.infographics-slider__slider';


//var resizeVideos = function(){
//  // resize youtube videos
//  var videoElArr = $(".article-tile__img-container iframe");
//  for(var i = 0; i < videoElArr.length; i++){
//
//    var _el = videoElArr[i];
//    var _elParent = _el.closest(".article-tile__img-container");
//
//
//    $(_el).attr('width', $(_elParent).width());
//    $(_el).attr('height', $(_elParent).width() * 9 / 17);
//    $(_el).attr('style', '');
// }
//};

var showSubmenu = function (menuId) {
	$('[data-show=' + menuId + ']').css('display', 'block');

	var submenuIdArr = $('.submenu[data-show]');
	for (var _j = 0; _j < submenuIdArr.length; _j++) {
		var _tempval = $(submenuIdArr[_j]).data('show');
		if (_tempval != menuId) {
			$('[data-show=' + _tempval + ']').css('display', 'none');
		}
	}
};

$(document).ready(function () {
	//resizeVideos();
	var shopSlider;
	var newsSlider;
	var infographicsSlider;

	if ($('.fancybox').length) {
		$('.fancybox').fancybox();
	}

	var formBuySubscribeIsRegisteredEl = $('[name="formBuySubscribeIsRegistered"]');
	if (formBuySubscribeIsRegisteredEl) {
		var formBuySubscribeIsRegistered = formBuySubscribeIsRegisteredEl.prop("checked");

		if (formBuySubscribeIsRegistered) {
			$('.form-buy-subscribe-registration').css({display: 'none'});
			$('.form-buy-subscribe-login').css({display: 'block'});
		}
		else {
			$('.form-buy-subscribe-registration').css({display: 'block'});
			$('.form-buy-subscribe-login').css({display: 'none'});
		}

		formBuySubscribeIsRegisteredEl.change(function () {
			formBuySubscribeIsRegistered = formBuySubscribeIsRegisteredEl.prop("checked");

			if (formBuySubscribeIsRegistered) {
				$('.form-buy-subscribe-registration').css({display: 'none'});
				$('.form-buy-subscribe-login').css({display: 'block'});
			}
			else {
				$('.form-buy-subscribe-registration').css({display: 'block'});
				$('.form-buy-subscribe-login').css({display: 'none'});
			}
		});
	}

	if ($('.new-slider').length) {
		newsSlider = $('.new-slider').bxSlider(bxNewsInit320);
	}

	if ($('.shop-slider').length || $(infographixSliderSelector).length) {
		if ($(window).width() > 1279) {
			shopSlider = $('.shop-slider').bxSlider(bxInit1280);
			infographicsSlider = $(infographixSliderSelector).bxSlider(bxInfographicsInit768);
		}
		else if ($(window).width() > 767) {
			shopSlider = $('.shop-slider').bxSlider(bxInit768);
			infographicsSlider = $(infographixSliderSelector).bxSlider(bxInfographicsInit768);
		}
		else {
			shopSlider = $('.shop-slider').bxSlider(bxInit320);
			infographicsSlider = $(infographixSliderSelector).bxSlider(bxInfographicsInit320);
		}
	}

	$(window).resize(function () {
		setTimeout(function () {

			if (shopSlider && shopSlider.destroySlider) {

				if ($(window).width() > 1279) {
					shopSlider.destroySlider();
					shopSlider.bxSlider(bxInit1280);
				}
				else if ($(window).width() > 767) {
					shopSlider.destroySlider();
					shopSlider.bxSlider(bxInit768);
				}
				else {
					shopSlider.destroySlider();
					shopSlider.bxSlider(bxInit320);
				}
			}

			if (infographicsSlider && infographicsSlider.destroySlider) {

				if ($(window).width() > 1279) {
					infographicsSlider.destroySlider();
					infographicsSlider.bxSlider(bxInfographicsInit768);
				}
				else if ($(window).width() > 767) {
					infographicsSlider.destroySlider();
					infographicsSlider.bxSlider(bxInfographicsInit768);
				}
				else {
					infographicsSlider.destroySlider();
					infographicsSlider.bxSlider(bxInfographicsInit320);
				}
			}

			//resizeVideos();
		}, 1000);
	});

	var submenuIdArr = $('[data-hover]');
	for (var i = 0; i < submenuIdArr.length; i++) {
		$(submenuIdArr[i]).click(function () {
			var _val = $(this).data('hover');
			// console.log(_val);
			if ($(this).closest('.page-h-menu-line').find('div[data-show=' + _val + ']').is(':hidden') == true) {
				showSubmenu(_val);
				return false;
			}
		});
	}

	// эта штука не работает в фф =((

	var submenuBlock = $('[data-hover]').closest('ul').first();
	$(submenuBlock).hover(
			function () {
			},
			function () {
				if ($('[data-show]:visible').length < 1) {
					$('[data-show]').css('display', 'none');
				}
			}
	);

	var submenuArr = $('[data-show]');
	for (var i = 0; i < submenuArr.length; i++) {
		$(submenuArr[i]).hover(
				function () {
				},
				function () {
					$(this).css('display', 'none');
				}
		);
	}

	///////// Вертикальное меню -begin ///////////
	$('.vertical-menu__close').click(function () {
		$('.vertical-menu').removeClass('vertical-menu_active');
		$('.v-menu').removeClass('v-menu_active');
	});


	//$('.vertical-menu').find('*').click(function(event){
	//event.preventDefault();
	//event.stopPropagation();
	//});

	//$(window).on('click', function (e) {
	//  if (e.target.id == "parent") {
	//      alert("parent clicked");
	//  }
	//});

	$('.page-menu_id-menu').click(function (event) {
		event.preventDefault();
		CloseAllVerticalMenu();
		$('.vertical-menu').addClass('vertical-menu_active');
		$('.v-menu_id-menu').addClass('v-menu_active');
		$('body').addClass('vertical-menu-opened');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}


		event.stopPropagation();
	});
	///////// Вертикальное меню - end ///////////

	///////// Вертикальный логин -begin ///////////
	$('.page-menu_id-profile').click(function (event) {
		event.preventDefault();
		CloseAllVerticalMenu();
		$('.vertical-menu').addClass('vertical-menu_active');
		$('.v-menu_id-profile').addClass('v-menu_active');
		$('body').addClass('vertical-menu-opened');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}

		event.stopPropagation();
	});
	///////// Вертикальный логин - end ///////////

	///////// Вертикальный закладки -begin ///////////
	$('.page-menu_id-bm').click(function (event) {
		event.preventDefault();
		CloseAllVerticalMenu();
		$('.vertical-menu').addClass('vertical-menu_active');
		$('.v-menu_id-bm').addClass('v-menu_active');
		$('body').addClass('vertical-menu-opened');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}

		event.stopPropagation();
	});
	///////// Вертикальный закладки - end ///////////

	///////// Вертикальный закладки -begin ///////////
	$('.page-menu__item--share').click(function (event) {
		event.preventDefault();
		CloseAllVerticalMenu();
		$('.vertical-menu').addClass('vertical-menu_active');
		$('.v-menu_id-sharing').addClass('v-menu_active');
		$('body').addClass('vertical-menu-opened');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}

		event.stopPropagation();
	});
	///////// Вертикальный закладки - end ///////////

	/*
	 ///////// Вертикальный поиск -begin ///////////
	 $('.main-search__close').click(function(){
	 $('.main-search').removeClass('main-search_active');
	 });
	 $('.page-menu_id-search').click(function(event){
	 event.preventDefault();
	 CloseAllVerticalMenu();
	 $('.main-search').addClass('main-search_active');
	 $('body').addClass('vertical-menu-opened');

	 if ( $('.main-search__result').length ) {
	 if (window.matchMedia("(min-width: 1280px)").matches) {
	 $('.main-search__result').customScrollbar({
	 vScroll: true,
	 skin: "default-skin"
	 });
	 } else {
	 $('.main-search__result').customScrollbar('remove');
	 }
	 }
	 event.stopPropagation();
	 });
	 ///////// Вертикальный поиск - end ///////////
	 */

	///////// Вертикальный поиск -begin ///////////

	// Кастомный скролл
	if ($('.scrollable_screen')) {
		$('.scrollable_screen').height($(window).height());
	}

	$('.main-search__close').click(function () {
		$('.main-search').removeClass('main-search_active');
		$('.main-search').removeClass('main-search_full');
		$('.main-search__show-all').removeClass('nodisplay');
		$('#search-query').val('');
		$('.main-search__result li.list__item').remove();
		$('.scrollable_screen').customScroll('destroy');
		$('.main-search__result').hide();
		$(".main-search__result .btn_red-light").hide();
	});
	$('.page-menu_id-search').click(function (event) {
		event.preventDefault();
		CloseAllVerticalMenu();
		$('.main-search').addClass('main-search_active');
		$('body').addClass('vertical-menu-opened');
	});
	///////// Вертикальный поиск - end ///////////


	// Main search - begin //

	$('.main-search__show-all').on('click', function (event) {
		event.preventDefault();
		$('.main-search').addClass('main-search_full');
		$('.main-search__show-all').addClass('nodisplay');
		$('.scrollable_screen').customScroll('destroy');
	});

	// Main search - end //


	// Меню входа
	$('.open-login').click(function (event) {
		event.preventDefault();
		$('.v-menu_id-register').removeClass('v-menu_active');
		$('.v-menu_id-profile').addClass('v-menu_active');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}
	});

	$('.open-register').click(function (event) {
		event.preventDefault();
		$('.v-menu_id-profile').removeClass('v-menu_active');
		$('.v-menu_id-register').addClass('v-menu_active');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}
	});

	// Кастомный options
	$(function () {
		if ($('select.styled').length) {
			$('select.styled').customStyle();
		}
	});

	//Кастомный селект
	// $(function() {
	//   if ( $('select.styled').length ) {
	//     $('select.styled').selectize();
	//   }
	// });
});

var CloseAllVerticalMenu = function () {
	$('.v-menu').removeClass('v-menu_active');
	$('.main-search').removeClass('main-search_active');
	$('.vertical-menu').removeClass('vertical-menu_active');
	$('body').removeClass('vertical-menu-opened');
};

$(function () {
	$('.js-open-side-menu').on('click', function (e) {
		e.preventDefault();
		$('.side-menu__wrapper').addClass('side-menu__wrapper--active');
	});

	$('.js-close-side-menu').on('click', function (e) {
		e.preventDefault();
		$('.side-menu__wrapper').removeClass('side-menu__wrapper--active');
	});

	$('.js-side-menu-open-content').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.side-menu__list-item').find('.side-menu__list-item-content').toggleClass('side-menu__list-item-content--opened');

		if ($('.v-menu__container').length) {
			if (window.matchMedia("(min-width: 1280px)").matches) {
				$('.v-menu__container').customScrollbar({
					vScroll: true,
					skin: "default-skin"
				});
			} else {
				$('.v-menu__container').customScrollbar('remove');
			}
		}
	});
});

$(function () {
	$('.js-side-menu-open-content').click(function () {
		$('.v-menu__container').customScrollbar('remove');
		$('.v-menu__container').customScrollbar();
	});
});

//Search
$(function () {
	$(".main-search__result").hide();
	$(".main-search__result .main-search__show-all").hide();
	$(".main-search__result .scrollable__track-x").hide();
	$(".main-search__result .scrollable__track-y").hide();
	$(".main-search__result .scrollable__bar-y").hide();
	$("#search-form").submit(function () {
		$(".main-search__result").hide();
		$(".main-search__result .main-search__show-all").hide();
		$(".main-search__result .scrollable__track-x").hide();
		$(".main-search__result .scrollable__track-y").hide();
		$(".main-search__result .scrollable__bar-y").hide();
		if (!$("#search-query").val()) return false;
		$("#search-form").css("opacity", "0.5");
		$.ajax({
			type: "GET",
			url: "/ajax/search.php",
			data: {q: $("#search-query").val(), count: 3},
			success: function (data) {
				$(".main-search__result .list").html(data);
				$("#search-form").css("opacity", "1");
				$(".main-search__result").show();
				var isFind = data.search("Результатов не найдено");
				console.log(isFind);
				if (isFind < 0) {
					// $('.scrollable_screen').height($(window).height());
					$('.scrollable_screen').customScroll({prefix: 'scrollable__', horizontal: false});
					$(".main-search__result .btn_red-light").show();
					$(".main-search__result .scrollable__track-x").show();
					$(".main-search__result .scrollable__track-y").show();
					$(".main-search__result .scrollable__bar-y").show();
				}
			}
		});
		return false;
	});

	$('.main-search__show-all').on('click', function (event) {
		event.preventDefault();
		$(".main-search__result .btn_red-light").css("opacity", "0.5");
		$.ajax({
			type: "GET",
			url: "/ajax/search.php",
			data: {q: $("#search-query").val(), count: 100},
			success: function (data) {
				$(window).scrollTop(0);
				$(".main-search__result .btn_red-light").hide();
				$('.scrollable_screen').customScroll('destroy');
				$(".main-search__result .scrollable__track-x").hide();
				$(".main-search__result .scrollable__track-y").hide();
				$('.main-search').addClass('main-search_full');
				$(".main-search__result .btn_red-light").css("opacity", "1");
				$(".main-search__result").show();
				$(".main-search__result .list").html(data);
			}
		});
	});
});

// Fixing progress bar

$(function () {
	var $mainArticle = $('.main-article'),
			$main = $('main'),
			$progressBarActive = $('.progress-bar__active'),
			progressWidth;


	if ($('.scroll-progress-bar--desktop').length || $('.scroll-progress-bar--mobile').length) {
		var scrollTopHeight;//высота банера перед меню
		$(window).load(function () {
			if (window.matchMedia('(max-width: 1269px)').matches) {
				scrollTopHeight = $('.header').height() + ( $('.page-h-menu-line').height() / 2 );

				$(window).scroll(function () {
					if (window.matchMedia('(max-width: 1269px)').matches) {
						if ($(this).scrollTop() >= scrollTopHeight) {
							$('.page-menu_new').addClass('page-menu_new--fixed');
							$('.scroll-progress-bar--mobile').addClass('mobile-progress-bar--fixed');
						} else {
							$('.page-menu_new').removeClass('page-menu_new--fixed');
							$('.scroll-progress-bar--mobile').removeClass('mobile-progress-bar--fixed');
						}
					} else {
						$('.page-menu_new').removeClass('page-menu_new--fixed');
						$('.scroll-progress-bar--mobile').removeClass('mobile-progress-bar--fixed');
					}
				});
			} else {
				//для десктопа
				var menuHeight = $('.page-h-menu-line').height(); //высота меню
				var mainTop = $main.position().top;
				var tempScrollTop, currentScrollTop = 0;

				$(window).scroll(function () {
					currentScrollTop = $(window).scrollTop();

					if (tempScrollTop < currentScrollTop) {
						//scrolling down
						if ($(this).scrollTop() >= (mainTop + menuHeight)) {
							//фиксируем меню, когда скрол достает
							$('.page-h-menu-line').removeClass('page-h-menu-line--fixed');
							$('.scroll-progress-bar--desktop').addClass('desktop-progress-bar--fixed').css('top', '0');
							$('.main').css('padding-top', '0');
						}
					} else if (tempScrollTop > currentScrollTop) {
						//scrolling up
						if ($(this).scrollTop() >= (mainTop + menuHeight)) {
							//фиксируем меню, когда скрол достает
							$('.page-h-menu-line').addClass('page-h-menu-line--fixed');
							$('.scroll-progress-bar--desktop').addClass('desktop-progress-bar--fixed').css('top', '167px');
							$('.main').css('padding-top', '205px');
						} else if($(this).scrollTop() <= mainTop) {
							//отпускаем меню 
							$('.page-h-menu-line').removeClass('page-h-menu-line--fixed');
							$('.scroll-progress-bar--desktop').removeClass('desktop-progress-bar--fixed').css('top', '0');
							$('.main').css('padding-top', '0');
						}
					}
					tempScrollTop = currentScrollTop;
				});
			}
		});
	}

	if ( $('.page-menu_new').length ) {
		$(window).resize(function () {
			if (window.matchMedia('(min-width: 1270px)').matches) {
				$('.page-menu_new').removeClass('page-menu_new--fixed');
				$('.scroll-progress-bar--mobile').removeClass('mobile-progress-bar--fixed');
			} else if ( window.matchMedia('(max-width: 1269px)').matches ) {
				if ( $(window).scrollTop() >= 100 ) {
					$('.page-menu_new').addClass('page-menu_new--fixed');
					$('.scroll-progress-bar--mobile').addClass('mobile-progress-bar--fixed');
				}
			}
		});

		$(window).scroll(function () {
			if (window.matchMedia('(min-width: 1270px)').matches) {
				$('.page-menu_new').removeClass('page-menu_new--fixed');
			} else if ( window.matchMedia('(max-width: 1269px)').matches ) {
				$('.page-menu_new').addClass('page-menu_new--fixed');
			}
		});
	}

	//изменение прогресса чтения при скролле
	if ($mainArticle.length > 0) {
		$(window).scroll(function () {
			var mainTop = $main.position().top;
			var contentBottom = $mainArticle.height() + mainTop;
			var topWindow = $(window).scrollTop();

			if (topWindow >= mainTop) {
				progressWidth = Math.floor(((topWindow - mainTop) / (contentBottom - mainTop)) * 100);
				$progressBarActive.width(progressWidth + '%');

				if (progressWidth >= 100) {
					$progressBarActive.width('100%');
					$('.i_briefly').addClass('i_briefly-active');
				} else {
					$('.i_briefly').removeClass('i_briefly-active');
				}
			} else {
				$progressBarActive.width('0%');
			}
		});
	}
});

$(function () {
	if (('#briefly_button').length) {
		$('#briefly_button a').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: ( $('.briefly-block').offset().top - ( $('.page-h-menu-line').outerHeight() + 100 ) )
			}, 400);
			// console.log($('.briefly-block').offset().top);
			// console.log($('.page-h-menu-line').height());
			return false;
		});
	}
});


// Stop fixing left menu when footer appeared

$(function () {
	if (window.matchMedia('(max-height: 920px) and (min-width: 1280px)').matches) {
		if ($(window).resize()) {
			return false;
		} else {
			leftMenuNegativeScroll();
		}

		$(window).on('scroll resize', function () {
			if ($(window).resize()) {
				return false;
			} else {
				leftMenuNegativeScroll();
			}
		});
	}

	function leftMenuNegativeScroll() {
		var leftMenu = $('.page__menu'),
				stopLine = $('.page__footer').offset().top,
				menuTopPos = leftMenu.offset().top
		scrollTop = $(window).scrollTop(),
				viewBottomVal = scrollTop + $(window).height();

		if (stopLine <= viewBottomVal) {
			leftMenu.addClass('page__menu--unfixed');
			leftMenu.css('top', stopLine - scrollTop - ($(window).height() + 1));
		} else {
			leftMenu.removeClass('page__menu--unfixed');
			leftMenu.css('top', 0);
		}
	}
});

$(function () {
	$('.page-menu__link').on('click', function () {
		$('.submenu').hide();
	});

	$(window).load(function () {
		var videoIframe = $('.article-col').find('iframe');
		videoIframe.each(function () {
			$(this).closest('p').addClass('main-article__video');
		});
	});
});

// Events sharer
$(function () {
	$(window).load(function () {
		var popupWidth = 650,
			popupHeight = 450,
			popupLeftPos = $(window).width() / 2 - 225,
			popupTopPos = $(window).height() / 2 - 325,
			sharePageUrl = encodeURIComponent(document.location.href),
			shareUrlVK = 'https://vk.com/share.php?url=' + sharePageUrl,
			shareUrlFB = 'https://www.facebook.com/dialog/feed?link=' + sharePageUrl,
			shareUrlTW = 'https://twitter.com/intent/tweet?url=' + sharePageUrl;

		$('.photo-report .infographics-tile__share-item--vk a').click(function(e){
			var shareTitle = $('#event_photo_title').text(),
				shareDesc = $('.photo-report .js-active-slide img').data('description'),
				shareImg = $('.photo-report .js-active-slide img').attr('src');
			e.preventDefault();
			// $(this).closest('.infographics-tile__share').find('.social-likes__widget_vkontakte').trigger('click');
			window.open(shareUrlVK + '&image=' + window.location.protocol + '//' + window.location.hostname + shareImg + '&title=' + shareTitle + '&description=' + shareDesc, '_blank', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeftPos + ',top=' + popupTopPos);
		});
		$('.photo-report .infographics-tile__share-item--tw a').click(function(e){
			var shareTitle = $('#event_photo_title').text(),
				shareDesc = $('.photo-report .js-active-slide img').data('description'),
				shareImg = $('.photo-report .js-active-slide img').attr('src');
			e.preventDefault();
			// $(this).closest('.infographics-tile__share').find('.social-likes__widget_twitter').trigger('click');
			window.open(shareUrlTW + '&via=HBR_Russia&text=' + shareDesc + '&original_referer=' + sharePageUrl, '_blank', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeftPos + ',top=' + popupTopPos);
		});
		$('.photo-report .infographics-tile__share-item--fb a').click(function(e){
			var shareTitle = $('#event_photo_title').text(),
				shareDesc = $('.photo-report .js-active-slide img').data('description'),
				shareImg = $('.photo-report .js-active-slide img').attr('src');
			e.preventDefault();
			// $(this).closest('.infographics-tile__share').find('.social-likes__widget_facebook').trigger('click');
			console.log(shareImg);
			window.open(shareUrlFB + '&redirect_uri=' + sharePageUrl + 'share_redirect.html' + '&picture=' + window.location.protocol + '//' + window.location.hostname + '/' + shareImg + '&app_id=1770382586539809' + '&title=' + shareTitle + '&description=' + shareDesc + '&display=popup', '_blank', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeftPos + ',top=' + popupTopPos);
		});
	});

	$('.video-report .infographics-tile__share-item--vk a').click(function(e){
		e.preventDefault();
		$(this).closest('.infographics-tile__share').find('.social-likes__widget_vkontakte').trigger('click');
	});
	$('.video-report .infographics-tile__share-item--tw a').click(function(e){
		e.preventDefault();
		$(this).closest('.infographics-tile__share').find('.social-likes__widget_twitter').trigger('click');
	});
	$('.video-report .infographics-tile__share-item--fb a').click(function(e){
		e.preventDefault();
		$(this).closest('.infographics-tile__share').find('.social-likes__widget_facebook').trigger('click');
	});
});

