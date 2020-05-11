
const setOfWords = [
    "It is good to shop wisely.",
    "An apple a day keeps the doctor away.",
    "Most people fry their eggs with tomatoes.",
    "CPU architecture and eight processors, and was designed around a CPU developed by electronics company Hitachi. Its games are in CD-ROM format. The system was initially successful in Japan, but failed to sell large numbers in the United States after a surprise launch four months before its scheduled release, and an aggressive price war against Sony's PlayStation. Following the release of the Nintendo 64 in late 1996, the Saturn rapidly lost market share in the U.S.",
    "The Sega Saturn is a 32-bit home video game console developed by Sega. Released in 1994 in Japan, and 1995 in North America and Europe, the Saturn is the successor to the Sega Genesis, and Sega's fourth game console."
]

const msg = document.getElementById('msg');
const typeword = document.getElementById('mywords');

const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomnumber = Math.floor(Math.random() * setOfWords.length);//randomly call any number from 0 to setof words.length ie 3
    // console.log(randomnumber);
    msg.innerText = setOfWords[randomnumber];//return the message 

    //now set date 
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"
    // and set button to done 
}

endPlay = () => {

    //set the date
    let date = new Date();
    endTime = date.getTime();

    //calculate total time 
    let totaltime = ((endTime - startTime) / 1000);
    console.log(totaltime);

    // to count total words we will call a function wordsCounter which is definde below 
    let totalStr = typeword.value;
    let wordCount = wordCounter(totalStr);
    // then we will count the speed ie the words  typed / total time *60.
    let speed = Math.floor((wordCount / totaltime) * 60);
    //display final text 
    let finaltext = "you have a typing speed of  " + speed + " words per minute ";
    //comparewords function is concaatinated with the final text 
    finaltext += compareWords(msg.innerText, totalStr);

    // then final output is printed
    msg.innerText = finaltext;


}
// function is defned  taking 2 strings arguments which are passed fron above 
const compareWords = (str1, str2) => {
    // catch the spaces using split function and initaialise cnt to 0;
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;
    //now add foreach loop in word1 with items(single word) and its index and check that they both matches to each other or not of matches then increment the count by 1

    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            cnt++;
        }

    });

    //finally check the word1 length and subtract the errors from it and return the final output.
    let errorwords = (word1.length - cnt);
    return (cnt + " correct out of " + word1.length + " words and the total number of error are " + errorwords + " ");

}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    // console.log(response);
    return response;
}


//add the  click event to the button 
btn.addEventListener('click', function () {

    // console.log(this);
    //if the text inside the button is start then make it done using the playgame function and then end in the else condition.
    if (this.innerText == 'Start') {
        typeword.desabled = false;// if button is written as start then we will not allow the user to write anything in the textarea
        playGame();
    } else {

        typeword.disabled = true;// if button is not written as start then we will  allow the user to write anything in the textarea ie done will be written their.  
        btn.innerText = "end";
        endPlay();

    }
})