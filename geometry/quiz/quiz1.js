var pos=0;
var correct=0;
var tries=0;
var test, test_status, question, choice, choices, chA, chB, chC, chD, chE;
var track=[];

var questions =[
	{
		question: "Simplify $\\sqrt{98}$.",
		a: "$49$",
		aMsg: "",
		b: "$7\\sqrt{2}$",
		bMsg: "",
		c: "$49\\sqrt{2}$",
		cMsg: "",
		d: "$7\\sqrt{4}$",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "B",
		attempt: 0
	},
	{
		question: "In the following diagram, find the length of $\\overline{AC}$: <br> <img width = 300px, height = 300px, src='1a.png'>",
		a: "$10$",
		aMsg: "",
		b: "$58$",
		bMsg: "",
		c: "$2\\sqrt{10}$",
		cMsg: "",
		d: "$\\sqrt{58}$",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "D",
		attempt: 0
	},
	{
		question: "If $\\angle A$ and $\\angle B$ are supplementary, which of the following cannot be true?",
		a: "The angles are congruent.",
		aMsg: "",
		b: "The angles are complementary.",
		bMsg: "",
		c: "The angles are adjacent.",
		cMsg: "",
		d: "The angles are both congruent and adjacent.",
		dMsg: "",
		e: "The angles are both congruent and complementary.",
		eMsg: "",
		answer: "B",
		attempt: 0
	},
	{
		question: "Let $A(3,-2)$ and $B(-1,-5)$. What are the coordinates of the midpoint of $\\overline{AB}$?",
		a: "$(2,-1.5)$",
		aMsg: "",
		b: "$(1,-2.5)$",
		bMsg: "",
		c: "$(1,-3.5)$",
		cMsg: "",
		d: "$(1,-1.5)$",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "C",
		attempt: 0
	},
	{
		question: "Given two different points $A$ and $B$, which of the following is not true?",
		a: "There is a unique line (ie. one and only one line) that contains both points.",
		aMsg: "",
		b: "The points are collinear.",
		bMsg: "",
		c: "The points are coplanar.",
		cMsg: "",
		d: "The points $A$, $B$ and any other point $C$ are coplanar.",
		dMsg: "",
		e: "none of the above",
		eMsg: "",
		answer: "E",
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