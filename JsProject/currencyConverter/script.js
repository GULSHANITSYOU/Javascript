// ++++++++++++ fecthing coversion Rate of currency +++++++++++ 
function currencyData(currency){
    
      fetch(`https://v6.exchangerate-api.com/v6/dedfc2ab7b8c6bad282aed76/latest/${currency}`)
      .then((res) => res.json())
      .then( res => console.log(res.conversion_rates));     
  
}

// +++++++++++++++ Targets ++++++++++++++++++++++
const choosecurrencyfrom = document.querySelector('#from-currency');
const choosecurrencyTo = document.querySelector('#to-currency');
const fromAmountInput = document.querySelector('#from-currency');
const ToAmountInput = document.querySelector('#to-currency');
const swapbtn = document.querySelector('#swap-btn');












