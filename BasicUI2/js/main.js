$("#two >.ui-content").css("color", "red");


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
	         alert("Перемещение завершено успешно.");
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
