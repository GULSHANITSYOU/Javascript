
let currencyData;

// ++++++++++++ fetching conversion rate of currency +++++++++++ 
async function GetCurrencyData(currency , callauto =  true) {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/dedfc2ab7b8c6bad282aed76/latest/${currency}`);
        const data = await response.json();
        currencyData = data.conversion_rates;
        

       if(callauto){
       allConversionOption(currencyData);
       ToAmountInput.value = "INR";
      }

    } catch (error) {
        console.error('Error fetching currency data:', error);
    }

}


// +++++++++++++++ Targets ++++++++++++++++++++++
const choosecurrencyfrom = document.querySelector('#from-amount');
const choosecurrencyTo = document.querySelector('#to-amount');
const fromAmountInput = document.querySelector('#from-currency');
const ToAmountInput = document.querySelector('#to-currency');
const swapbtn = document.querySelector('#swap-btn');
const conversionForm = document.querySelector("#conversion-form"); 



//+++++++++++ form preventing default ++++++++++ 
conversionForm.addEventListener('submit',(e)=> e.preventDefault());

//+++++++++ == Geting default data (USD) == ++++++++++++
GetCurrencyData( String(fromAmountInput.value));


// +++++++++++++++++ get all conversion option +++++++++++++++
function allConversionOption(currencyData){

      const keyCurrencies = Object.keys(currencyData);
      fromAmountInput.innerHTML = '';
      ToAmountInput.innerHTML = ''; 

      // console.log(keyCurrencies);

      for(let i = 0 ; i<keyCurrencies.length;i++){

            let option = document.createElement('option');
            option.innerText = keyCurrencies[i];            
            fromAmountInput.append(option);
            
            option = document.createElement('option');
            option.innerText = keyCurrencies[i];            
            ToAmountInput.append(option);
            
      }

     
    

      


      

}




fromAmountInput.addEventListener("input" , (e)=>{
      let newcurrency = String(e.target.value)
      GetCurrencyData(newcurrency,0);
      choosecurrencyfrom.value = 0; 
      choosecurrencyTo.value = 0;       
})

ToAmountInput.addEventListener('input',(e)=>{
      let currency = String(e.target.value);
      let amount = Number(choosecurrencyfrom.value)  ;
      choosecurrencyTo.value = (amount * Number(currencyData[currency])).toFixed(2); 

})

choosecurrencyfrom.addEventListener('input',(e)=>{
    
     let to = String(ToAmountInput.value);     
     let amount = Number (e.target.value);
     let conversionIs = (Number(currencyData[to]) * amount).toFixed(2);  
     choosecurrencyTo.value = (conversionIs); 
     
})

choosecurrencyTo.addEventListener('input',(e)=>{
    let  amount = Number( e.target.value);
    let to = String(ToAmountInput.value)
    let currRate =  Number(currencyData[to]);
    choosecurrencyfrom.value = (amount/currRate).toFixed(2); ;    
})











