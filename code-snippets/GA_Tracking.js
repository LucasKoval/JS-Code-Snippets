// CUSTOM JS - GA TRACKING

// One element ----------------------------------//
window.monetateQ = window.monetateQ || [];

$(document).ready(function () {
   const ITEM_TO_TRACK = '[Selector]'; //-> Change this

   function addMetrics(trackEvent) {
      console.log('Metrics added: ', trackEvent);
      window.monetateQ.push(['trackEvent', [trackEvent]]);
   }

   $(ITEM_TO_TRACK).click(function (e) {
      addMetrics('Action_name'); //-> Change this

      dataLayer.push({
         event: 'nievent',
         eventCategory: 'monetate',
         eventAction: 'ExperienceName', //-> Change this
         eventLabel: 'click',
      });
   });
});

// Several elements ----------------------------------//
$(document).ready(function () {
   const ITEMS_TO_TRACK = 'Items_Selector'; //-> Change this

   $(ITEMS_TO_TRACK).each(function (e) {
      $(this).click(function () {
         dataLayer.push({
            event: 'nievent',
            eventCategory: 'monetate',
            eventAction: 'Monetate_Experience_Name', //-> Change this
            eventLabel: 'click',
         });
      });
   });
});

// Email Lightbox ----------------------------------//
$(document).ready(function () {
   setTimeout(() => {
      let ITEM_TO_TRACK = 'div.mt-email-banner button.submit';

      $(ITEM_TO_TRACK).click(function (e) {
         setTimeout(() => {
            if ($('#mt-email-error').css('visibility') == 'hidden') {
               dataLayer.push({
                  event: 'nievent',
                  eventCategory: 'monetate',
                  eventAction: 'Monetate_Experience_Name', //-> Change this
                  eventLabel: 'click',
               });
            }
         }, '200');
      });
   }, '400');
});
