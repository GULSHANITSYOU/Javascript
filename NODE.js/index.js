

const user = {
    id:12 , 
    name : "Gulshan" , 
    last : "kumar"
}; 

const update = {
    id:12,
    name:"Aman"
}

const neuser = {...user,...update}; 
console.log(neuser);

