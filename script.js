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
const timerDisplay = document.getElementById('timer');
const bottomLight1 = document.getElementById('bottomLight1');
const bottomLight2 = document.getElementById('bottomLight2');
const bottomLight3 = document.getElementById('bottomLight3');


const light = document.getElementById('light');
const visualTag = document.getElementById('textStudyOrBreak');
const MAX_STUDY_SESSIONS = 3; 

let timeInterval = 0;
let studySession = 1;
let studyOrBreak = 'break';
let timeStudy = 0;
let timeBreak = 0;
let ogTime = timeStudy;
let working = false;

function showTime(timeInSeconds){

    var seconds = timeInSeconds % 60;
    var minutes = timeInSeconds / 60;
    seconds = (seconds.toFixed(0));
    minutes = Math.floor(minutes);
    timerDisplay.innerHTML = (String(minutes)).padStart(2,0) + ":" + seconds.padStart(2,0);
    return null;

}

function disappear(item){
    item.style.display = 'none';
}

function show(item){
    item.style.display = 'block';
}
function timer(){

    working = true;

    if(timeStudy > -1){
        showTime(timeStudy);
        timeStudy -=1;
        

        if((timeStudy % 2) == 0){
                
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
        } else if((timeStudy % 2) == 1){
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

    }
        if (timeStudy == -1){
            
            if (studySession < 3){
                console.log(studySession);
                if (studyOrBreak === 'study'){
                    timeStudy = timeBreak; 
                    timerRing.play();
                    studyBreakSwitch();
                    return null;
                }else {
                    studySession = studySession+ 1;
                    timeStudy = ogTime;
                    timerRing.play();
                    studyBreakSwitch();

                    if (studySession == 2){
                        bottomLight1.classList.remove('study-light');
                        bottomLight1.classList.add('break-light');
                    } else if (studySession == 3){
                        bottomLight2.classList.remove('study-light');
                        bottomLight2.classList.add('break-light');
                    }

                    return null;
            }} else {
                bottomLight3.classList.remove('study-light');
                bottomLight3.classList.add('break-light');
                timerDisplay.innerHTML = 'Done!';
                studySession = 0;
                clearInterval(timeInterval);
                working = false;
        }}

    }

function subtract(time){
    if (time > 0 ){
        time = time - 10;
    }
    return time;
}

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

    ogTime = timeStudy;
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
    timerDisplay.innerHTML = "00:00";
    clearInterval(timeInterval);

    bottomLight1.classList.add('study-light');
    bottomLight2.classList.add('study-light');
    bottomLight3.classList.add('study-light');
    show(addButton);
    show(subButton);
    show(startButton);

    disappear(resetButton);
    disappear(continueButton);
    disappear(stopButton);
    studyBreakSwitch()
    
    working = false;
    
});