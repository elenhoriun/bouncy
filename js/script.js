;(function($){

	$(document).ready(function(){

		var $grid;

		$grid = $('.ba-portfolio__items').isotope({
    		itemSelector: '.ba-portfolio__item',
  			percentPosition: true,
  			masonry: {
       			columnWidth: '.grid-sizer'
  				}
		});

		$('.ba-portfolio__filter-item').on('click', function(evt) {
			evt.preventDefault();

			$('.ba-portfolio__filter-item').removeClass('ba-portfolio__filter-item--active');
			$(this).addClass('ba-portfolio__filter-item--active');

			
			var filterVal = $(this).attr('data-filter');
			$grid.isotope({ filter: filterVal });

		});


		// слайдер 

		$('.ba-slider').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000
		});

		$('.ba-slider2').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000
		});

	});


	// карта

	$(window).on('load', function(){
		var map;

		map = new google.maps.Map(
	    	document.getElementById('ba_map'), {
          		center: {lat: 49.5685276, lng: 34.58543170000007},
          		zoom: 17,
          		disableDefaultUi: true

        });

		var markerPoltava = new google.maps.Marker({
          position: {lat: 49.5685276, lng: 34.58543170000007},
          map: map,
          icon: 'img/marker.png'
        });

	});

})(jQuery);
