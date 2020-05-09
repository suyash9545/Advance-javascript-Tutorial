 // In bind method we can bind the object to a common functon so that the function gives different result when its need.


//  const facebook = {
//     name:"suyash",
//     content :"programming",
//     features : function(){
//         console.log(`very friendly way of teaching . ${this.name} . he made ${this.content} topics`);
        
//     }
// }   
// // facebook.features();//normal

// // let youtube = facebook.features;
// // youtube(); not allowed
// let youtube = facebook.features.bind(facebook);
// youtube();




const facebook = {
    name:"suyash",
    content :"programming"}
const facebook1 = {
        name:"santosh",
        content :"programming"}
 const facebook2 = {
            name:"saloni",
            content :"programming"}


          function  features(rating ){
            console.log(`very friendly way of teaching . ${this.name} . he made ${this.content} topics . I will love to give ${rating} star`);
            
        }

        let youtube = features.bind(facebook, 3);
         youtube();
         let youtube1 = features.bind(facebook1, 5);
         youtube1();

         let youtube2 = features.bind(facebook2);
         youtube2(6);

            