// selectors
window.document.onload = landingSection();
document.getElementById("getStarted").addEventListener("click", question1);
document.getElementById('a').addEventListener("click",nextQuestion);
document.getElementById('b').addEventListener("click",nextQuestion);
document.getElementById('c').addEventListener("click",nextQuestion);
document.getElementById('idk').addEventListener("click",nextQuestion);



// functions
// note to self: put event listeners on global scope
var value = 0;
var time = "";
var q1 = false;
var q2 = false;
var q3 = false;
var q4 = false;
var q5 = false;
function landingSection(){
	var x = 
	`
	<div id="landing">
       <h1>How Much to make a WordPress site?</h1>
       <h3>Website cost calculator</h3>
       <p> Ever wondered how much a website costs? This is a simple questionaire to give you a rough estimate.</p>
       <a class="btn btn-primary" id="getStarted">Lets get started! </a>
    </div>
	`;

	document.getElementById('app').innerHTML = x;
    // document.getElementById('app').style.margin = '0';
	document.getElementById('main').style.backgroundColor = '#fff';
}
function nextQuestion(){
if(q1 = true){}
else if( q2 = true){}
else if( q3 = true){}
else if( q4 = true){}
else if( q5 = true){}
}
function question1(){
	var x=
	`
	<div id="q1">
		<h1>How many pages do you need?</h1>
		<h3>(ie. how it works, contact us, team, about)</h3>
		<ul id=choices>
		<li><a class="btn btn-info" id="a">1-3</a></li>
		<li><a class="btn btn-info" id="b">4-6</a></li>
		<li><a class="btn btn-info" id="c">7+&nbsp;</a></li>
		<li><a class="btn btn-info" id="idk">I dont know</a></li>
		</ul>
	</div>
	`;

	document.getElementById('app').innerHTML = x;
}
function question2(){
	var x=
	`
	<div id="q2">
		<h1>Do people have to login?</h1>
		<ul id=choices>
		<li><a class="btn btn-info" id="a">yes</a></li>
		<li><a class="btn btn-info" id="b">no</a></li>
		<li><a class="btn btn-info" id="idk">I dont know</a></li>
		</ul>
	</div>
	`;

	document.getElementById('app').innerHTML = x;
}
function question2b(){
	var x =
	`
	<div id="q2b">
		<h1>How will users login?</h1>
		<ul id=choices>
		<li><a class="btn btn-info" id="a">Social Media(twitter, facebook)</a></li>
		<li><a class="btn btn-info" id="b">account signup</a></li>
		<li><a class="btn btn-info" id="idk">I dont know</a></li>
		</ul>
	</div>
	`
	document.getElementById('app').innerHTML=x;
}
function question3(){
	var x=
	`
	<div id="q3">
		<h1>Will people create personal profiles?</h1>
		<ul id=choices>
		<li><a class="btn btn-info" id="a">yes</a></li>
		<li><a class="btn btn-info" id="b">no</a></li>
		<li><a class="btn btn-info" id="idk">I dont know</a></li>
		</ul>
	</div>
	`;

	document.getElementById('app').innerHTML = x;
}
function question4(){
	var x=
	`
	<div id="q4">
		<h1>Will you need to accept payments?</h1>
		<ul id=choices>
		<li><a class="btn btn-info" id="a">yes</a></li>
		<li><a class="btn btn-info" id="b">no</a></li>
		<li><a class="btn btn-info" id="idk">I dont know</a></li>
		</ul>
	</div>
	`;

	document.getElementById('app').innerHTML = x;
}
function question5(){
	var x=
	`
	<div id="q5">
		<h1>Will people rate or review things?</h1>
		<ul id=choices>
		<li><a class="btn btn-info" id="a">yes</a></li>
		<li><a class="btn btn-info" id="b">no</a></li>
		<li><a class="btn btn-info" id="idk">I dont know</a></li>
		</ul>
	</div>
	`;

	document.getElementById('app').innerHTML = x;
}

// function valueUp(){
//  var value = value + 5000;
//  console.log(value);
// 
// }