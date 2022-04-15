var container = document.querySelector(".main-flex");
var divOne = document.querySelector(".div1");
var divTwo = document.querySelector(".div2");
var timeRemainingEl = document.querySelector(".time-remaining");
var body = document.querySelector("body");
var question = -1;
var currentQuestion = [];
var choice = "";
var timerStart = true;
var score = 0;
var timer = 80;
var e = 0;




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
    
    
    
    
        var startTimer = setInterval(function(){
            if(timer === 80 & timerStart){
                timeRemainingEl.innerHTML = "Time Remaining: " + timer;
                timer--;
                score = timer;
                questionPicker();
            }
            else if( timer > 0 &  timerStart){
                timeRemainingEl.innerHTML = "Time Remaining: " + timer;
                timer--;
                score = timer;
            }
            else{

                timeRemainingEl.innerHTML = "Time Remaining: " + timer;
                clearInterval(startTimer);
                score = timer;
                timerStart = false;
                divTwo.innerHTML = " ";
                return scoreScreen();
                    
                    
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
            paragraph:"Inside which HTML element do we put the Javascript?:",
            answerOne:"1. js",
            answerTwo:"2. script",
            answerThree:"3. javascript",
            answerFour:"4. scripting"};

        var questionFive =  {
            paragraph:"How do you write an if statment in Javascript?",
            answerOne:"1. if i==5 then",
            answerTwo:"2. if i=5 then",
            answerThree:"3. if(i == 5){}",
            answerFour:"4. if i=5(){}"};

        var questionSix =  {
            paragraph:"How can you add a single comment in JavaScript?",
            answerOne:"1. !-- This is a comment --!",
            answerTwo:"2. 'this is a comment' ",
            answerThree:"3. //this is a comment",
            answerFour:"4. /* this is a comment */ "};
    

        


        currentQuestion = [questionOne, questionTwo, questionThree, questionFour, questionFive,questionSix];
        
        currentQuestion = currentQuestion[question];

        

        
        
        
    if(currentQuestion){
        return createQuestionEl(currentQuestion);
    }
    else{
        timerStart = false;
        return counter();

    }

    }

    body.addEventListener("click", function() {
        var element = event.target;
        var startButton = document.querySelector(".start-button");
        
        
        

        if(element === startButton){
            startEvent();
            element = "";
        }
        else if(element.className === "submit"){
            var intialsIput = container.querySelector("input[name='initials']").value;
            return saveInitials(intialsIput);
            
            
        }
        else if(element.className === "question-button"){
            answerSheet(element);
        }
        else if(element.className === "high-score-span"){
            intialsInput = "empty";
            saveInitials(intialsIput);

        }
       else{
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
          case "2. script":
            choice = "Correct!";
            rightOrWrong();
            clearFunc();
            break;
          case "3. if(i == 5){}":
            choice = "Correct!";
            rightOrWrong();
            clearFunc();
            break;
        case "3. //this is a comment":
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
    divOne.innerHTML ="";
    

    timerStart = false;
    var h1El = document.createElement('h1');
    h1El.textContent = "All done!";
    divOne.appendChild(h1El);
    
    var pEl = document.createElement('p');
    pEl.textContent = "Your final score is " + score;
    divOne.appendChild(pEl);
    timeRemainingEl.innerHTML = "Time Remaining: " + score;

     // Create a form dynamically
     var formEl = document.createElement("form");
     formEl.setAttribute("method", "post");
     formEl.setAttribute("action", "submit");
     formEl.innerHTML = "<div class='div6'><label for='initials'>Enter initials: </label></div><div class='div7'><input type='text' name='initials' placeholder='Enter your initials' class='initials'></input></div><div class='div9'><button type='button' value='submit form' class='submit'>Submit</button>"

     divOne.appendChild(formEl);

     

   

    }

     
var saveInitials = function(intialsIput){
    var highScoreArr = ["1. ", "2. ", "3. ", "4. ", "5. "];
    var current = localStorage.getItem(highScoreArr[0]);
   
    var finalScore = {
        name:intialsIput, 
        playerScore:score
    };
    timeRemainingEl.innerHTML = "Time Remaining: " + score;
    
    

if(current && finalScore.name ){
    while( e < highScoreArr.length){
        
       
        current = localStorage.getItem(highScoreArr[e]);
        var playerObj = JSON.parse(current);
        

        if(playerObj){
            var playerScore = playerObj.playerScore;
            
            if(playerScore < score){
                localStorage.setItem(highScoreArr[e], JSON.stringify(finalScore));
                return highScoreScreen(highScoreArr);
            }
            else{ 
            e ++;
            return saveInitials(intialsIput);}
        }
    
       else{
        localStorage.setItem(highScoreArr[e], JSON.stringify(finalScore));
        return highScoreScreen(highScoreArr);


       }
    }
}

else if(finalScore.name){
    localStorage.setItem(highScoreArr[e], JSON.stringify(finalScore));
    return highScoreScreen(highScoreArr);
}

else{
    divTwo.innerHTML =" ";
    return highScoreScreen(highScoreArr);}
}  

   
    
    


var highScoreScreen = function(highScoreArr){
    
    divOne.innerHTML = "<h1 class='highscore'> High Scores:</h1>";
    var olEl = document.createElement("ol");
    divOne.appendChild(olEl);
    var div4EL = document.getElementsByClassName("div4");
    
    
    if(div4EL.length > 0){
        div4EL = div4EL[0];
        div4EL.remove();
    }
    
    for(var i = 0; i < highScoreArr.length; i++){
        var current = localStorage.getItem(highScoreArr[i]);
        var playerObj = JSON.parse(current);
        
    
    if(playerObj){
        var playerName = playerObj.name;
        var playerScore = playerObj.playerScore;
        var liEL = document.createElement("li");
        liEL.textContent = playerName +" - "+playerScore;
        olEl.appendChild(liEL)
    }
    else{return;}

    }

    
}






  
   






