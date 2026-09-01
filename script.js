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
let timeInterval = null;
let studySession = 1;
let studyOrBreak = 'break'; 
let timeStudy = 0;
let timeBreak = 0;
let ogTime = timeStudy;
let working = false;   

function showTime(timeInSeconds) {     
    var seconds = Math.max(0, timeInSeconds % 60);     
    var minutes = Math.max(0, Math.floor(timeInSeconds / 60));     
    seconds = seconds.toFixed(0);     
    timerDisplay.innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');     
}   

function disappear(item) {     
    if (item) item.style.display = 'none'; 
}   

function show(item) {     
    if (item) item.style.display = 'block'; 
} 

function timer() {     
    working = true;     
    if (timeStudy > -1) {         
        showTime(timeStudy);         
        
        if ((timeStudy % 2) === 0) {                             
            if (studyOrBreak === 'study') {                 
                disappear(pandaAwake1);                 
                disappear(pandaAwake2);                 
                show(pandaSleeping1);                 
                disappear(pandaSleeping2);             
            } else {                 
                disappear(pandaSleeping1);                 
                disappear(pandaSleeping2);                 
                show(pandaAwake1);                 
                disappear(pandaAwake2);                 
            }         
        } else {             
            if (studyOrBreak === 'study') {                 
                disappear(pandaAwake1);                 
                disappear(pandaAwake2);                 
                show(pandaSleeping2);                 
                disappear(pandaSleeping1);             
            } else {                 
                disappear(pandaSleeping1);                 
                disappear(pandaSleeping2);                 
                show(pandaAwake2);                 
                disappear(pandaAwake1);                 
            }         
        }         
        timeStudy -= 1;
    }     

    if (timeStudy < 0) {                          
        if (studySession < MAX_STUDY_SESSIONS) {                 
            if (studyOrBreak === 'study') {                     
                timeStudy = timeBreak;                      
                timerRing.play();                     
                studyBreakSwitch();                 
            } else {                     
                studySession += 1;                     
                timeStudy = ogTime;                     
                timerRing.play();                     
                studyBreakSwitch();                      

                if (studySession === 2) {                         
                    bottomLight1.classList.remove('study-light');                         
                    bottomLight1.classList.add('break-light');                     
                } else if (studySession === 3) {                         
                    bottomLight2.classList.remove('study-light');                         
                    bottomLight2.classList.add('break-light');                     
                }             
            } 
        } else {                 
            bottomLight3.classList.remove('study-light');                 
            bottomLight3.classList.add('break-light');                 
            timerDisplay.innerHTML = 'Done!';                 
            studySession = 1;                 
            clearInterval(timeInterval);                 
            working = false;             
        }     
    } 
}   

function subtract(time) {     
    if (time >= 10) {         
        time -= 10;     
    }     
    return time; 
}   

function add(time) {     
    if (time < 3600) {         
        time += 10;     
    }        
    return time; 
}   

function studyBreakSwitch() {     
    if (studyOrBreak === 'break') {          
        studyOrBreak = 'study';         
        visualTag.innerHTML = ' STUDY';         
        light.classList.remove('break-light');         
        light.classList.add('study-light');         
        disappear(pandaAwake1);         
        disappear(pandaAwake2);         
        show(pandaSleeping1);       
    } else {          
        studyOrBreak = 'break';         
        visualTag.innerHTML = ' BREAK';         
        light.classList.remove('study-light');         
        light.classList.add('break-light');         
        disappear(pandaSleeping1);         
        disappear(pandaSleeping2);         
        show(pandaAwake1);     
    } 
}   

// Initial UI Setup
disappear(stopButton); 
disappear(resetButton); 
disappear(continueButton); 
disappear(pandaSleeping1); 
disappear(pandaSleeping2); 
disappear(pandaAwake2);  

addButton.addEventListener('click', () => {     
    if (!working) {
        timeStudy = add(timeStudy);     
        showTime(timeStudy);  
    }
}); 

subButton.addEventListener('click', () => {     
    if (!working) {
        timeStudy = subtract(timeStudy);     
        showTime(timeStudy); 
    }
}); 

startButton.addEventListener('click', () => {     
    if (timeStudy <= 0) return;

    ogTime = timeStudy;     
    timeBreak = Math.floor(timeStudy * 0.2);     
    
    studyOrBreak = 'break';
    studyBreakSwitch();     
    
    working = true;      

    disappear(addButton);     
    disappear(subButton);     
    disappear(startButton);     
    show(stopButton);     
    show(resetButton);     

    showTime(timeStudy);     
    
    clearInterval(timeInterval);
    timeInterval = setInterval(timer, 1000);  
});   

stopButton.addEventListener('click', () => {     
    working = false;     
    clearInterval(timeInterval);     
    
    disappear(stopButton);
    show(continueButton);
});   

continueButton.addEventListener('click', () => {     
    if (!working) {     
        working = true;
        disappear(continueButton);
        show(stopButton);
        
        clearInterval(timeInterval);
        timeInterval = setInterval(timer, 1000);
    }  
});   

resetButton.addEventListener('click', () => {     
    working = false;     
    clearInterval(timeInterval);     

    timeStudy = 0;     
    studySession = 1;
    studyOrBreak = 'study';
    studyBreakSwitch();
    
    timerDisplay.innerHTML = "00:00";     
    
    bottomLight1.classList.remove('break-light');
    bottomLight2.classList.remove('break-light');
    bottomLight3.classList.remove('break-light');
    bottomLight1.classList.add('study-light');     
    bottomLight2.classList.add('study-light');     
    bottomLight3.classList.add('study-light');     
    
    show(addButton);     
    show(subButton);     
    show(startButton);     
    
    disappear(resetButton);     
    disappear(continueButton);     
    disappear(stopButton);     
});