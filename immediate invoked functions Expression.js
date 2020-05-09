// an IIFE is a javascript function that runs as soon as it is defined

//it is desiged pattern which is also known as self-executing anonymous function and contains two major parts
//1. Grouping operator()this two parenthesis is a grouping operator . here the data is safe and secure all data members are private not allowed to access out of the function
//2. IIFE()

 
function authorname (){
    console.log("author name is suyash");
    
}

authorname()


 (function(){
    console.log("author name is suyash");

} )(); 
//call a function using empty ();

(function(){
    var name ="suyash"
    console.log("author name is "+name);

} )();

console.log("author name is "+name);//outside the function it dont works 
