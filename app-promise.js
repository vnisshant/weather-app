const yargs = require('yargs');
const axios=require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress=encodeURIComponent(argv.address);
var geocodeurl='http://www.mapquestapi.com/geocoding/v1/address?key=Tgiki4K8ZvSo9J25oviEGWEsG0EAIYK5&location='+encodedAddress;
axios.get(geocodeurl).then((response)=>{
  if(response.data.statusCode==='ZERO_RESULTS')
  {throw new Error('Unable to find that address');}
  console.log(response.data);
}).catch((e)=>{
  if(e.statusCode==='ENOTFOUND')
  {console.log('Unable to connect to API servers');}
  else {
    console.log(e.message);
  }


});
