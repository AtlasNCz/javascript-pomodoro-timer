function doFirst(){
	timer = document.getElementById("timer");
	pause_button = document.getElementById("pause_button");
	console.log("awd");
	seconds = 0;
	minutes = 25;
	timerid = 0;
	isRunning = false;

	//.........Alarm Audio element.........//
	alarm = new Audio('alarm.mp3');
	alarm.volume = 0.05;
}

function pomodoro(){
	stop_timer();
	start_timer(25,0);
}
function short_break(){
	stop_timer();
	start_timer(5,0);
}
function long_break(){
	stop_timer();
	start_timer(10,0);
}
//updates the timer
function update_timer(){
	seconds--;
	if(seconds== -1 & minutes == 0){
		buzz();
		seconds = 0;
		stop_timer();
	}else if(seconds == -1 & minutes > 0){
		seconds = 59;
		minutes--;
	}
	update_view(minutes,seconds);
}
// set off the alarm sound
function buzz(){
	alarm.play();
}
// resume/pause the timer 
function resume_pause(){
	if(isRunning===false){
		start_timer(minutes,seconds)
		isRunning=true;
	}else{
		stop_timer();
		pause_button.style.background="green";
		alarm.pause();
		isRunning=false;
	}
}
function start_timer(m,s){
	pause_button.style.background="red";
	pause_button.innerHTML = "Pause";
	alarm.pause();
	update_view(m,s);
	minutes = m;
	seconds = s;
	isRunning = true;
	timerId =setInterval(update_timer, 1000);
}
function stop_timer(){
	if(isRunning===true){
		clearInterval(timerId);
		pause_button.innerHTML = "Start";
	}
}
function update_view(m,s){
	min = "00"+ m;
	sec = "00"+ s; 
	min = min.slice(-2);
	sec = sec.slice(-2);
	timer.innerHTML = min+":"+sec;
}