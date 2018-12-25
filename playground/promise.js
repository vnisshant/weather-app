const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress=encodeURIComponent(address);
    request({
      url:'http://www.mapquestapi.com/geocoding/v1/address?key=Tgiki4K8ZvSo9J25oviEGWEsG0EAIYK5&location='+encodedAddress,
      json:true
    }, (error,response,body)=>{
      if(error)
      {reject('Unable to connect to server');

      }

      else {
  resolve({
    Address: body.results[0].providedLocation.location,
    Latitude:body.results[0].locations[0].displayLatLng.lat,
    Longitude:body.results[0].locations[0].displayLatLng.lng
        });
      }
    });
  });
};

geocodeAddress('08822').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
