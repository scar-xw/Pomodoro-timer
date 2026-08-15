const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const continueButton = document.getElementById('continueButton');
const addButton = document.getElementById('moreTimeButton');
const subButton = document.getElementById('lessTimeButton');
const timerRing = new Audio("assets/alarmClockSound.mp3");
const pandaSleeping1 = document.getElementById('pandaSleeping1');
const pandaSleeping2 = document.getElementById('pandaSleeping2');
const pandaAwake = document.getElementById('pandaAwake');
let timeInterval = 0;

var timeStudy = 0;
var working = false;

// Shows time in seconds (e.g. 300) as a "05:00" timer format in the 'timer' element
function showTime(timeInSeconds){

    var seconds = timeInSeconds % 60;
    var minutes = timeInSeconds / 60;
    seconds = (seconds.toFixed(0));
    minutes = Math.floor(minutes);
    document.getElementById('timer').innerHTML = (String(minutes)).padStart(2,0) + ":" + seconds.padStart(2,0);
    return null;

}

// Hides an element
function disappear(item){
    item.style.display = 'none';
}

// Shows an element
function show(item){
    item.style.display = 'block';
}

// Subtracts 1 second and updates the timer display
function timer(){

        working = true;
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
             working = false;
            return null;
        }

    }



// Subtracts 5 minutes
function subtract(time){
    if (time > 0 ){
        time = time - 300;
    }
    return time;
}

// Adds 5 minutes
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


    working = true;

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
    working = false;
    clearInterval(timeInterval);


});

continueButton.addEventListener('click', () => {

    if (working == false){
    showTime(timeStudy);
    timeInterval = setInterval(timer, 1000);}

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
    working = false;

});