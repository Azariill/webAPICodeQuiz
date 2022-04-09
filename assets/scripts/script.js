var container = document.querySelector(".main-flex");
var timer = 80;
var divOne = document.querySelector(".div1");
var divTwo = document.querySelector(".div2");
var question = -1;
var currentQuestion = [];





var startEvent = function(){

        question++;
        divOne.innerHTML ="";
        divTwo.innerHTML ="";
        debugger;
        questionPicker();



   
}


var createQuestionEl = function(currentQuestion){
    
    var paragraphEl = document.createElement("p");
    paragraphEl.innerHTML = currentQuestion.paragraph;
    divOne.appendChild(paragraphEl);

    var buttonArray = ["answerOne", "answerTwo", "answerThree", "answerFour"];
    

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
            answerOne: "1. strings",
            answerTwo: "2. booleans",
            answerThree:"3. alerts",
            answerFour:"4. integers"};

        var questionTwo = {
            paragraph:"Arrays in Javascript can be used to store _____? ",
            answerOne: "1. numbers and strings",
            answerTwo: "2. other arrays",
            answerThree: "3. booleans",
            answerFour: "4. All of the above"};


        currentQuestion = [questionOne, questionTwo];
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

    var answerSheet = function(element){
        

      switch(element.innerHTML){
          case "3. alerts" : 
            alert("correct");
            startEvent();
            break;
          case "4. All of the above":
              alert("correct");
              startEvent();
              break;
          default:
              alert("wrong");
              startEvent();
              break;


      }    



    }


