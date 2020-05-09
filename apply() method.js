// here it is as similar to the call method only the difference is call method takes the argument seperately and apply method takes the arguments as an arry.


const facebook = {
    name:"suyash",
    content :"programming",
    features : function(rating){
        console.log(`very friendly way of teaching . ${this.name} and i will give ${rating} star`);
        
    }
}
// facebook.features();
//second object
const facebook2 ={
    name:"saloni",
    content :"programming"
}
// from where did you need to call the function that object we use to write first then method name .apply(second object , [arguments in form of array])
facebook.features.apply(facebook2,[5]);
