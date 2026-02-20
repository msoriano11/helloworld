function logInput() {
    let value = document.getElementById('userInput').value.trim();
    
    if (isNaN(value)) {
    console.log ("Non-numeric entered");
    }

    else if (value === ""){
        console.log("Blank space entered")

    }

    else if (value >= 1 && value <= 100){
        console.log("Thank you! You entered "+ value+", a valid number")
    }

    else{
        console.log("Sorry, "+ value + " is not a valid entry.");
    }

}