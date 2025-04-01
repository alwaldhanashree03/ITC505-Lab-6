let currentInput = "";

function appendToInput(value) {
    currentInput += value;
    document.getElementById("numInput").value = currentInput;
}

function clearInput() {
    currentInput = "";
    document.getElementById("numInput").value = "";
    document.getElementById("resultOutput").textContent = "";
}

function performCalculation(operator) {
    if (currentInput === "") return;
    
    currentInput += " " + operator + " ";
    document.getElementById("numInput").value = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        document.getElementById("resultOutput").textContent = "Result: " + result;
        currentInput = result.toString(); // Store result for further calculation
    } catch (e) {
        document.getElementById("resultOutput").textContent = "Error!";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("numInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            calculateResult();
        }
    });
});
