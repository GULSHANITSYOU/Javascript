//+++++++++++++++ Functions ++++++++++++++++++++


function calculate ( val1 , val2 , ...num){ // ... rest opertor (bunduls the all rest  argument into a array )
    console.log(num);
}


calculate(2,5,4,7,8,6,9,7); 


//+++++++++++++++ Functions with object ++++++++++++++++

const item = {
    itmeName : "T-shirt",
    prices: "999"
}


function showItem(anyobject){
    console.log(`item Name is ${anyobject.itmeName} and the price is ${anyobject?.price}`); // if the properti is not contains 
}


showItem(item); 

