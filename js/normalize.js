$(function() {
	
	
	$('.accordion-name').click(function (e) {
	
		e.preventDefault();
	
		$(".accordion-body").not($(this).next()).slideUp(400);
	
		$(this).next().slideToggle(400);
	
		$(".accordion-item").not($(this).closest(".accordion-item")).removeClass("active");
	
		$(this).closest(".accordion-item").toggleClass("active");
	
	});

	$('.js-article_slider').slick({
		slidesToShow: 1,
		dots: false,
		rows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.212591 8.99956C0.212591 8.69847 0.327553 8.39742 0.556995 8.16787L7.78069 0.944247C8.24021 0.48473 8.98523 0.48473 9.44456 0.944247C9.9039 1.40358 9.9039 2.14846 9.44456 2.60801L3.05264 8.99956L9.44434 15.3912C9.90367 15.8507 9.90367 16.5955 9.44434 17.0548C8.98501 17.5145 8.23998 17.5145 7.78047 17.0548L0.556772 9.83126C0.327292 9.60159 0.212591 9.30054 0.212591 8.99956Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.78741 9.00044C9.78741 9.30153 9.67245 9.60258 9.443 9.83213L2.21931 17.0558C1.75979 17.5153 1.01477 17.5153 0.555435 17.0558C0.0961048 16.5964 0.0961048 15.8515 0.555435 15.392L6.94736 9.00044L0.555658 2.60885C0.0963274 2.14933 0.0963274 1.40453 0.555658 0.945234C1.01499 0.485495 1.76002 0.485495 2.21953 0.945234L9.44323 8.16874C9.67271 8.39841 9.78741 8.69946 9.78741 9.00044Z"/></svg></span></a>',
	});

	$('.js-read-also_slider').slick({
		slidesToShow: 3,
		dots: false,
		rows: false,
		infinite: false,
		prevArrow: '<a href="javascript: void(0);" class="arrow arrow-prev"><span><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.212591 8.99956C0.212591 8.69847 0.327553 8.39742 0.556995 8.16787L7.78069 0.944247C8.24021 0.48473 8.98523 0.48473 9.44456 0.944247C9.9039 1.40358 9.9039 2.14846 9.44456 2.60801L3.05264 8.99956L9.44434 15.3912C9.90367 15.8507 9.90367 16.5955 9.44434 17.0548C8.98501 17.5145 8.23998 17.5145 7.78047 17.0548L0.556772 9.83126C0.327292 9.60159 0.212591 9.30054 0.212591 8.99956Z"/></svg></span></a>',
	    nextArrow: '<a href="javascript: void(0);" class="arrow arrow-next"><span><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.78741 9.00044C9.78741 9.30153 9.67245 9.60258 9.443 9.83213L2.21931 17.0558C1.75979 17.5153 1.01477 17.5153 0.555435 17.0558C0.0961048 16.5964 0.0961048 15.8515 0.555435 15.392L6.94736 9.00044L0.555658 2.60885C0.0963274 2.14933 0.0963274 1.40453 0.555658 0.945234C1.01499 0.485495 1.76002 0.485495 2.21953 0.945234L9.44323 8.16874C9.67271 8.39841 9.78741 8.69946 9.78741 9.00044Z"/></svg></span></a>',
		appendArrows: '.read-also_arr',
	});


});
