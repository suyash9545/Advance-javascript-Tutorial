
const array =[1,2,3]
console.log(array);

//now it shous that it is an array but its notb true its an object;

const arrayobj={
    0:1,
    1:2,
    2:3
}
console.log(arrayobj);

//now it shows that it is the object .


// so to erase this defficulties from your mind we a method is a javascript called as isArray().

//how to use it 

console.log(Array.isArray(arrayobj));
//it returns false ie that is not an array.
console.log(Array.isArray(array ));
//it returns true ie that is  an array.


