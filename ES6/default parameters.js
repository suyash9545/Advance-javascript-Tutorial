//es5

// function mult(a,b){
//     console.log(a*b);
    
// }

// mult(4,7)



// function mult(a,b){
//     console.log(b);// it is undefined
//     b = (typeof b != undefined)?b :2;
    
//     console.log(a*b);
    
// }

// mult(4)


//now in es6

const mult =(a,b=3)=>{
    console.log(`the multiplication is = ${a*b}`);
}
mult(6)