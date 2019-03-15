const allCountries = require('./../../allCountries');

const filterDataObj = {};

for (let country of allCountries) {
  filterDataObj[country.countryName] = {
    name: country.countryName,
    code: country.countryCode
  };
}

const filteredData = Object.keys(filterDataObj).map(key => filterDataObj[key]);

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert(filteredData);
    });
};
