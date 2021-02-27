/**
 * @file
 * Handles FancyBox Carousel Formater.
 */
(function ($, Drupal, drupalSettings) {
  
  Drupal.behaviors.fancyGallery = {
    attach: function (context, settings) {
			$('#'+drupalSettings['video-carousel']['carousel_id']).carousel('pause');
			console.log('loal');
			console.log('#'+drupalSettings['video-carousel']['carousel_id']);
    }
  };

})(jQuery, Drupal, drupalSettings);
