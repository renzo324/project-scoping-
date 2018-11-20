// selectors
window.document.onload = landingSection();
document.getElementById("getStarted").addEventListener("click", question1);




// functions
// note to self: put event listeners on global scope
var value = 0;
var time = "";
var arr=[];
var q1 = false;
var q2 = false;
var q3 = false;
var q4 = false;
var q5 = false;

function landingSection() {
    var arr =[0];
    var x =
        `<div id="value">
        </div>
	<div id="landing">
       <h1>How Much to make a WordPress site?</h1>
       <h3>Website cost calculator</h3>
       <p> Ever wondered how much a website costs? This is a simple questionaire to give you a rough estimate.</p>
       <a class="btn btn-primary" id="getStarted">Lets get started! </a>
    </div>
	`;

	document.getElementById('app').innerHTML = x;
	var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
	document.getElementById('value').innerHTML = val;
    
    // document.getElementById('app').style.margin = '0';
    document.getElementById('main').style.backgroundColor = '#fff';
}

function question1() {
    var x =
        `
        <div id="value">
        </div>
	<div id="q1">
		<h1>How many pages do you need?</h1>
		<h3>(ie. how it works, contact us, team, about)</h3>
		<div class="btn-group btn-group-toggle" data-toggle="buttons" id=choices>
			<label class="btn btn-info " >
		    	<input type="radio" name="options" id="option1" autocomplete="off" > &nbsp;1-3&nbsp;
		  	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option2" autocomplete="off"> &nbsp;4-6&nbsp;
	 	 	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option3" autocomplete="off"> &nbsp;&nbsp;7+&nbsp;&nbsp;
	 	 	</label>
			<label class="btn btn-info active">
	   			<input type="radio" name="options" id="option4" autocomplete="off"> I don't know
	 	 	</label>
		</div>
		<div class="navButts">
			<a class="btn btn-info" id="next">Next Question</a>
		</div>
	</div>
	
	`;
	function navigate(){
		if(document.getElementById('option1').checked){
			
			arr.push(5000);
			console.log(arr);
		}else if(document.getElementById('option2').checked){
			arr.push(7500);
			console.log(arr);
		}else if (document.getElementById('option3').checked){
			arr.push(10000);
			console.log(arr);
		}else{
			arr.push(0);
			console.log(arr);
		}
		
		question2();
	}
	var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
    document.getElementById('app').innerHTML = x;
    document.getElementById('value').innerHTML = val;
    document.getElementById('next').addEventListener("click",navigate);

}

function question2() {
    var x =
        `
        <div id="value">
        </div>
	<div id="q2">
		<h1>Do people have to login?</h1>
		<div class="btn-group btn-group-toggle" data-toggle="buttons" id=choices>
			<label class="btn btn-info " >
		    	<input type="radio" name="options" id="option1" autocomplete="off" > &nbsp;Yes&nbsp;
		  	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option2" autocomplete="off"> &nbsp;No &nbsp;
	 	 	</label>
			
			<label class="btn btn-info active">
	   			<input type="radio" name="options" id="option4" autocomplete="off"> I don't know
	 	 	</label>
		</div>
		<div class="navButts">
			<a class="btn btn-info" id="next">Next Question</a>
			<a class="btn btn-info" id="prev">Prev Question</a>
		</div>
	</div>
	`;
	function navigate(){
		if(document.getElementById('option1').checked) {
			arr.push(3000);
			console.log(arr);
			question2b();
		}
		else{
			arr.push(0);
			question3();
		}
	}
	var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
    document.getElementById('app').innerHTML = x;
    document.getElementById('value').innerHTML = val;
    document.getElementById('next').addEventListener("click", navigate);
    document.getElementById('prev').addEventListener("click", question1);
}

function question2b() {
    var x =
        `
        <div id="value">
        </div>
	<div id="q2b">
		<h1>How will users login?</h1>
		<div class="btn-group btn-group-toggle" data-toggle="buttons" id=choices>
			<label class="btn btn-info " >
		    	<input type="radio" name="options" id="option1" autocomplete="off" > Email
		  	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option2" autocomplete="off"> Social Media
	 	 	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option3" autocomplete="off"> Account Signup
	 	 	</label>
			<label class="btn btn-info active">
	   			<input type="radio" name="options" id="option4" autocomplete="off"> I don't know
	 	 	</label>
		</div>
		<div class="navButts">
			<a class="btn btn-info" id="next">Next Question</a>
			<a class="btn btn-info" id="prev">Prev Question</a>
		</div>
	</div>
	`;
	function navigate(){
		if(document.getElementById('option1').checked){
			
			arr.push(5000);
			console.log(arr);
		}else if(document.getElementById('option2').checked){
			arr.push(7500);
			console.log(arr);
		}else if (document.getElementById('option3').checked){
			arr.push(10000);
			console.log(arr);
		}else{
			arr.push(0);
			console.log(arr);
		}
		question2c();
	}
   	var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
    document.getElementById('app').innerHTML = x;
    document.getElementById('value').innerHTML = val;
    document.getElementById('next').addEventListener("click", navigate);
    document.getElementById('prev').addEventListener("click", question2);
}

function question2c() {
    var x =
        `
        <div id="value">
        </div>
	<div id="q2c">
		<h1>Will people create personal profiles?</h1>
		<div class="btn-group btn-group-toggle" data-toggle="buttons" id=choices>
			<label class="btn btn-info " >
		    	<input type="radio" name="options" id="option1" autocomplete="off" > &nbsp;Yes&nbsp;
		  	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option2" autocomplete="off"> &nbsp;No &nbsp;
	 	 	</label>
			
			<label class="btn btn-info active">
	   			<input type="radio" name="options" id="option4" autocomplete="off"> I don't know
	 	 	</label>
		</div>
		<div class="navButts">
			<a class="btn btn-info" id="next">Next Question</a>
			<a class="btn btn-info" id="prev">Prev Question</a>
		</div>
	</div>
	`;
	function navigate(){
		if(document.getElementById('option1').checked) {
			arr.push(3000);
			console.log(arr);
			;
		}
		else{
			arr.push(0);
			
		}
		question3();
	}

    var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
    document.getElementById('app').innerHTML = x;
    document.getElementById('value').innerHTML = val;
    document.getElementById('next').addEventListener("click", navigate);
    document.getElementById('prev').addEventListener("click", question2b);
}

function question3() {
    var x =
        `
        <div id="value">
        </div>
	<div id="q3">
		<h1>Will you need to accept payments?</h1>
		<div class="btn-group btn-group-toggle" data-toggle="buttons" id=choices>
			<label class="btn btn-info " >
		    	<input type="radio" name="options" id="option1" autocomplete="off" > &nbsp;Yes&nbsp;
		  	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option2" autocomplete="off"> &nbsp;No &nbsp;
	 	 	</label>
			
			<label class="btn btn-info active">
	   			<input type="radio" name="options" id="option4" autocomplete="off"> I don't know
	 	 	</label>
		</div>
		<div class="navButts">
			<a class="btn btn-info" id="next">Next Question</a>
			<a class="btn btn-info" id="prev">Prev Question</a>
		</div>
	</div>
	`;
	function navigate(){
		if(document.getElementById('option1').checked) {
			arr.push(7500);
			console.log(arr);
			
		}
		else{
			arr.push(0);
			
		}
		question4();
	}
	var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
    document.getElementById('app').innerHTML = x;
    document.getElementById('value').innerHTML = val;
	document.getElementById('next').addEventListener("click", navigate);
    document.getElementById('prev').addEventListener("click", question2);
   
}

function question4() {
    var x =
        `
        <div id="value">
        </div>
	<div id="q4">
		<h1>Will people rate or review things?</h1>
		<div class="btn-group btn-group-toggle" data-toggle="buttons" id=choices>
			<label class="btn btn-info " >
		    	<input type="radio" name="options" id="option1" autocomplete="off" checked> &nbsp;Yes&nbsp;
		  	</label>
			<label class="btn btn-info">
	   			<input type="radio" name="options" id="option2" autocomplete="off"> &nbsp;No &nbsp;
	 	 	</label>
			
			<label class="btn btn-info active">
	   			<input type="radio" name="options" id="option4" autocomplete="off"> I don't know
	 	 	</label>
		</div>
		<div class="navButts">
			<a class="btn btn-info" id="next">Next Question</a>
			<a class="btn btn-info" id="prev">Prev Question</a>
		</div>
	</div>
	`;
	function navigate(){
		if(document.getElementById('option1').checked) {
			arr.push(7500);
			console.log(arr);
			
		}
		else{
			arr.push(0);
			
		}
		question4();
	}
    var val = arr.reduce(function(acc, val) { return acc + val; }, 0)
    document.getElementById('app').innerHTML = x;
    document.getElementById('value').innerHTML = val;
    document.getElementById('next').addEventListener("click", navigate);
}

// function valueUp(){
//  var value = value + 5000;
//  console.log(value);
// 
// }