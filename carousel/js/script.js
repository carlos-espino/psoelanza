/**
 * @file
 * Handles FancyBox Carousel Formater.
 */
(function ($, Drupal, drupalSettings) {
  
  
      function doVideoCarousel(i, elm) {
				console.log('aquí');
				console.log($('.carousel.slide'));
				$(".carousel.slide").carousel('pause');
			}
  
  
  
  Drupal.behaviors.videoCarousel = {
    attach: function (context, settings) {
			$('.carousel-wrapper', context).once('carousel.slide').each(doVideoCarousel);
    }
  };













})(jQuery, Drupal, drupalSettings);
