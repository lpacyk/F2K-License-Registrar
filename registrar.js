//For sending HTTP POST
var request = require("request");

//For formatting post variables.
var param = require('jquery-param');

//Post license plate
//Lot- 352
//Type- 1902
//Test Plate = BL118DE
request({
  url: 'https://api.istall.ca/create-registration', //URL to hit
  method: 'POST',
  body: param({
    data: [{name:"plate", value:"BL118dE"}],
    lot: '352',
    type: '1902'
  }),
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }
});
