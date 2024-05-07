$(function() {

	$('.js-def-opt').each(function() {

		$('.js-def-opt').on('click', function() {
			$(this).parent().toggleClass('active');
		});

	});

	$('.select_ul li').each(function() {

		$(".select_ul li").on('click', function(){
			var currentele = $(this).html();
			$(".js-def-opt li").html(currentele);
			$(this).parents(".select_wrap").removeClass("active");
		});

	});

	$('.select-fix_top a.close').on('click', function(e) {

		e.preventDefault();
		$(".select_wrap").removeClass("active");
	});
	  
	$(window).on('load resize', function() {

		if($(window).width()  < 576) {

			$('.js-form-pr_slider:not(.slick-initialized)').slick({
				slidesToShow: 1.1,
				arrows: false,
				rows: false,
				dots: true,
				infinite: false,
				slidesToScroll: 1,

				responsive: [

					{
						breakpoint: 375,
						settings: {
							slidesToShow: 1,
							dots: true,
							arrows: false,
						}
					}

				]

			});
	
		} else {
			$(".js-form-pr_slider.slick-initialized").slick("unslick");
		}

	});
	

	$(window).on('load resize', function() {

		if($(window).width()  < 992) {

			$('.js-right-cart_slider:not(.slick-initialized)').slick({
				slidesToShow: 2.2,
				arrows: false,
				rows: false,
				dots: true,
				infinite: false,
				slidesToScroll: 1,

				responsive: [

					{
						breakpoint: 680,
						settings: {
							slidesToShow: 1.3,
							dots: true,
							arrows: false,
						}
					},

					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1.1,
							dots: true,
							arrows: false,
						}
					},

					{
						breakpoint: 375,
						settings: {
							slidesToShow: 1,
							dots: true,
							arrows: false,
						}
					}

				]

			});

			$('.js-cart-slider:not(.slick-initialized)').slick({
				slidesToShow: 2.2,
				arrows: false,
				rows: false,
				dots: true,
				infinite: false,
				slidesToScroll: 1,

				responsive: [

					{
						breakpoint: 680,
						settings: {
							slidesToShow: 1.3,
							dots: true,
							arrows: false,
						}
					},

					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1.1,
							dots: true,
							arrows: false,
						}
					},

					{
						breakpoint: 375,
						settings: {
							slidesToShow: 1,
							dots: true,
							arrows: false,
						}
					}

				]

			});
	
		} else {
			$(".js-right-cart_slider.slick-initialized, .js-cart-slider.slick-initialized").slick("unslick");
		}

	});	
	
	$('.js-credit_ui').slider({
		animate: "slow",
		range: 'min',
		step: 1,
		min: 1000000,
		max: 6000000,
		slide: function(event, ui) {
			var h = ui.handle;
			var p = h.closest('.ui__round');
			var w = $('.ui-slider-range', p).width();
			var v = ui.value;
			var format = String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$('.sldRange',p).width(w);
			$('.js-credit__inp').find('span', p).width(w);
        	$('.js-credit__inp').find('input').val(format + ' руб');

        },

	});

	$('.js-str_ui').slider({
		animate: "slow",
		range: 'min',
		step: 1,
		min: 1000000,
		max: 20000000,
		slide: function(event, ui) {
			var h = ui.handle;
			var p = h.closest('.ui__round');
			var w = $('.ui-slider-range', p).width();
			var v = ui.value;
			var format = String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$('.sldRange',p).width(w);
			$('.js-str__inp').find('span', p).width(w);
        	$('.js-str__inp').find('input').val(format + ' руб');

        },

	});

	$('.js-age_ui').slider({
		animate: "slow",
		range: 'min',
		step: 1,
		min: 18,
		max: 60,
		slide: function(event, ui) {
			var h = ui.handle;
			var p = h.closest('.ui__round');
			var w = $('.ui-slider-range', p).width();
			var v = ui.value;
			var format = String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$('.sldRange',p).width(w);
			$('.js-age__inp').find('span', p).width(w);
        	$('.js-age__inp').find('input').val(format);

        },

	});

	$('.js-time_ui').slider({
		animate: "slow",
		range: 'min',
		step: 1,
		min: 1,
		max: 30,
		slide: function(event, ui) {
			var h = ui.handle;
			var p = h.closest('.ui__round');
			var w = $('.ui-slider-range', p).width();
			var v = ui.value;
			var format = String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$('.sldRange',p).width(w);
			$('.js-time__inp').find('span', p).width(w);
        	$('.js-time__inp').find('input').val(format);

        },

	});

	$('.js-extra-credit_ui').slider({
		animate: "slow",
		range: 'min',
		step: 1,
		min: 500000,
		max: 5000000,
		slide: function(event, ui) {
			var h = ui.handle;
			var p = h.closest('.ui__round');
			var w = $('.ui-slider-range', p).width();
			var v = ui.value;
			var format = String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$('.sldRange',p).width(w);
			$('.js-extra-credit__inp').find('span', p).width(w);
        	$('.js-extra-credit__inp').find('input').val(format);

        },

	});

	$('.js-sum-credit_ui').slider({
		animate: "slow",
		range: 'min',
		step: 1,
		min: 1,
		max: 7,
		slide: function(event, ui) {
			var h = ui.handle;
			var p = h.closest('.ui__round');
			var w = $('.ui-slider-range', p).width();
			var v = ui.value;
			var format = String(v).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$('.sldRange',p).width(w);
			$('.js-sum-credit__inp').find('span', p).width(w);
        	$('.js-sum-credit__inp').find('input').val(format);

        },

	});

	$('.js-menu').on('click', function(e) {

		e.preventDefault();

		$('.left').addClass('active');

	});

	$('.js-menu-close, .left-overflow').on('click', function(e) {

		e.preventDefault();

		$('.left').removeClass('active');

	});
	

});

