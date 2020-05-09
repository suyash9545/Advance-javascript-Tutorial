
// it replace the apply method 
function sum(a,b,c){
    console.log(a+b+c);
    
}

var array = [1,2,3];

sum.apply(null, array);
sum(...array);// it is same as rest parameter but it is applied on variable arrays 

// it also replace concat


let arr1 =[1,2,3];
let arr2 =[4,5,6];

// arr1=arr1.concat(arr2);
    // console.log(arr1);


//    using spread
  arr1=[...arr1,...arr2];
  console.log(arr1);
  

  // it also replace copy method
  let arrc =[1,2,3];
//   let arrc2=arrc;
//   arrc2.push(4,5);
//   console.log(arrc2);
//   console.log(arrc);// it gives same result as arrc in copy method 


  let arrc2=[...arrc,4,5,6];

  console.log(arrc2);
  console.log(arrc);

  // now using spread the change only occurs in the arrc2 not in arrc.
  