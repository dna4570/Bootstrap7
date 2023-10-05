'use script'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
function a(){
	b();
	ver c;
}
function b(){
	ver d;
}
a();
var d;
var btn1 =
	document.getElementByid("btnid1");
var btn2 =
	document.getElementByid("btnid2");
	btn1.addEventListener("Click",
fun_name, false);
	btn2b.addEventListener("Click",
function fun_name()
{
	alert("Function Called");
}
function autorun()
{
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;
}
function myFunction() {
let x = document.getElementById("demo");
x.style.fontSize = "25px";
x.style.color = "red";
}

function autorun(){
	console.log("test");
	if (window.addEventListener) window.addEventListener("load", autorun, false);
	else if (window.attachEvent) window.attachEvent("onload", autorun);
	else window.onload = autorun;
}

$(function(){
	$("h1").css("color","lightgray");
})

$(function(){
	$("p").css("color","red");
})

let mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	mousewheel: {
		forceToAxis: false,
		invert: false
	},
	keyboard: true
});

new Vue({
    el: '#app',
    data: {
        message: 'Hello VueJS!'
    }
})

1   $(function () {
	2       $("#mainForm").submit(function() {
	3           $("#hideModal").modal();
	4           return true;
			});
		});
