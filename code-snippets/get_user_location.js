$(document).ready(function () {
   let userLocation = {
      latitude: 0,
      longitude: 0,
   };

   const receivedLocation = (location) => {
      userLocation.latitude =
         location.coords.latitude && location.coords.latitude;
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
});
