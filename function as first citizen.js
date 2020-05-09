// assign a function to a variable 
//variable function 
/* const  travel = function () {
    console.log('hey this is suyash');
}
ab=travel(); */
// console.log(ab);

// assign a ofunction to  object
/* const yoo={
    name:"suyash chilwarwar",
    qualif: function(){
        console.log('i am doing engineering in branch IT');
        
    }
}

yoo.qualif() */

//pass a function to another function called as callback function

const myname=()=>{
    return "hello";
}

const greeting =(sayhi,name)=>{
    console.log(sayhi()+name);
    

}
//here myname is a call back function as it is pass as an argument to the second function
greeting(myname, " suyash");



///one function returns another function

function a(){
    return function b(){
        console.log('hello');
        
    }
}
a();// here nothing happens as there is nothing in function a()
a()();// here the function inside the function is called ()


