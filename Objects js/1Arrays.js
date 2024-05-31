//++++++++++++ Array +++++++++++

let myarray = [1, 2, 3, 4, 5, "G", "g"];
const arr2 = [4, 5, 8, 7, 9];

let newarray = myarray.concat(arr2);

console.table([...myarray, ...arr2]);

const yourarray = new Array(1, 2, 3, 4, 5, "g", "G");

//++++++++++ Array  Methods ++++++++++++

/* 

 push(x)                      to add an element at the last 
 pop()                       pop last value 
 unshift(x)                  add to front 
 shift()                     delete fornt 
 includs(x)                   true/false 
 indexOf(x)                  int 
 arr.join()                   make string 
 slice()                    a slice of array x to y-1
 splice()                  cut that part of array (x , y) and also retrun it 



 arr.concat(arr2)            merge two arrays and return new array 

 arr3 = [...arr1 ,...arr2]    sprad opertor to copy array values 

 arr.flat(x)                 x depth of array to flat 

 Arr.from("aldha");        whatever it is .from change that into array 


*/






