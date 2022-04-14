var container = document.querySelector(".main-flex");
var divOne = document.querySelector(".div1");
var divTwo = document.querySelector(".div2");
var question = -1;
var currentQuestion = [];
var choice = "";
var timerStart = true;
var score = "";
var timer = 0;



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
        
        counter();
}


var counter = function(){
    var timeRemainingEl = document.querySelector(".time-remaining");
    timer = 80;
    
        var startTimer = setInterval(function(){
            if(timer === 80 & timerStart){
                timeRemainingEl.innerHTML = "Time Remaining: " + timer;
                timer--;
                questionPicker();
            }
            else if( timer <= 79 & timerStart){
                timeRemainingEl.innerHTML = "Time Remaining: " + timer;
                timer--;
            }
            else{
                    clearInterval(startTimer);
                    score = timer;
                    timer = 0;
                    
            }
        }
        
        , 1000);

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

        var questionFour =  {
            paragraph:"How would you write 'Hello World' in an alert box:",
            answerOne:"1. msg('Hello World');",
            answerTwo:"2. msgBox('Hello World');",
            answerThree:"3. alertBox('Hello World');",
            answerFour:"4. alert('Hello World');"};

        var questionFive =  {
            paragraph:"How would you write 'Hello World' in an alert box:",
            answerOne:"1. msg('Hello World');",
            answerTwo:"2. msgBox('Hello World');",
            answerThree:"3. alertBox('Hello World');",
            answerFour:"4. alert('Hello World');"};

        var questionSix =  {
            paragraph:"How would you write 'Hello World' in an alert box:",
            answerOne:"1. msg('Hello World');",
            answerTwo:"2. msgBox('Hello World');",
            answerThree:"3. alertBox('Hello World');",
            answerFour:"4. alert('Hello World');"};
    

        


        currentQuestion = [questionOne, questionTwo, questionThree,questionFour,questionFive,questionSix];
        
        currentQuestion = currentQuestion[question];

        
        
        
    if(currentQuestion){
        return createQuestionEl(currentQuestion);
    }
    else{
        return scoreScreen();
    }

    }

    container.addEventListener("click", function() {
        var element = event.target;
        var questionElement = container.querySelector(".question-button");
        var startButton = document.querySelector(".start-button");

        

        console.log(element.className);
        console.log(questionElement);
        if(element === startButton){
            startEvent();
            element = "";
        }
        else if(element.className === questionElement.className){
            answerSheet(element);
        }
        else if(element){
            return;
        }
    });

// functions to test if the choice was right or wrong 
var rightOrWrong = function(){

    var div3 = document.getElementById("div3Id");
    if(div3){
        div3.remove();
    }


    
    // selects the main section 
    var section = document.querySelector(".main-flex");
    //create a new div element
    var divEl = document.createElement("div");
    //assign class .div3
    divEl.className = "div3";

    divEl.setAttribute('id','div3Id');
    //append that new div as the last element
    section.appendChild(divEl);
    // create new div element
    var divElTwo = document.createElement("div");
    //assign .div4 to it
    divElTwo.className = "div4";
    //append that to div3
    divEl.appendChild(divElTwo);
    //create new p element and assing choice to it.
    var pEl = document.createElement("p");
    pEl.className = "temp-p";
    pEl.innerHTML = choice;
    divElTwo.appendChild(pEl);
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

var scoreScreen = function(){
    debugger;
    timerStart = false;
    var h1El = document.createElement('h1');
    h1El.textContent = "All done!";
    divOne.appendChild(h1El);

    var pEl = document.createElement('p');
    pEl.textContent = "Your final score is 22."
    divOne.appendChild(pEl);

     // Create a form dynamically
     var formEl = document.createElement("form");
     formEl.setAttribute("method", "post");
     formEl.setAttribute("action", "submit");
     formEl.innerHTML = "<div class='div6'><label for='initials'>Enter initials: </label></div><div class='div7'><input type='text' name='initials' placeholder='Enter your initials'></input></div><div class='div9'><button type='button' value='submit form' id='submit'>Submit</button>"

     divOne.appendChild(formEl);

     

   

    }

     
var saveInitials = function(){
    var intialsIput = document.querySelector("input[name='initials']").value;
    console.log(intialsIput);
}

container.addEventListener("submit", saveInitials);


  
   






