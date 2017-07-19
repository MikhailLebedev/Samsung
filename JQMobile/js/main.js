$("#two >.ui-content").css("color", "red");
$("#two >.ui-content").css("font-size", "8px");

var canvas=document.getElementById("draw")
var x=canvas.getContext("2d");
x.font = "40pt"
x.fillStyle ="black"
x.fillText("Tizen", 15, 40);  
x.fillStyle ="blue"
x.fillText("JavaScript", 15, 50);
x.fillText("canvas", 30, 80); 
x.fillStyle ="red"
x.fillText("HTML5", 10, 75);   

canvas=document.getElementById("draw2");
x=canvas.getContext("2d");

var i, j;
x.fillStyle ="black"
var cnt = 1;

for (i = 0; i < 8; i++) {
	for (j = 0; j < 8; j++){
		if (cnt > 0) {
			x.fillRect(i * 20,j * 20,20,20);
		}
		cnt *= -1;
	}
	cnt *= -1;
}




function jump(t) {
	canvas=document.getElementById("draw3");
	x=canvas.getContext("2d");
	x.clearRect(0,0,canvas.width, canvas.height);
	x.fillStyle ="black"
	x.beginPath();
	var v = -20;
	var y = 150 + v * t + 2 * t * t / 2
	x.arc(100, y, 10, 0, 2 * Math.PI);
	if (y > 140) {
		t = 1;
	}
	x.fill();
	x.fillStyle ="black"
	x.fillRect(50,150,100,10);
	setTimeout(function(){jump(t+1);}, 100);
}
jump(1);








$(document).ready(function(){
	   $("#draw").draggable({stack:"#drop"});
	   $("#drop").droppable({
	      over:function(){
	         $("#draw").css("border-color","#00ff00");
	         $("#drop").css("border-color","#00ff00");
	      },
	      out:function(){
		         $("#draw").css("border-color","#ff0000");
		         $("#drop").css("border-color","#ff0000");
		      },
	      drop:function(){
	         $("#draw").css("visibility","hidden");
	         $("#drop").css("border-color","#ffffff");
	         setTimeout("alert('Перемещение завершено успешно.');", 10);
	      }
	   });
	});

var startTime;
var checkTime;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

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
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
