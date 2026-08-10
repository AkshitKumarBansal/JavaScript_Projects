const password = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const length = document.getElementById("length");
const upperCaseCheck = document.getElementById("uppercase");
const lowerCaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  let availableChars = "";
  let passwordValue = "";

  if(upperCaseCheck.checked) {
    availableChars += upperLetters;
  }
  if(lowerCaseCheck.checked) {
    availableChars += lowerLetters;
  }
  if(numbersCheck.checked) {
    availableChars += numbers;
  }
  if(symbolsCheck.checked) {
    availableChars += symbols;
  }

  if(availableChars.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  const passLength = length.value || 12;

  for(let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    passwordValue += availableChars[randomIndex];
  }
  password.value = passwordValue;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if(password.value === "") {
    alert("Please generate a password first.");
    return;
  }
  navigator.clipboard.writeText(password.value);
  
  copyBtn.innerText = "Copied!";
  copyBtn.style.backgroundColor = "#10b981";
  copyBtn.style.color = "white";

  setTimeout(() => {
    copyBtn.innerText = "Copy";
    copyBtn.style.backgroundColor = "#e5e7eb";
    copyBtn.style.color = "#374151";
  }, 2000);
})

