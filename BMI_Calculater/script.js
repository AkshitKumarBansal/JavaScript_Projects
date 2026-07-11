function BMICalculator() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const bmiResult = document.getElementById("bmi");
  const categoryResult = document.getElementById("category");

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    bmiResult.textContent = "Please enter valid weight and height.";
    categoryResult.textContent = "";
    return;
  }

  const bmi = weight / (height * height);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
  categoryResult.textContent = `You are ${category}.`;
}