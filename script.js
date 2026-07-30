const startButton = document.getElementById('startButton');
const timeButtons = document.getElementById('timeButtons');
var time = 0;
var interval = 0;
var working = false;

 stopButton.style.display = 'none';
function showTime(timeInSeconds){

    var seconds = timeInSeconds%60;
    var minutes = timeInSeconds/60;
    seconds = (seconds.toFixed(0));
    minutes = Math.floor(minutes);
    document.getElementById('timer').innerHTML = (String(minutes)).padStart(2,0) + ":" + seconds.padStart(2,0);
    return null;
    
}

function timer(){
    selectedTime = time -1;
    showTime(selectedTime);
    time = selectedTime -1;

}

startButton.onclick = () => {

    timeButtons.style.display = 'none'; // buttons disapear
    startButton.style.display = 'none';
    stopButton.style.display = 'block';
    time = document.getElementById('study').value; //gets main seconds value from dropdown
    showTime(time);
    timeInterval = setInterval(timer, 1000);
;

stopButton.onclick = () => {
    clearInterval(timeInterval);
    stopButton.style.display = 'none';
    startButton.style.display = 'block';
    time = document.getElementById('study').value;
    showTime(time);
}
    
    


    





    
    
     // time vai regredir de segundo em segundo

    

// quando time acabar regressao para
// quando regressao parar aparece um aviso na tela


    
};




// function showTime(t){

//     var seconds = 

//     document.getElementById('timer').innerHTML = current_time;

// }
    

// function timer(t){
//     if  (working = false){
//         working = true;
//         time = t;
//         showTime();
//         interval = setInterval(showTime,1000);


//     }
// }


