

//let us make an object to understand this

const obj1={
    user:'suyash',
    pass:'abcd'
}
//pass by refrence
const obj2 = obj1;
console.log(obj2);

//this ia called as pass by refrence means the refrence of the obj1 is passedto the obj2 and whole object is fully assigned to the obj2.

//pass by value 

obj2.pass="bbbbbb";
console.log(obj1);
console.log(obj2);
//this is called as pass by value here value of pass is changed using the obj2 and whole change is reflected in obj1 and obj2 as obj2 is arefrence of obj1.


//lets take a better example

const arr1=[1,2,3,4]

const arr2= [].concat(arr1);

arr1.push(5);

//here both are having different values as we have push the value in arr1 but no change in the arr2 this is because we have only concatinated arr1 to arr2 means only a copy is generated in arr2 of arr1.
console.log(arr1);
console.log(arr2);

