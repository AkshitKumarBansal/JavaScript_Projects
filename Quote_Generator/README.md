# Quote Generator 💬

A random quote generator that fetches a new inspirational quote (with author) at the click of a button.

## Features
- Fetches a random quote and its author from the [DummyJSON Quotes API](https://dummyjson.com/docs/quotes)
- **Generate Quote** button to fetch a new quote on demand
- **Copy Quote** button to copy the current quote to your clipboard, with visual confirmation ("Copied!")
- Loading state while a quote is being fetched
- Graceful error handling if the fetch fails

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla) with the Fetch API and Clipboard API

## How to Run
1. Clone or download this folder.
2. Open `index.html` in your browser (requires an internet connection).
3. Click **Generate Quote** to fetch a random quote, and **Copy Quote** to copy it to your clipboard.

## File Structure
```
Quote_Generator/
├── index.html
├── style.css
└── script.js
```