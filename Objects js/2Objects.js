// ++++++++++++++++++++++ Objects ++++++++++++++++++++++

// singlton
// using Object.create;

// Object literals

const symb = Symbol("key");

const jsUser = {
  name: "Hero",
  age: 22,
  location: "Roorkee",
  email: "gulshanitsyou@gmail.com",
  [symb]: "Sybole",
};

jsUser.name = "Saktiman";
// console.log(jsUser["name"]);

// Object.freeze(jsUser);                    // object has freez ( no value can be change )
jsUser.name = "Iron man";

jsUser.Greating = function () {
  console.log(`Hello ji kaise ho ${this.name}`);
}; // adding a new key and value as function

// console.log( jsUser.Greating());

let jsUser2 = {
  myname: "hitesh",
  mylastName: "choudhari",
  myemail: "myemail.com",
};

// jsUser2 = {...jsUser , ...jsUser2};   // concatinate two objects with sprad operator
// console.table(jsUser2);

let jsUser3 = Object.assign({}, jsUser, jsUser2); // concatinate all objects into target empty object

// console.log(jsUser3 , jsUser)

// console.log(Object.keys(jsUser) ,"\n\n" , Object.values(jsUser));





// +++++++++++++++ Distructuring +++++++++++++++


const course = {
    CourseName : "JavaScrip advance",
    price : "999",
    courseInstructor: "Hitesh choudhari"
}

const {CourseName} = course ;           // ++ Distructuring ++ 

// console.log(CourseName); 
