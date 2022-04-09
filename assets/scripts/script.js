var container = document.querySelector(".main-flex");
var timer = 80;
var divOne = document.querySelector(".div1");
var divTwo = document.querySelector(".div2");
var question = -1;
var currentQuestion = [];
var choice = "";


var clearFunc = function(){
        question++;
        divOne.innerHTML ="";
        divTwo.innerHTML ="";
        questionPicker();
}


var startEvent = function(){


        question++;
        divOne.innerHTML ="";
        divTwo.innerHTML ="";
        var timeRemainingEl = document.querySelector(".time-remaining");
    var startTimer = setInterval(function(){
        if(timer === 80){
            timeRemainingEl.innerHTML = "Time Remaining: " + timer;
            timer--;
            questionPicker();
        }
        else if( timer <= 79){
            timeRemainingEl.innerHTML = "Time Remaining: " + timer;
            timer--;
            

        }
        else if(timer === 0){
            clearInterval(startTimer);
        }
   

    },
    
    
    1000);



    



   
}




var createQuestionEl = function(currentQuestion){
    
    var paragraphEl = document.createElement("p");
    paragraphEl.className = "question-p"
    paragraphEl.innerHTML = currentQuestion.paragraph;
    divOne.appendChild(paragraphEl);

        var buttonEl = document.createElement("button");
        buttonEl.className = "question-button";
        buttonEl.innerHTML = currentQuestion.answerOne;
        divTwo.appendChild(buttonEl);

        var buttonElTwo = document.createElement("button");
        buttonElTwo.className = "question-button";
        buttonElTwo.innerHTML = currentQuestion.answerTwo;
        divTwo.appendChild(buttonElTwo);

        var buttonElThree = document.createElement("button");
        buttonElThree.className = "question-button";
        buttonElThree.innerHTML = currentQuestion.answerThree;
        divTwo.appendChild(buttonElThree);

        var buttonElFour = document.createElement("button");
        buttonElFour.className = "question-button";
        buttonElFour.innerHTML = currentQuestion.answerFour;
        divTwo.appendChild(buttonElFour);
        
        



    }

    var questionPicker = function(){

        var questionOne = {    paragraph:"Commonly used data types DO Not include: ",
            answerOne: "1. Strings",
            answerTwo: "2. Booleans",
            answerThree:"3. Alerts",
            answerFour:"4. Integers"};

        var questionTwo = {
            paragraph:"Arrays in Javascript can be used to store _____? : ",
            answerOne: "1. Numbers and strings",
            answerTwo: "2. Other arrays",
            answerThree: "3. Booleans",
            answerFour: "4. All of the above"};

        var questionThree =  {
            paragraph:"How would you write 'Hello World' in an alert box:",
            answerOne:"1. msg('Hello World');",
            answerTwo:"2. msgBox('Hello World');",
            answerThree:"3. alertBox('Hello World');",
            answerFour:"4. alert('Hello World');"};


        currentQuestion = [questionOne, questionTwo, questionThree];
        currentQuestion = currentQuestion[question];
        

        return createQuestionEl(currentQuestion);

    }

    container.addEventListener("click", function() {
        var element = event.target;
        var questionElement = document.querySelector("button");
        var startButton = document.querySelector(".start-button");

        console.log(element.className);
        console.log(questionElement.className);



        if(element === startButton){
            startEvent();
            element = "";
        }
        else if(element.className === questionElement.className){
            answerSheet(element);


        }
    });

var rightOrWrong = function(){
    
    var section = document.querySelector(".main-flex");
    var divEl = document.createElement("div");
    divEl.className = "div3";
    section.appendChild(divEl);

    var divElTwo = document.createElement("div");
    divElTwo.className = "div4";
    divEl.appendChild(divElTwo);

    var pEl = document.createElement("p");
    pEl.className = "temp-p";
    pEl.innerHTML = choice;
    divElTwo.appendChild(pEl);

    // var divThree = document.querySelector(".div3");
    // divThree.remove();
    // var divFour = document.querySelector(".div4");
    // divFour.remove();
    // var divP = document.querySelector(".temp-p");
    // divP.remove();








}
    var answerSheet = function(element){
        

      switch(element.innerHTML){
          case "3. Alerts" : 
            choice = "Correct!";
            rightOrWrong();
            clearFunc();
            break;
          case "4. All of the above":
            choice = "Correct!";
            rightOrWrong();
            clearFunc();
            break;
          case "4. alert('Hello World');":
            choice = "Correct!";
            rightOrWrong();
            clearFunc();
            break;
          default:
            choice = "Wrong! ";
            rightOrWrong();
            timer -= 10;
            clearFunc();
            break;


      }    



    }


