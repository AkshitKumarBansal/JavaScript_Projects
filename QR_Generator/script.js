const qrInput = document.getElementById("url-input");
const generateBtn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qr-code-container");
const qrImg = document.getElementById("qr-code");
const errorMsg = document.getElementById("error-message");

function generateQRCode() {
  const qrValue = qrInput.value;
  if(qrValue.trim() === "") {
    errorMsg.textContent = "Please enter a valid URL or text.";
    errorMsg.classList.add("show-error");
    qrImg.classList.remove("show-img");
    return;
  }
  errorMsg.classList.remove("show-error");
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.alt = qrValue;
  qrImg.classList.add("show-img");
}

generateBtn.addEventListener("click", generateQRCode);