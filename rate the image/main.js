const stars= document.querySelectorAll('.star');
const output = document.querySelector('.output');
// console.log(stars);


for(x=0;x<stars.length;x++){
    stars[x].starValue=(x+1);
    // stars[x].addEventListener('click', function(){
    //     console.log('i am  clickes');
        
    // })
   

    ["click","mouseover","mouseout"].forEach(function(e){
        stars[x].addEventListener(e,shorating)
        
    });
}
function shorating(e){
    let type = e.type;
    // console.log(type);
    let starValue = this.starValue;
    // console.log(starValue);
    if(type === 'click'){
         
    if(starValue>1){
        output.innerHTML = " your rating is " + starValue +" stars.";
    }
    }
    stars.forEach(function(element, index){
        if(type === 'click'){

          
            if(index<starValue){
                element.classList.add("orange");
            }else{
                element.classList.remove("orange");

            }
        }
        if(type === 'mouseover'){
            if(index<starValue){
                element.classList.add("yellow");
            }else{
                element.classList.remove("yellow");

            }
        }
        if(type === 'mouseout'){
       
                element.classList.remove("yellow");
        
        }
    })
    
    
}


function nextpage(){
    window.location.reload();
}