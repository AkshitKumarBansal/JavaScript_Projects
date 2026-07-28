const URL = 'https://api.frankfurter.dev/v1';

const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-btn');
const rateInfo = document.getElementById('rate-info');
const convertedAmount = document.getElementById('converted-amount');

async function fetchCurrencies() {
  try {
    const response = await fetch(`${URL}/currencies`);
    const data = await response.json();
    const currencies = Object.keys(data);
    return currencies;
  } catch (err) {
    console.error('Error fetching currencies:', err);
    return;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const currencies = await fetchCurrencies();
  if(!currencies) return;
  let optionsHTML = '';
  currencies.forEach(currency => {
    optionsHTML += `<option value="${currency}">${currency}</option>`;
  });
  fromCurrency.innerHTML = optionsHTML;
  toCurrency.innerHTML = optionsHTML;

  fromCurrency.value = 'USD';
  toCurrency.value = 'EUR';

  convertCurrency();
})

async function convertCurrency() {
  const amountValue = parseFloat(amount.value);
  const fromValue = fromCurrency.value;
  const toValue = toCurrency.value;
  if(!amountValue || !fromValue || !toValue) return;
  if (fromValue === toValue) {
    rateInfo.textContent = `1 ${fromValue} = 1 ${toValue}`;
    convertedAmount.textContent = `${amountValue} ${fromValue} = ${amountValue.toFixed(2)} ${toValue}`;
    return;
  }
  try {
    const response = await fetch(`${URL}/latest?from=${fromValue}&to=${toValue}`);
    const data = await response.json();
    const rate = data.rates[toValue];
    const finalAmount = rate * amountValue;
    rateInfo.textContent = `1 ${fromValue} = ${rate} ${toValue}`;
    convertedAmount.textContent = `${amountValue} ${fromValue} = ${finalAmount.toFixed(2)} ${toValue}`;
  } catch (err) {
    console.error('Error converting currency:', err);
  }
}

convertButton.addEventListener('click', (e) => {
  e.preventDefault();
  convertCurrency();
});

function swapCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convertCurrency();
}

const swapButton = document.getElementById('swap-btn');
swapButton.addEventListener('click', swapCurrencies);