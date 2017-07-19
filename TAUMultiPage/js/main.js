var startTime;
var checkTime;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");
	tizen.humanactivitymonitor.getHumanActivityData('PEDOMETER', onsuccessCB, onerrorCB);
	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	Time();
	tizen.humanactivitymonitor.start('PEDOMETER', onchangedCB)
	
}	
	function Time() {
	tizen.systeminfo.getPropertyValue('BATTERY', onPowerSuccessCallback);
	tizen.systeminfo.getPropertyValue('CPU', cpu);
	tizen.humanactivitymonitor.getHumanActivityData('PEDOMETER', onsuccessCB, onerrorCB);
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(Time, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

function onPowerSuccessCallback(battery) {
    /* Log the device battery level to the console */
	document.getElementById('hrm').innerHTML = battery.level;
}

function cpu(cpu) {
    /* Log the device battery level to the console */
	document.getElementById('cpu').innerHTML = cpu.load;
}



function onchangedCB() {
    console.log('You are looking at your smartwatch');
}


function onsuccessCB(hrmInfo) {
	document.getElementById('step').innerHTML = hrmInfo.cumulativeTotalStepCount;
	document.getElementById('freq').innerHTML = hrmInfo.walkingFrequency * 60;
}
function onerrorCB(error) {
	document.getElementById('step').innerHTML= "err";
}



