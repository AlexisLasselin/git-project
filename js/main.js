const noteTxt = document.querySelector('#note-text');
const createBtn = document.querySelector('#create-note');
const noteList = document.querySelector('#notes-list > tbody');
const clearBtn = document.querySelector('#clear-notes');

function addNote() {
  const newRow = document.createElement('tr');

  const newNote = document.createElement('td');
  newNote.textContent = noteTxt.value;

  const newActions = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener('click', deleteNote);

  
  // <button id="up-note" class="mt-2 btn btn-success"><i class="fa-solid fa-arrow-up"></i></button>
  // <button id="down-note" class="mt-2 btn btn-success"><i class="fa-solid fa-arrow-down"></i></button>
  // homework: add swap notes buttons

  newActions.append(deleteBtn);
  
  newRow.append(newNote);
  newRow.append(newActions);
  
  noteList.append(newRow);
  noteTxt.value = '';
  noteTxt.focus();
}

function deleteNote(e) {
  e.target.parentElement.parentElement.remove();
}

createBtn.addEventListener('click', addNote);

noteTxt.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNote();
  }
});

function clearNotes() {
  noteList.innerHTML = '';
}

clearBtn.addEventListener('click', clearNotes);
