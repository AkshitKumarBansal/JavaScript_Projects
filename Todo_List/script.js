const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function addTasks() {
  const task = input.value.trim();
  if(task === '') return;
  const taskHTML = `
        <li>
            <span class="task-text">${task}</span>
            <button class="delete-btn">Delete</button>
        </li>
    `;
  list.innerHTML += taskHTML;
  input.value = '';

  saveTasks();
}

input.addEventListener('keyup', (e) => {
  if(e.key === 'Enter') {
    addTasks();
  }
})

addBtn.addEventListener('click', addTasks);

list.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
    saveTasks();
  }
  if(e.target.classList.contains('task-text')) {
    e.target.parentElement.classList.toggle('completed');
    saveTasks();
  }
})

function saveTasks() {
  localStorage.setItem('myTasks', list.innerHTML);
}

function loadTasks() {
  const savedData = localStorage.getItem('myTasks');
  if(savedData) {
    list.innerHTML = savedData;
  }
}

loadTasks();