const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  new FormData(form); // fires teh formdata event
});

form.addEventListener('formdata', e => {

  const currency = e.formData.get('currency');

  const currencies = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
  }

  const span = document.querySelector('span');
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (this.status !== 200) return console.error('Request failed!');
    const rate = JSON.parse(this.response).bpi[currency].rate;
    span.textContent = `${currencies[currency]}${rate}`;
  });

  xhr.addEventListener('error', () => console.error('Request failed!'));

  xhr.open('GET', url);
  xhr.send();
});