const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const continueButton = document.getElementById('continueButton');
const addButton = document.getElementById('moreTimeButton'); // Fixed ID match
const subButton = document.getElementById('lessTimeButton');
const timerRing = new Audio("assets/alarmClockSound.mp3");
const pandaSleeping1 = document.getElementById('pandaSleeping1');
const pandaSleeping2 = document.getElementById('pandaSleeping2');

var timeStudy = 0
var interval = 0;

//shows time in seconds (300) as timer form 05:00 in element 'timer'
function showTime(timeInSeconds){

    var seconds = timeInSeconds%60;
    var minutes = timeInSeconds/60;
    seconds = (seconds.toFixed(0));
    minutes = Math.floor(minutes);
    document.getElementById('timer').innerHTML = (String(minutes)).padStart(2,0) + ":" + seconds.padStart(2,0);
    return null;
    
}

//elements dissapears
function disappear(item){
    item.style.display = 'none';
}

//element shows
function show(item){
    item.style.display = 'block';
}

//subtracts 1 second and shows item in the timer 
function timer(){
    

    
    if(timeStudy > 0){
    selectedTime = timeStudy -1;
    showTime(selectedTime);
    timeStudy -=1; 
    
        if((selectedTime % 2) == 0){
                show(pandaSleeping1);
                disappear(pandaSleeping2);
        } else if((selectedTime % 2) == 1){
                disappear(pandaSleeping1);
                show(pandaSleeping2);
                
        }

    }else if(timeStudy == 0){
        showTime(timeStudy);
        timerRing.play();
        disappear(pandaSleeping1);
        show(pandaAwake);
        return null;
    }

}

//subtracts 5 min
function subtract(time){
    if (time > 0 ){
        time = time - 300;
    }
    return time;
}

//adds 5 min
function add(time){
    if (time < 3600 ){
        time = time + 300;
    }
    
    
     return time;
}

disappear(stopButton);
disappear(resetButton);
disappear(continueButton);
disappear(pandaSleeping1);
disappear(pandaSleeping2);

addButton.addEventListener('click', () =>{
    timeStudy = add(timeStudy);
    showTime(timeStudy);
    
    
});
subButton.addEventListener('click', () => {
    timeStudy = subtract(timeStudy);
    showTime(timeStudy);
});



startButton.addEventListener('click',() => {

    disappear(pandaAwake);
    disappear(addButton);
    disappear(subButton);
    disappear(startButton);
    show(pandaSleeping1);
    show(stopButton);
    show(resetButton);
    show(continueButton);
    showTime(timeStudy);
    timeInterval = setInterval(timer, 1000);

});

stopButton.addEventListener('click', () => {
    console.log("this is working");
    clearInterval(timeInterval);

    
    
});

continueButton.addEventListener('click', () => {

    showTime(timeStudy);
    timeInterval = setInterval(timer, 1000);

});

resetButton.addEventListener('click',() => {
    timeStudy = 0;
    document.getElementById('timer').innerHTML = "00:00";
    clearInterval(timeInterval);
    show(addButton);
    show(subButton);
    show(startButton);
    disappear(resetButton);
    disappear(continueButton);
    disappear(stopButton);
    disappear(pandaSleeping1);
    disappear(pandaSleeping2);
    show(pandaAwake);

});
