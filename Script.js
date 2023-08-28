
function loadContent(section) {
    fetch(section + '.html')  
        .then(response => response.text())
        .then(data => {
            document.querySelector('#content-placeholder').innerHTML = data; 
        })
        .catch(error => console.error('Error loading content:', error));
}


function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var unitSelect = document.getElementById("unit");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var unit = unitSelect.value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive weight and height.";
        return;
    }

    
    if (unit === "imperial") {
       
        weight = weight * 0.453592;

    
        height = height * 0.0254;
    }

    var bmi = weight / (height * height);

    var resultText = "Your BMI is " + bmi.toFixed(2) + ". ";
    if (bmi < 18.5) {
        resultText += "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "Overweight";
    } else {
        resultText += "Obese";
    }

    document.getElementById("result").innerHTML = resultText;
}

