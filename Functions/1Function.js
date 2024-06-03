//+++++++++++++++ Functions ++++++++++++++++++++


function calculate ( val1 , val2 , ...num){ // ... rest opertor (bunduls the all rest  argument into a array )
    console.log(num);
}


// calculate(2,5,4,7,8,6,9,7); 


//+++++++++++++++ Functions with object ++++++++++++++++

const item = {
    itmeName : "T-shirt",
    prices: "999",
    ProductDetails: function(){
        console.log(`Item is ${this.itmeName} and the price is ${this.prices}`);  //+++++++++ This Keyword ++++++++
    }
}


function showItem(anyobject){
    console.log(`item Name is ${anyobject.itmeName} and the price is ${anyobject?.price}`); // if the properti is not contains 
}


showItem(item); 




function one(){

    const name = "gulshan"; 

    function two(){
        const lastName = "Kumar";

        function three(){
            const midName = "Kuch nhi "; 
            console.log(name  + lastName + midName );
        }

        three();
    }

    two(); 
}


// one(); 


console.log(a , b); 

let a = 0 ; 
let b = 0 ; 
var cbd = 9  ;





