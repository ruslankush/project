$(function() {

	$('.js-main-feedback_slider').on(`init reInit`, function(event, slick) {
		$('.counter_numb').text(1 + ' / ' + slick.slideCount);
	})
	$('.js-main-feedback_slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
			$('.counter_numb').text(currentSlide + 1 + ' / ' + slick.slideCount);
	})
	var counter = $('.counter');
	$('.js-main-feedback_slider').slick({
		slidesToShow: 2,
		rows: false,
		dots: false,
		infinite: false,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		cssEase: 'ease-in-out',
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow__prev"><span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.35164 11.8548L8.29662 19.8C8.52341 20.0268 8.82568 20.1512 9.14799 20.1512C9.47065 20.1512 9.77275 20.0266 9.99954 19.8L10.7209 19.0784C10.9475 18.852 11.0723 18.5495 11.0723 18.2271C11.0723 17.9048 10.9475 17.5921 10.7209 17.3657L6.0859 12.7205L20.8115 12.7205C21.4754 12.7205 22 12.2007 22 11.5366L22 10.5166C22 9.85247 21.4754 9.28029 20.8115 9.28029L6.03332 9.28029L10.7207 4.60918C10.9473 4.38238 11.0722 4.08815 11.0722 3.76567C11.0722 3.44354 10.9473 3.14502 10.7207 2.91841L9.99937 2.19921C9.77257 1.97242 9.47048 1.84882 9.14781 1.84882C8.82551 1.84882 8.52323 1.97403 8.29644 2.20082L0.35146 10.1458C0.124129 10.3733 -0.000893718 10.677 8.0004e-07 10.9999C-0.000714484 11.3238 0.124129 11.6277 0.35164 11.8548Z"/></g></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow__next"><span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M21.6484 10.1452L13.7034 2.20004C13.4766 1.97324 13.1743 1.84875 12.852 1.84875C12.5293 1.84875 12.2273 1.97342 12.0005 2.20004L11.2791 2.92156C11.0525 3.148 10.9277 3.45045 10.9277 3.77293C10.9277 4.09524 11.0525 4.40789 11.2791 4.63433L15.9141 9.27951H1.18853C0.524597 9.27951 0 9.79928 0 10.4634V11.4834C0 12.1475 0.524597 12.7197 1.18853 12.7197H15.9667L11.2793 17.3908C11.0527 17.6176 10.9278 17.9118 10.9278 18.2343C10.9278 18.5565 11.0527 18.855 11.2793 19.0816L12.0006 19.8008C12.2274 20.0276 12.5295 20.1512 12.8522 20.1512C13.1745 20.1512 13.4768 20.026 13.7036 19.7992L21.6485 11.8542C21.8759 11.6267 22.0009 11.323 22 11.0001C22.0007 10.6762 21.8759 10.3723 21.6484 10.1452Z"/></g></svg></span></a>',
		// appendArrows: '.main__broker--arr',

		responsive: [

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1.5,
					appendArrows: '.js-main-feedback_arr',
				}
			},

			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1.2,
					appendArrows: '.js-main-feedback_arr',
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					appendArrows: '.js-main-feedback_arr',
				}
			},

		]

	});

	$('.header_burger').on('click', function(e) {

		e.preventDefault();

		$('.m-menu').addClass('active');

	});

	$('.m-menu_close, .m-menu_overflow').on('click', function(e) {

		e.preventDefault();

		$('.m-menu').removeClass('active');

	});

	$('.js-ban').each(function() {

		$(this).length;

		var banImg = $(this).find('img').attr('src');

		$(this).attr('style', 'background-image: url(../'+ banImg +')');

	});


	$('.js-def-opt').on('click', function() {
		$(this).parent().toggleClass('active');
	});



	$(".select_ul li").on('click', function(){
		var currentele = $(this).html();
		// var p = $(this).closest();
		$(".js-def-opt li").html(currentele);
		$(this).parents(".select_wrap").removeClass("active");
	});


	$('.select-fix_top a.close').on('click', function(e) {

		e.preventDefault();
		$(".select_wrap").removeClass("active");
	});

	$('.js-file input').on('change', function(){

		var v = $(this).val();
		var Ink = $('.js-file label');
		if(v!='') Ink.text(v.substring(v.lastIndexOf('\\')+1,v.length)); 

	});


	var current_fs, next_fs, previous_fs; //fieldsets

	$(".next").click(function(){
		current_fs = $(this).parent().parent().removeClass('active');
		next_fs = $(this).parent().parent().next().addClass('active');
		// next_fs.show(); 
	});

	$(".previous").click(function(){
		current_fs = $(this).parent().parent().removeClass('active');
		previous_fs = $(this).parent().parent().prev().addClass('active');
		// previous_fs.show(); 
	});

	

});
