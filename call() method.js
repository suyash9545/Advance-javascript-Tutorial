// it is a predefiner js method 
//with call(), an objec can use a method belonging to another object.
//first object
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
// from where did you need to call the function that object we use to write first then method name .call(second object , arguments)
facebook.features.call(facebook2, 5);
// call takes the first argument as objname and from second it takes arguments how much as you can.as(rating, support,.....)