const allCountries = require('./../../allCountries');

const filterDataObj = {};

for (let country of allCountries) {
  filterDataObj[country.countryName] = {
    id: country.countryCode,
    year: country.year,
    quantity: country.value
  };
}

const filteredData = Object.keys(filterDataObj).map(key => filterDataObj[key]);

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('populations').del()
    .then(function () {
      // Inserts seed entries
      return knex('populations').insert(filteredData);
    });
};
