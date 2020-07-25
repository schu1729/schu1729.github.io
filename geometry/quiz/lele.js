var pos=0;
var correct=0;
var tries=0;
var test, test_status, question, choice, choices, chA, chB, chC, chD, chE;
var track=[];

var questions =[
	{
		question: "What is $3+11=$ ?",
		a: "$13$",
		aMsg: "",
		b: "8",
		bMsg: "",
		c: "4",
		cMsg: "",
		d: "14",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "D",
		attempt: 0
	},
	{
		question: "What is $12-8=$ ?",
		a: "3",
		aMsg: "",
		b: "5",
		bMsg: "",
		c: "4",
		cMsg: "",
		d: "20",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "C",
		attempt: 0
	},
	{
		question: "What is $12+20=$ ?",
		a: "30",
		aMsg: "",
		b: "32",
		bMsg: "",
		c: "22",
		cMsg: "",
		d: "34",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "B",
		attempt: 0
	},
	{
		question: "What is $20-15=$ ?",
		a: "5",
		aMsg: "",
		b: "15",
		bMsg: "",
		c: "10",
		cMsg: "",
		d: "0",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "A",
		attempt: 0
	},
	{
		question: "What is $100-30=$ ?",
		a: "97",
		aMsg: "",
		b: "70",
		bMsg: "",
		c: "77",
		cMsg: "",
		d: "30",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "B",
		attempt: 0
	}
];

function get(x){
	return document.getElementById(x);

}

function renderQuestion(){
	test = get("test");
	if(pos >= questions.length){
		var t="";
		for (var j =0 ;j < questions.length; j++){
			var tr = "<tr>";
			tr += "<td>"+(j+1)+"</td>";
			tr += "<td>"+(questions[j].attempt+1)+"</td>";
			tr += "<td>"+(track[j])+"</td>";
			tr += "</tr>";
			t += tr;
		}
		test.innerHTML = "<h2>Your Results</h2>";	
		test.innerHTML += "<table><tr><th>Question</th><th>Attempts</th><th>&#x2714 / &#x2718</tr>"+t;
		test.innerHTML += "</table>";
		get("test_status").innerHTML ="Test completed";
		pos =0;
		correct=0;

		return false;
	}
	get("test_status").innerHTML = "Question "+(pos+1)+ " of "+questions.length;

	question= questions[pos].question;
	chA = questions[pos].a;
	chB = questions[pos].b;
	chC = questions[pos].c;
	chD = questions[pos].d;
	chE = questions[pos].e;

	msg = [questions[pos].aMsg,questions[pos].bMsg, questions[pos].cMsg, questions[pos].dMsg, questions[pos].eMsg];

	test.innerHTML = "<h3>"+question+"</h3>";

	test.innerHTML +="<label><input type='radio' name='choices' value='A'> "+chA+"</label><br>";
	test.innerHTML +="<label><input type='radio' name='choices' value='B'> "+chB+"</label><br>";
	test.innerHTML +="<label><input type='radio' name='choices' value='C'> "+chC+"</label><br>";
	test.innerHTML +="<label><input type='radio' name='choices' value='D'> "+chD+"</label><br>";
	test.innerHTML +="<label><input type='radio' name='choices' value='E'> "+chE+"</label><br>";
	test.innerHTML +="<button onclick='checkAnswer()'>Submit Answer</button>";
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	check=get("check");
	check.innerHTML =""
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
			choicenum=i;
		}
	}
	
	if(choice == questions[pos].answer){
		correct++;
		track[pos]="right";	
	}else{
		questions[pos].attempt++;
		if(questions[pos].attempt < 3){
			check.innerHTML += "Try Again. " + msg[choicenum];
			MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			return false;
		}
		track[pos]="wrong";
		alert("Please look over the material related to this question.");
		questions[pos].attempt--;
	}	
	pos++;
	
	renderQuestion();
	
}

window.addEventListener("load", renderQuestion);	