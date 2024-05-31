/************   primitive ************ */

let number = 1233; // Number
let string = "9999"; // String
let isGoing = false; // boolean (true / false)
let spcial = undefined; // Undefined
let Null = null; // null (type of object)

/****************  Type conversion *******************/

let num = Number(string);

console.log("String to Number : " + typeof num);

let str = String(number);

console.log("Number to string : " + typeof str);

console.log(Number("123abs")); // Not a number but number NaN

/************   non-primitive ************ */

let object = {
  Name: "Gulshan", // Object
  lastName: "kumar",
};

let array = [1, 2, 4, 5, 4, 8, 5, 7, 5]; // Array
