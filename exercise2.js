
let likes = 100;
//a global variable 

const facebook={
    name:"suyash chilwarwar",
    comments:400
}
const deep=(a,b)=>{
    a=200;
    console.log(a);//to see value of a in the console 
    
    b.comments=900;
}

deep(likes,facebook);

console.log(likes);//100//in this this variable a is valid till the deep() function not outside it so likes remains 100 so no change.
console.log(facebook.comments);//900//in this the object is modified using b variable and we know that onse it is changed so it is changed in main object also

