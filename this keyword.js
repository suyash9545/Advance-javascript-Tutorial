console.log('hey this ');

//this is a refer to the object it belongs to .

// -------------------------------------------------------


/* console.log(this); */
//now we can see that this refers the window object which is a global object .


// -------------------------------------------------------
//regular function
/* function sum(){
    var add = 2*8;
    console.log(add);
    console.log(this);   
}
sum() */

//now here also we can see that this refers the window object only not refering to the sum() function.

//-----------------------------------------------------------

const obj = {
    name: "suyash",
    age:11,
   sum: function(){
        var add = 2*8;
        console.log(add);
        console.log(this);   
        console.log(this.name);//to access the objects we can use this .   

}
}
obj.sum();
//now we can see that this keyword refers the object in which sum function is defined. 