const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const notesContainer = document.getElementById('notes-container');

let notesArray = JSON.parse(localStorage.getItem('myNotes')) || [];

function renderNotes() {
  notesContainer.innerHTML = '';
  notesArray.forEach((noteText, index) => {
    createNoteElement(noteText, index);
  })
}

submitBtn.addEventListener('click', () => {
  const noteText = input.value.trim();
  if(noteText !== '') {
    createNoteElement(noteText);
    notesArray.push(noteText);
    localStorage.setItem('myNotes', JSON.stringify(notesArray));
    renderNotes();
    input.value = '';
  }
})

function createNoteElement(noteText, index) {
  const noteElement = document.createElement('div');
  noteElement.classList.add('note');
  noteElement.innerHTML = `<div class="note-text">${noteText}</div><button class="delete-btn">Delete</button>`;
  notesContainer.appendChild(noteElement);
  const deleteBtn = noteElement.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    notesArray.splice(index, 1);
    notesContainer.removeChild(noteElement);
    localStorage.setItem('myNotes', JSON.stringify(notesArray));
    renderNotes();
  })
}

renderNotes();