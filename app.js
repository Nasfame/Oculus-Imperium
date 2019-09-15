function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>How good are your eyes? </h1> <img src = 'table.png'width:200px> </img>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
	
	/* var imgs = document.createElement("imgs");
	 
	imgs.src = "table.png";
	var src = document.getElementById("footing");
	 
	src.appendChild(imgs) = gameOverHTML;*/
};





// create questions
var questions = [
    new Question(document.getElementById("magic").innerHTML = "<img src='level1.png'>", ["1", "3","7", "4"], "7"), //("question", "[options]", answer)
    new Question(document.getElementById("magic").innerHTML = "<img src='level2.png'>", ["1", "4","3", "8"], "8"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level3.png'>", ["9", "2","10", "6"], "10"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level4.png'>", ["1", "7","4", "2"], "4"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level5.png'>", ["9", "3","2", "10"], "3"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level6.png'>", ["8", "3","6", "4"], "4"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level7.png'>", ["10", "3","7", "4"], "10"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level8.png'>", ["4", "8","2", "7"], "2"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level9.png'>", ["1", "5","10", "9"], "9"),
    new Question(document.getElementById("magic").innerHTML = "<img src='level10.png'>", ["1", "8","10", "I see no difference"], "1"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level11.png'>", ["2", "6","5", "I see no difference"], "5"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level12.png'>", ["3", "8","5", "I see no difference"], "5"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level13.png'>", ["2", "9","10", "I see no difference"], "9"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level14.png'>", ["1", "8","2", "I see no difference"], "1"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level15.png'>", ["2", "1","6", "I see no difference"], "2"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level16.png'>", ["6", "9","1", "I see no difference"], "1"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level17.png'>", ["4", "8","6", "I see no difference"], "4"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level18.png'>", ["1", "8","7", "I see no difference"], "8"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level19.png'>", ["2", "7","1", "I see no difference"], "7"),
	new Question(document.getElementById("magic").innerHTML = "<img src='level20.png'>", ["3", "4","2", "I see no difference"], "2"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





