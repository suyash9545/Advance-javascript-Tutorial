

const obj = {
    name: "suyash",
    age:11,
   sum: function(){
        var add = 2*8;
        console.log(add);
        console.log(this);   
        console.log(this.name);//to access the objects we can use this .   


        function child(){
            var name= "ritik roshan";
            console.log(name);
            console.log(this);
            //now here in this fiunction we get the output as ritik roshan and it refers to the global object which is window object ad as  it is a regular function this keword hows the global object.
            
        }
child();
}
}
obj.sum();