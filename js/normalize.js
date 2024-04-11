$(function() {
	

	$('.js-ban').each(function() {

		var banImg = $(this).find('img').attr('src');

		$(this).attr('style', 'background-image: url(../'+ banImg +')');

	});

	
	$('.js-more-article_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		rows: false,
		infinite: false,
		prevArrow: '<a href="#" class="arrow arrow-prev"><span><svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.878544 5.77316C0.87876 5.77337 0.878941 5.77363 0.879193 5.77384L4.63997 9.51649C4.92172 9.79686 5.37742 9.79582 5.65787 9.51404C5.93828 9.2323 5.9372 8.7766 5.65545 8.49619L3.13046 5.98343L18.373 5.98343C18.7705 5.98343 19.0928 5.6612 19.0928 5.26369C19.0928 4.86618 18.7705 4.54395 18.373 4.54395L3.1305 4.54395L5.65542 2.0312C5.93716 1.75079 5.93824 1.29508 5.65783 1.01334C5.37738 0.731527 4.92165 0.730557 4.63994 1.01089L0.879157 4.75354C0.878939 4.75376 0.87876 4.75401 0.878508 4.75422C0.596621 5.03557 0.597521 5.49275 0.878544 5.77316Z"/></svg></span></a>',
		nextArrow: '<a href="#" class="arrow arrow-next"><span><svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5243 4.46659C18.5241 4.46637 18.5239 4.46612 18.5236 4.4659L14.7629 0.723258C14.4811 0.442883 14.0254 0.443927 13.745 0.725705C13.4646 1.00745 13.4656 1.46315 13.7474 1.74356L16.2724 4.25631H1.0298C0.632286 4.25631 0.310059 4.57854 0.310059 4.97605C0.310059 5.37357 0.632286 5.69579 1.0298 5.69579H16.2723L13.7474 8.20855C13.4657 8.48896 13.4646 8.94466 13.745 9.2264C14.0254 9.50822 14.4812 9.50919 14.7629 9.22885L18.5237 5.48621C18.5239 5.48599 18.5241 5.48574 18.5243 5.48552C18.8062 5.20418 18.8053 4.747 18.5243 4.46659Z"/></svg></span></a>',
		appendArrows: '.js-more-article_arr',

		responsive: [

			{
				breakpoint: 1200, 
				settings: {
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 992,
				settings: {
					dots: true,
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2.3,
					dots: true,
				}
			},

			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
					dots: true,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
			}

		]

	});
	
	$('.js-last-public_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		rows: false,
		infinite: false,
		prevArrow: '<a href="#" class="arrow arrow-prev"><span><svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.878544 5.77316C0.87876 5.77337 0.878941 5.77363 0.879193 5.77384L4.63997 9.51649C4.92172 9.79686 5.37742 9.79582 5.65787 9.51404C5.93828 9.2323 5.9372 8.7766 5.65545 8.49619L3.13046 5.98343L18.373 5.98343C18.7705 5.98343 19.0928 5.6612 19.0928 5.26369C19.0928 4.86618 18.7705 4.54395 18.373 4.54395L3.1305 4.54395L5.65542 2.0312C5.93716 1.75079 5.93824 1.29508 5.65783 1.01334C5.37738 0.731527 4.92165 0.730557 4.63994 1.01089L0.879157 4.75354C0.878939 4.75376 0.87876 4.75401 0.878508 4.75422C0.596621 5.03557 0.597521 5.49275 0.878544 5.77316Z"/></svg></span></a>',
		nextArrow: '<a href="#" class="arrow arrow-next"><span><svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5243 4.46659C18.5241 4.46637 18.5239 4.46612 18.5236 4.4659L14.7629 0.723258C14.4811 0.442883 14.0254 0.443927 13.745 0.725705C13.4646 1.00745 13.4656 1.46315 13.7474 1.74356L16.2724 4.25631H1.0298C0.632286 4.25631 0.310059 4.57854 0.310059 4.97605C0.310059 5.37357 0.632286 5.69579 1.0298 5.69579H16.2723L13.7474 8.20855C13.4657 8.48896 13.4646 8.94466 13.745 9.2264C14.0254 9.50822 14.4812 9.50919 14.7629 9.22885L18.5237 5.48621C18.5239 5.48599 18.5241 5.48574 18.5243 5.48552C18.8062 5.20418 18.8053 4.747 18.5243 4.46659Z"/></svg></span></a>',
		appendArrows: '.js-last-public_arr',

		responsive: [

			{
				breakpoint: 1200, 
				settings: {
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 992,
				settings: {
					dots: true,
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2.3,
					dots: true,
				}
			},

			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
					dots: true,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
			}

		]


	});

	$('.js-reviews_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		rows: false,
		infinite: false,
		arrows: false,

		responsive: [

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.5,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1.3,
				}
			}

		]

	});

	$('.js-def-opt').on('click', function() {

		$(this).parent().toggleClass('active');
		console.log('active');

	  })
	  
	$(".select_ul li").on('click', function(){
		var currentele = $(this).html();
		$(".js-def-opt li").html(currentele);
		$(this).parents(".select_wrap").removeClass("active");
	});

});
