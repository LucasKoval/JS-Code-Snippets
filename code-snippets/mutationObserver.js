$(document).ready(function () {
   const targetNode = document.querySelector(
      '#main > div.js-main-content.pdp > div.product-details > div > div > div.product-details__media > div.carousel.js-main-pdp-carousel > div.newSliderContainer.product-details > div.product-details__controls__wrapper > nav > ul'
   );
   const config = { attributes: true, childList: true, subtree: true };

   const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
         if (mutation.target.attributes[0].value == 'is-active') {
            let imageNumber =
               Number(
                  document.querySelector(
                     '#main > div.js-main-content.pdp > div.product-details > div > div > div.product-details__media > div.carousel.js-main-pdp-carousel > div.newSliderContainer.product-details > div.product-details__controls__wrapper > nav > ul > li.is-active a'
                  ).dataset.number
               ) + 1;

            dataLayer.push({
               event: 'nievent',
               eventCategory: 'monetate',
               eventAction:
                  'Horizontal_Alt_Image_Scroll_PDPs_experiment_impression',
               eventLabel: `control_image${imageNumber}_exposed`,
            });
            console.log(`Metrics added: control_image${imageNumber}_exposed`);
         }
      }
   };

   const observerDots = new MutationObserver(callback);
   observerDots.observe(targetNode, config);
});
