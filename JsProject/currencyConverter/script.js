// ++++++++++++ fecthing coversion Rate of currency +++++++++++ 
function currencyData(currency){
    
      fetch(`https://v6.exchangerate-api.com/v6/dedfc2ab7b8c6bad282aed76/latest/${currency}`)
      .then((res) => res.json())
      .then( res => console.log(res.conversion_rates));     
  
}







