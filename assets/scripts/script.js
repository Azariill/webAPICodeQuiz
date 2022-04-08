var container = document.querySelector(".main-flex");
var timer = 80;
var divOne = document.querySelector(".div1");
var divTwo = document.querySelector(".div2");


container.addEventListener("click", function(event) {
    var element = event.target;
    var startButton = document.querySelector(".start-button");

    if(element === startButton){
        divOne.innerHTML ="";
        divTwo.innerHTML ="";

    }

    console.log(element);
});


var createQuestionEl = function(questionObjArray){
    var paragraphEl = document.createElement("p");
    
}