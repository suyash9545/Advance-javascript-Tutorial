
// initialise all the variables and add queryselector
const score = document.querySelector('.score');
const startScreen = document.querySelector('.startscreen');
const gameArea = document.querySelector('.gamearea')
// console.log(gameArea);
let keys = { ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false }// at the start make all the keys false to make further them true


startScreen.addEventListener('click', start)//add event listener 


let player = { speed: 5,
                score : 0, };// an empty obj

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;//make a key true 
    // console.log(e.key);
    // console.log(keys);


}

function keyUp(e) {
    e.preventDefault();
    keys[e.key] = false;// make a key false
    // console.log(e.key);

}
function isCollide(a,b){
    aRect = a.getBoundingClientRect();//actual car
    bRect= b.getBoundingClientRect();//rest of car
    return !((aRect.bottom < bRect.top)||(aRect.top > bRect.bottom)||(aRect.right < bRect.left)||(aRect.left  > bRect.right));

}
function movelines(){
    let lines = document.querySelectorAll('.lines');
    lines.forEach(function(item){
        if(item.y>700)// ki jab ye 700 tak pahuch jaye tho usko vapas bhj do 750 pe and foreach loop pe chl jayenga.
        {
            item.y -=750;
        }
        item.y += player.speed;
        item.style.top =item.y+"px";

    })

}

function endGame(){
    player.start=false;
    startScreen.classList.remove('hide'); // this is basically given to desepear the first page on click and bring the gamearea to the display
    startScreen.innerHTML = "<p>Game over<br> your final score is " + player.score +"  <br>Click here to restart the game</p>"
}
function movecars(car){
    let enemy = document.querySelectorAll('.enemy');
    enemy.forEach(function(item){
        if(isCollide(car, item)){
            // console.log('booommm hit');
            endGame();
            
        }

        if(item.y>750)// ki jab ye 700 tak pahuch jaye tho usko vapas bhj do 750 pe and foreach loop pe chl jayenga.
        {
            item.y =-350;
            item.style.left = Math.floor(Math.random()*350)+"px";

        }
        item.y += player.speed;
        item.style.top =item.y+"px";


    })

}



function gamePlay() {
    // console.log('hey i am clicked');
    let car = document.querySelector('.car');//select the query
    let road = gameArea.getBoundingClientRect();// The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    // console.log(road);

    if (player.start) {// agar start pe click hai tho loop run hoo 
        if (keys.ArrowUp && player.y > (road.top) + 80) // here in all buttons add the limit that the car should not go beyond the limit.
        {
            player.y -= player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
            player.x += player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom) - 85) {
            player.y += player.speed;
        }

        movelines();
        movecars(car);

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        window.requestAnimationFrame(gamePlay); // agar hame ye loop continuously chalana hai to requestanimation ko aur ek bar declare kro
        

        console.log(player.score++);
        player.score++;
        let ps = player.score -2;
        score.innerHTML = "Score " + ps ;        
    }

}
function start() {

    //gameArea.classList.remove('hide'); // this is basically given to desepear the first page on click and bring the gamearea to the display
    
    startScreen.classList.add('hide'); // this is basically given to desepear the first page on click and bring the gamearea to the display
    gameArea.innerHTML = "";
    player.start = true;
    player.score = 0;


    window.requestAnimationFrame(gamePlay);///start krneka tarika



    // for the lines on the road use for loop and generate lines 
    for(x=0;x<5;x++){
    let roadline = document.createElement('div');
    roadline.setAttribute('class', 'lines');
    roadline.y =((x*150));
    roadline.style.top =roadline.y+"px";
    gameArea.appendChild(roadline)

}



// here we have created the div and class inside it that is our car of color red
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    //  car.innerText= "hey i am ur car";
    gameArea.appendChild(car);

    //move car in all four direction

    player.x = car.offsetLeft; // this gives the value of position from left
    player.y = car.offsetTop; // this gives the value of position from top

    //  console.log(car.offsetTop);
    //  console.log(car.offsetLeft);

    for(x=0;x<3;x++){
        let enemycar = document.createElement('div');
        enemycar.setAttribute('class', 'enemy');
        enemycar.y =((x+1)*350)* -1;
        enemycar.style.top =enemycar.y+"px";
        enemycar.style.backgroundColor= '#2d3436';
        enemycar.style.left = Math.floor(Math.random()*350)+"px";
        gameArea.appendChild(enemycar)
    
    }

}