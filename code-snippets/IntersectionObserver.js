$(document).ready(function () {
   const PAGE_SECTIONS =
      '#main > div.js-main-content.pdp > div.product-details > div > div > div.product-details__media > div.carousel.js-main-pdp-carousel > div > div > ul > li';
   const SECTIONS_ARRAY = Array.from($(PAGE_SECTIONS));

   // Adding image number attribute
   SECTIONS_ARRAY.forEach((section, index) => {
      $(section).attr('data-image-number', index + 1);
   });

   // Setting the Intersection Observer
   let observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (
               entry['isIntersecting'] === true &&
               entry['intersectionRatio'] === 1
            ) {
               let target = $(entry.target);

               if (target[0].attributes[2].name == 'data-image-number') {
                  let imageNumber = target[0].attributes[2].value;

                  dataLayer.push({
                     event: 'nievent',
                     eventCategory: 'monetate',
                     eventAction:
                        'Horizontal_Alt_Image_Scroll_PDPs_experiment_impression',
                     eventLabel: `control_image${imageNumber}_exposed`,
                  });
                  console.log(
                     `Metrics added: control_image${imageNumber}_exposed`
                  );
               }
            }
         });
      },
      { threshold: [0, 1] }
   );

   SECTIONS_ARRAY.forEach((section) => {
      observer.observe(section);
   });
});
