const allCountries = require('./allCountries');

function test(){
    
    const filterDataObj = {};
    for (let country of allCountries) {
      filterDataObj[country.countryName] = { 
        name: country.countryName, code: country.countryCode 
      };
    }
    const filteredData = Object.keys(filterDataObj).map(key => filterDataObj[key]);

    console.log(filteredData);

}


test();

