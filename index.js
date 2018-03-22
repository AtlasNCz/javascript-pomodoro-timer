function doFirst(){
	clock = document.getElementById("clock");
	pauseButton = document.getElementById("pauseButton");
	
	//..........variables......//
	seconds = 0;
	minutes = 25;
	timerid = 0;
	isRunning = false;

	//.........Alarm Audio element.........//
	audio = new Audio('alarm.mp3');
	audio.volume = 0.05;
}

///////   buttons functions    ////////
function startTimer(time){
	stopWatch();
	startWatch(time,0);
}
function pomodoroStart(){
	stopWatch();
	startWatch(25,0);
}
function shortBreakStart(){
	stopWatch();
	startWatch(5,0);
}
function longBreakStart(){
	stopWatch();
	startWatch(10,0);
}
//......timer update function.......//
function timerRun(){
	seconds--;
	if(seconds=== -1 & minutes === 0){
		buzz();
		seconds = 0;
		stopWatch();
	}else if(seconds === -1 & minutes > 0){
		seconds = 59;
		minutes--;
	}
	updateClock(minutes,seconds);
}
function stopWatch(){
	if(isRunning===true){
		clearInterval(timerId);
		pauseButton.innerHTML = "Start";
	}
}
// makes noise
function buzz(){
	audio.play();
}
//Button Start and pause
function startPause(){
	if(isRunning===false){
		startWatch(minutes,seconds)
		isRunning=true;
	}else{
		stopWatch();
		pauseButton.style.background="green";
		audio.pause();
		isRunning=false;
	}
}
function startWatch(m,s){
	pauseButton.style.background="red";
	pauseButton.innerHTML = "Pause";
	audio.pause();
	updateClock(m,s);
	minutes = m;
	seconds = s;
	isRunning = true;
	timerId =setInterval(timerRun, 1000);
}
function updateClock(m,s){
	min = "00"+ m;
	sec = "00"+ s; 
	min = min.slice(-2);
	sec = sec.slice(-2);
	clock.innerHTML = min+":"+sec;
}