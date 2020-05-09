//closure in action that is inner function can access to the outer function variables as well as all global variables .


const outerfun= (a) =>{

    let b =  11;
    const innerfunc=()=>{
        let sum = a+b;
        console.log('sum is ' ,sum);
        
    }
    innerfunc();
    // return innerfunc;// the return statement dosenot execut the inner function . function is executed when followe by () . but rather return statement returns the entire body of the inner functon.
}

outerfun();


// ---------------------------------------


let inner =  outerfun(5);
console.dir(inner);//now here we have output as a function which is inner function 
inner();//and if we call this then we get the output 