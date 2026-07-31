const startButton = document.getElementById('startButton');
const timeButtons = document.getElementById('timeButtons');
var time = 0;
var interval = 0;
var working = false;
var studyOrBreak = " ";


function showTime(timeInSeconds){

    var seconds = timeInSeconds%60;
    var minutes = timeInSeconds/60;
    seconds = (seconds.toFixed(0));
    minutes = Math.floor(minutes);
    document.getElementById('timer').innerHTML = (String(minutes)).padStart(2,0) + ":" + seconds.padStart(2,0);
    return null;
    
}

function timer(){
    
    if(timeStudy > 0){
    selectedTime = timeStudy -1;
    showTime(selectedTime);
    timeStudy = selectedTime -1;
    }else if(timeStudy == 0){
        return null;
    }
    
        

}

function disappear(item){
    item.style.display = 'none';
}

function show(item){
    item.style.display = 'block';
}
disappear(stopButton);
disappear(resetButton);
disappear(continueButton);

startButton.onclick = () => {

    studyOrBreak = "study"
    disappear(timeButtons);
    disappear(startButton);
    show(stopButton);
    show(resetButton);
    timeStudy = document.getElementById('study').value;
    timeBreak = document.getElementById('break').value; //gets main seconds value from dropdown
    showTime(timeStudy);
    timeInterval = setInterval(timer, 1000);

}

stopButton.onclick = () => {
    clearInterval(timeInterval);
    disappear(stopButton);
    show(continueButton);
    
    
}

continueButton.onclick = () => {
    disappear(continueButton);
    show(stopButton);
    showTime(timeStudy);
    timeInterval = setInterval(timer, 1000);

}

resetButton.onclick = () => {
    document.getElementById('timer').innerHTML = "00:00";
    clearInterval(timeInterval);
    show(timeButtons);
    show(startButton);
    disappear(resetButton);
    disappear(continueButton);

}



    
    


    





    
    
     // time vai regredir de segundo em segundo

    

// quando time acabar regressao para
// quando regressao parar aparece um aviso na tela


    





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


