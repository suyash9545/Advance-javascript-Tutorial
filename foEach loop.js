//foreach method calls a function once for each element in an array in order.


const myarray= ['javascript','php','java','c','python'];

// console.log(myarray[2]);

myarray.forEach(function(element, index, array){
    // console.log(element);
    console.log(index +" -- "+element);
    
    console.log(array);// for each element the it gives the array of objects
    
})// same as for loop it works but with less code .
