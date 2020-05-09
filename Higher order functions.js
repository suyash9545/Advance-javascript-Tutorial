//Higher order functions are the function that take other function as argument or return function as their reults.
//lets say you are tking a job interview and their are many applications of candidate and then now we have to set a different question to each cadidate so for this a program for your understing about higher order functionsss.
const interviewQuestion=(name)=>{
    if(name==="suyash"){
        return function(topic){
            console.log(`hii ${name}. what is ${topic}?. plz explain us`);
            
        }

    }
    if(name==="santosh"){
        return function(topic){
            console.log(`hii ${name}. what is ${topic}?. plz explain us`);
            
        }

    }
    if(name==="saloni"){
        return function(topic){
            console.log(`hii ${name}. what is ${topic}?. plz explain us`);
            
        }

    }else{
        return function(){
            console.log("welcome to interview");
            
        }
    }
}
//interviewQuestion(name)(topic);
interviewQuestion("suyash")("UI");
interviewQuestion("santosh")("full stack developer");
interviewQuestion("saloni")("backending");
