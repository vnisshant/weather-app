const request=require('request');
var geocodeAddress=(address,callback)=>{
  var encodedAddress=encodeURIComponent(address);
  request({
    url:'http://www.mapquestapi.com/geocoding/v1/address?key=Tgiki4K8ZvSo9J25oviEGWEsG0EAIYK5&location='+encodedAddress,
    json:true
  }, (error,response,body)=>{
    if(error)
    {callback('Unable to connect to server');

    }

    else {
callback(undefined,{
  Address: body.results[0].providedLocation.location,
  Latitude:body.results[0].locations[0].displayLatLng.lat,
  Longitude:body.results[0].locations[0].displayLatLng.lng
});

  }
  }

  );
};
module.exports.geocodeAddress=geocodeAddress;
//7fd9ced5d3248600e06f794a1596a479
