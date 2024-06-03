$(function() {
	
	var progressPath = document.querySelector('.progress-wrap a path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);	
	var offset = 50;
	var duration = 550;
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > offset) {
			$('.progress-wrap').addClass('active');
		} else {
			$('.progress-wrap').removeClass('active');
		}
	});				
	$('.progress-wrap').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})

	$('.js-used').blur(function() {
        var $this = $(this);
       if ($this.val())
           $this.addClass('used');
       else
       $this.removeClass('used');
   	});

	$('.js-expo-top_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.53674e-07L8 16L-2.48589e-07 7.93477L8 9.53674e-07Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.79753e-06 16L0 0L8 8.06523L-2.79753e-06 16Z"/></svg></span></a>',
		appendArrows: '.expo-top_arr',
	});

	$('.js-events_slider').slick({
		slidesToShow: 4,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.53674e-07L8 16L-2.48589e-07 7.93477L8 9.53674e-07Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.79753e-06 16L0 0L8 8.06523L-2.79753e-06 16Z"/></svg></span></a>',

		responsive: [

			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3.1,
				}
			},

			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2.1,
				}
			},

			{
				breakpoint: 680,
				settings: {
					arrows: false,
					slidesToShow: 2.1,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1.1,
					arrows: false,
				}
			}

		]

	});

	$('.js-block_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.53674e-07L8 16L-2.48589e-07 7.93477L8 9.53674e-07Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.79753e-06 16L0 0L8 8.06523L-2.79753e-06 16Z"/></svg></span></a>',

		responsive: [

			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}

		]

	});

	$('.js-economy_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.53674e-07L8 16L-2.48589e-07 7.93477L8 9.53674e-07Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.79753e-06 16L0 0L8 8.06523L-2.79753e-06 16Z"/></svg></span></a>',

		responsive: [

			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}

		]

	});

	$('.js-invest_slider').slick({
		slidesToShow: 1,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.53674e-07L8 16L-2.48589e-07 7.93477L8 9.53674e-07Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.79753e-06 16L0 0L8 8.06523L-2.79753e-06 16Z"/></svg></span></a>',

		responsive: [

			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}

		]

	});


	$('.js-poster_slider').slick({
		slidesToShow: 4,
		rows: false,
		dots: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.53674e-07L8 16L-2.48589e-07 7.93477L8 9.53674e-07Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.79753e-06 16L0 0L8 8.06523L-2.79753e-06 16Z"/></svg></span></a>',

		responsive: [

			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3.1,
				}
			},

			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2.1,
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.1,
					arrows: false,
				}
			},

			{
				breakpoint: 576, 
				settings: {
					arrows: false, 
					slidesToShow: 1.1,
				}
			}

		]

	});

	$('.js-industry-news_slider').slick({
		slidesToShow: 2,
		arrows: false,
		rows: false,
		dots: false,
		infinite: false,

		responsive: [

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1.1,
				}
			}

		]

	});

	$(window).on('load resize', function() {

		if($(window).width()  < 680) {

			$('.js-solution_slider:not(.slick-initialized)').slick({
				slidesToShow: 1.1,
				arrows: false,
				rows: false,
				dots: true,
				infinite: false,
				slidesToScroll: 1,
			});
	
		} else {
			$(".js-solution_slider.slick-initialized").slick("unslick");
		}

	});	

	$('.select-ul').on('click', function() {
		$(this).parent().toggleClass('active');
	});



	$(".select-box li").on('click', function(){
		var currentele = $(this).html();
		// var p = $(this).closest();
		$(".select-ul li").html(currentele);
		// p.parents(".select").removeClass("active");
		$(this).parent().parent().removeClass('active');
	});

	$('.favorite-link').on('click', function(e) {

		e.preventDefault();

		$('.popup').addClass('active');

	});

	$('.popup-close, .popup-overflow').on('click', function(e) {

		e.preventDefault();

		$('.popup').removeClass('active');

	});

	$('.lang-link').on('click', function(e) {

		e.preventDefault();

        $(this).toggleClass('active');

        $('.lang-list').toggleClass('active')

    });

    $('.lang-list li').on('click', function() {
        var t = $(this).text();
        $('.lang-list').not($(this)).removeClass('active');
        $('.lang-link').removeClass('active');
        // $(this).addClass('active');
        $('.lang-link').text(t)
    });

	$('.search-link').on('click', function(e) {

		e.preventDefault();

		$('.header-search').toggleClass('open');

	});

	$('.header-burger').on('click', function(e) {

		e.preventDefault();

		$('.m-menu').addClass('active');

	});

	$('.m-menu-close, .m-menu-overflow').on('click', function(e) {

		e.preventDefault();

		$('.m-menu').removeClass('active');

	});

});
