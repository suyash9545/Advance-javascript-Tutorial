//lets say you are tking a job interview and their are many applications of candidate and then now we have to set a different question to each cadidate so for this a program for your understing about higher order functionsss.

const interviewQue =(name)=>{
    return function(topic){
        if(name === "suyash"){
            console.log(`hi ${name} . Explain ${topic}`); }
       else if(name === "santosh"){
                console.log(`hi ${name} . Explain ${topic}`); }
        else{
                    console.log(`welcome to TT company`); 
                }
    }
}
// function is written same in both cases as higher order function
const candidate = interviewQue("suyash");
candidate('UI');

///else you can write


interviewQue("santosh")('react');

