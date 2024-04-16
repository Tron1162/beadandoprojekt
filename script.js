const content = document.getElementById('content');
const cryptoBtn = document.getElementById('cryptoBtn');
const currencyBtn = document.getElementById('currencyBtn');

cryptoBtn.addEventListener('click', showCryptoPage);
currencyBtn.addEventListener('click', showCurrencyPage);

function showCryptoPage() {
  content.innerHTML = `
    <h2>Kriptovaluták Árfolyamai</h2>
    <table>
      <thead>
        <tr>
          <th>Név</th>
          <th>Árfolyam (USD)</th>
        </tr>
      </thead>
      <tbody id="cryptoData">
        <!-- Ide kerülnek majd a kriptovaluták adatai -->
      </tbody>
    </table>
  `;
  
  fetchCryptoData();
}

function fetchCryptoData() {
  fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(response => response.json())
    .then(data => {
      const cryptoData = document.getElementById('cryptoData');
      cryptoData.innerHTML = '';
      data.forEach(currency => {
        cryptoData.innerHTML += `
          <tr>
            <td>${currency.name}</td>
            <td>${currency.price_usd}</td>
          </tr>
        `;
      });
    })
    .catch(error => {
      console.error('Hiba történt a kriptovaluta adatok lekérése közben:', error);
    });
}

function showCurrencyPage() {
  content.innerHTML = `
    <h2>Hagyományos Valuták Árfolyamai</h2>
    <table>
      <thead>
        <tr>
          <th>Név</th>
          <th>Árfolyam (USD)</th>
        </tr>
      </thead>
      <tbody id="currencyData">
        <!-- Ide kerülnek majd a hagyományos valuták adatai -->
      </tbody>
    </table>
  `;
  
  fetchCurrencyData();
}

function fetchCurrencyData() {
  fetch('https://api.example.com/currency')
    .then(response => response.json())
    .then(data => {
      const currencyData = document.getElementById('currencyData');
      currencyData.innerHTML = '';
      data.forEach(currency => {
        currencyData.innerHTML += `
          <tr>
            <td>${currency.name}</td>
            <td>${currency.price_usd}</td>
          </tr>
        `;
      });
    })
    .catch(error => {
      console.error('Hiba történt a hagyományos valuta adatok lekérése közben:', error);
    });
}