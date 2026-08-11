# Notes App 📝

A simple note-taking app that lets you jot down quick notes and keeps them saved in your browser between visits.

## Features
- Add notes via a textarea and **Submit** button
- Notes are saved to `localStorage`, so they persist even after closing or refreshing the browser
- Delete individual notes with a dedicated **Delete** button
- Notes automatically re-render whenever the list changes

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla) with the Web Storage API (`localStorage`)

## How to Run
1. Clone or download this folder.
2. Open `index.html` in your browser.
3. Type a note into the text box and click **Submit** to save it. Click **Delete** on any note to remove it.

## File Structure
```
Notes_App/
├── index.html
├── style.css
└── script.js
```