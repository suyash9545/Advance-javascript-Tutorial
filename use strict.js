
// in this function we have not yet declared the add variable then also it shows the output as 17.this happens dure to javascript supports function hoisting.

/* 
function hello(a){
    var b =12;
    add=a+b;
    console.log(add);
    
}
hello(5); */


"use strict";

//now the output is shown as add is undefinef in the function.it scrictly see the mistakes and reject them .
function hello(a){
    var b =12;
    add=a+b;
    console.log(add);
    
}
hello(5);