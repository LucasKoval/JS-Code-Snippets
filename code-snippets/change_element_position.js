// Move Email Lightbox above Cookie Banner
$(document).ready(function () {
   const COOKIE_BANNER = '#onetrust-banner-sdk'; //Check this selector
   const ACCEPT_BUTTON = '#onetrust-button-group > button'; //Check this selector

   setTimeout(() => {
      if (window.matchMedia('(max-width: 767px)').matches) {
         if ($(COOKIE_BANNER).css('position') == 'fixed') {
            const LIGHTBOX = '#monetate_allinone_lightbox'; //Check this selector

            $(LIGHTBOX).css('bottom', '200px');
            $(LIGHTBOX).css('transition', '0.8s');
            $(LIGHTBOX).css('-webkit-transition', '0.8s');
         }
      }
   }, '500');

   $(ACCEPT_BUTTON).click(function (e) {
      if (window.matchMedia('(max-width: 767px)').matches) {
         if ($(COOKIE_BANNER).css('position') == 'fixed') {
            const LIGHTBOX = '#monetate_allinone_lightbox'; //Check this selector

            $(LIGHTBOX).css('bottom', '0');
            $(LIGHTBOX).css('transition', '0.8s');
            $(LIGHTBOX).css('-webkit-transition', '0.8s');
         }
      }
   });
});
