const toggleButton = document.querySelector("#toggle");

toggleButton.addEventListener("click", toggle); 

function toggle() {
    var bodyStyle = window.getComputedStyle(document.body);
    var backgroundColor = bodyStyle.backgroundColor;

    if (backgroundColor === "rgb(255, 255, 255)") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      
    } else if (backgroundColor === "rgb(0, 0, 0)") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; 
      
    }
}

const sendButton = document.querySelector("#sendButton button");
const textArea = document.querySelector("#message");
const resetButton = document.querySelector("#sendButton button[type='reset']");


sendButton.addEventListener("click", send);
resetButton.addEventListener("click", reset);
function send() {
    if(textArea.value != ""){
        textArea.value = ""; 
        alert("Thank you for sending message. I will get back to you ASAP");
    }
    else{
        alert("No message was typed");
    }
}

function reset(){
    textArea.value="";
}