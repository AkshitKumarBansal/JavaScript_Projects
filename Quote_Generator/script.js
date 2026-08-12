const generateQuoteBtn = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const copyQuoteBtn = document.getElementById("copy-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");

copyQuoteBtn.style.display = "none";
quoteText.textContent = "Click 'Generate Quote' to begin!";

async function fetchQuote() {
  quoteText.textContent = "Loading...";
  quoteAuthor.textContent = "";
  copyQuoteBtn.style.display = "none";

  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quote.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `- ${data.author}`;
    copyQuoteBtn.style.display = "inline-block";
  } catch (error) {
    quoteText.textContent = "Failed to fetch quote. Please try again.";
    quoteAuthor.textContent = "";
    copyQuoteBtn.style.display = "none";
  }
}

async function copyQuote() {
  const quote = quoteText.textContent;
  try {
    await navigator.clipboard.writeText(quote);
    copyQuoteBtn.textContent = "Copied!";
    setTimeout(() => {
        copyQuoteBtn.textContent = "Copy Quote";
    }, 2000);
  } catch (error) {
    alert("Failed to copy quote. Please try again.");
  }
}

generateQuoteBtn.addEventListener("click", fetchQuote);
copyQuoteBtn.addEventListener("click", copyQuote);