const BASE_URL = `http://localhost:3000/api/v1`;

let products = [];

document.addEventListener('DOMContentLoaded', () => {
  let product_list = $('#products')

  fetch(`${BASE_URL}/products`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(promiseValue => promiseValue.json().then(json => (json.forEach(element => {
    product_list.append(`<li>${element.title}</li>`);

  }))));

});
