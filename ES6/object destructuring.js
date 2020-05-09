const data={
    name: "suyash",
    age:20,
}

console.log(`my name is ${data.name}`);///here we have to use data.name 
// method 1
let {name, age} = data;// this is called object destructuring
console.log(`my name is ${name}`);   
//method 2

let name, age;
({name, age} = data);
console.log(`my name is ${name}`);

//method 3
let {name:myname, age} = data;//if we have to store the name with another name then use this 
console.log(`my name is ${myname}`);   
