$(document).ready(function() {
	$('.menu .search .fa').click(function(event) {
		$('.menu #searchform').toggle();
	});

	$('#section-2-1 .content-slider').slick({
		infinite: true,
		arrows: true,
		autoplaySpeed: 1000,
		autoplay: true,
		slidesToShow: 4,
		dots: false,
		slidesToScroll: 1,
		responsive: [
	    {
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
	    },
	    {
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
	    },
	    {
			breakpoint: 480,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

$('.dropdown-menu > li > .dropdown-menu').parent().addClass('dropdown-submenu').find(' > .dropdown-item').attr('href', 'javascript:;').addClass('dropdown-toggle');
$('.dropdown-submenu > a').on("click", function(e) {
  var dropdown = $(this).parent().find(' > .show');
  $('.dropdown-submenu .dropdown-menu').not(dropdown).removeClass('show');
  $(this).next('.dropdown-menu').toggleClass('show');
  e.stopPropagation();
});
$('.dropdown').on("hidden.bs.dropdown", function() {
  $('.dropdown-menu.show').removeClass('show');
});