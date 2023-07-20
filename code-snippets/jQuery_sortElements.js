// CTA Selector
const CC_CTA =
   '#main > div.js-main-content.checkout > div.customer.checkout__shippingSection.js-timer > div > div.customer__main > div.step2.text-box.is-bottom-only.is-top-only > div.text-box.content-box.is-bottom-only.is-top-only > fieldset > div > div.has-desc.deliveryOptionType.unSelectedOpt';

// Get User Location block
let userLocation = {
   latitude: 0,
   longitude: 0,
};

const receivedLocation = (location) => {
   userLocation.latitude = location.coords.latitude && location.coords.latitude;
   userLocation.longitude =
      location.coords.longitude && location.coords.longitude;
   console.log('userLocation', userLocation);
};

const locationError = (error) => {
   console.log('Location error: ', error);
};

const requestConfig = {
   enableHighAccuracy: true,
   maximumAge: 0,
   timeout: 5000,
};

navigator.geolocation.getCurrentPosition(
   receivedLocation,
   locationError,
   requestConfig
);
// End of User Location block

function getDistance(lat1, lon1, lat2, lon2) {
   var p = 0.017453292519943295; // Math.PI / 180
   var c = Math.cos;
   var a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

   return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function sortElementsByDistance(a, b) {
   const startA = parseInt($(a).data('distance'));
   const startB = parseInt($(b).data('distance'));
   return startA - startB;
}

function orderByNearest() {
   const container = $('#posForm > fieldset > div > div.POSOptions > ul');
   const elements = $('#posForm > fieldset > div > div.POSOptions > ul > li');

   $(elements).each(function () {
      let id = $(this).find('>:first-child>:first-child').attr('id');
      let lat = $(this).find('>:first-child>:first-child').attr('data-lat');
      let long = $(this).find('>:first-child>:first-child').attr('data-lng');

      let currentElemDistance = getDistance(
         userLocation.latitude,
         userLocation.longitude,
         lat,
         long
      );

      $(this).attr('data-distance', currentElemDistance);

      // Test function
      // console.log(id, currentElemDistance);
   });

   $(container).html($(elements).sort(sortElementsByDistance));
}

$(document).ready(() => {
   $(CC_CTA).click(() => {
      if (userLocation.latitude !== 0 && userLocation.longitude !== 0) {
         orderByNearest();
      }
   });
});
