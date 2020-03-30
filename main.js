const button = document.querySelector('button');

button.addEventListener('click', () => {
  
  const span = document.querySelector('span');
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (this.status !== 200) return console.error('Request failed!');
    const rate = JSON.parse(this.response).bpi.USD.rate;
    span.textContent = `$${rate}`;
  });

  xhr.addEventListener('error', () => console.error('Request failed!'));

  xhr.open('GET', url);
  xhr.send();

});