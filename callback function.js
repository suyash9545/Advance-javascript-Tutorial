// any function that is passed as an argument to another function is called as callback function


// normal function 
/* funct1=()=>{
    console.log('welcome funct1');
    
}
funct2=()=>{
    console.log('welcome funct2');
    
}

funct1();
funct2(); */

//callback are the way that the certain code dosent execute till the other code has already complete execution
 funct1=()=>{

   setTimeout(() => {
    console.log('welcome funct1');
    funct2();
   }, 3000);
    
}
funct2=()=>{
    console.log('welcome funct2');
    
}

funct1();

