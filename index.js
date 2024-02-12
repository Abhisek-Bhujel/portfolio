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


