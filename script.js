const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const continueButton = document.getElementById('continueButton');
const addButton = document.getElementById('moreTimeButton');
const subButton = document.getElementById('lessTimeButton');
const timerRing = new Audio("assets/alarmClockSound.mp3");
const pandaSleeping1 = document.getElementById('pandaSleeping1');
const pandaSleeping2 = document.getElementById('pandaSleeping2');
const pandaAwake1 = document.getElementById('pandaAwake');
const pandaAwake2 = document.getElementById('pandaAwake2');

const light = document.getElementById('light');
const visualTag = document.getElementById('textStudyOrBreak');
const MAX_STUDY_SESSIONS = 3; 

let timeInterval = 0;
let studySession = 0;
let studyOrBreak = 'break';
let timeStudy = 0;
let timeBreak = 0;
let working = false;

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
                
                if(studyOrBreak === 'study'){
                    disappear(pandaAwake1);
                    disappear(pandaAwake2);
                    show(pandaSleeping1);
                    disappear(pandaSleeping2);
                }else{
                    disappear(pandaSleeping1);
                    disappear(pandaSleeping2);
                    show(pandaAwake1);
                    disappear(pandaAwake2);
                    }
            } else if((selectedTime % 2) == 1){

                if(studyOrBreak === 'study'){
                    disappear(pandaAwake1);
                    disappear(pandaAwake2);
                    show(pandaSleeping2);
                    disappear(pandaSleeping1);
                }else{
                    disappear(pandaSleeping1);
                    disappear(pandaSleeping2);
                    show(pandaAwake2);
                    disappear(pandaAwake1);
                    }
 

            }

        }else if(timeStudy == 0){
            showTime(timeStudy);
            timerRing.play();
            disappear(pandaSleeping1);
            show(pandaAwake1);
             working = false;
            return null;
        }

        
        

        if (timeStudy == 0){
        if (studySession <= 3){
        if (studyOrBreak === 'study'){
            console.log('hey this works study or break');
           timeStudy = timeBreak; 
           studyBreakSwitch();
           return null;
        }else {
            studySession = studySession+ 1;
            timeStudy = ogTime;
            studyBreakSwitch();
            
            return null;
        }} else {
            studySession = 0;
            clear(timeInterval);
            timer.innerHTML = 'DONE!';
        }}



    }



// Subtracts 5 minutes
function subtract(time){
    if (time > 0 ){
        time = time - 10;
    }
    return time;
}

// Adds 5 minutes
function add(time){
    if (time < 3600 ){
        time = time + 10;
    }


     return time;
}

function studyBreakSwitch(){
    if (studyOrBreak === 'break'){
        console.log('break to study');

        studyOrBreak = 'study';
        visualTag.innerHTML = ' STUDY';
        light.classList.remove('break-light');
        light.classList.add('study-light');
        disappear(pandaAwake1);
        show(pandaSleeping1);


    } else if (studyOrBreak === 'study'){
        console.log('study to break  ');

        studyOrBreak = 'break';
        visualTag.innerHTML = ' BREAK';
        light.classList.remove('study-light');
        light.classList.add('break-light');
        disappear(pandaSleeping1);
        disappear(pandaSleeping2);
        show(pandaAwake1);
    }
}

disappear(stopButton);
disappear(resetButton);
disappear(continueButton);
disappear(pandaSleeping1);
disappear(pandaSleeping2);
disappear(pandaAwake2);

addButton.addEventListener('click', () =>{
    timeStudy = add(timeStudy);
    showTime(timeStudy);

});
subButton.addEventListener('click', () => {
    timeStudy = subtract(timeStudy);
    showTime(timeStudy);
});
startButton.addEventListener('click',() => {

    let ogTime = timeStudy;
    timeBreak = timeStudy * 0.2;

    studyBreakSwitch();
    working = true;

    disappear(pandaAwake1);
    disappear(pandaAwake2);
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
    studyBreakSwitch();


});

continueButton.addEventListener('click', () => {

    if (working == false){
    showTime(timeStudy);
    timeInterval = setInterval(timer, 1000);}
    studyBreakSwitch()

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
    studyBreakSwitch()
    
    working = false;
    
});