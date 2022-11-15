(function() {
let notes = [];

const noteTxt = document.querySelector('#note-text');
const createBtn = document.querySelector('#create-note');
const noteList = document.querySelector('#notes-list > tbody');
const clearBtn = document.querySelector('#clear-notes');



function addNote() {
  const newRow = document.createElement('tr');
  newRow.id = `note-${notes.length}` ;

  const newNote = document.createElement('td');
  newNote.textContent = noteTxt.value;

  const newActions = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.id = `del-note-${notes.length}` ;
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', deleteNote);

  // <button id="up-note" class="mt-2 btn btn-success"><i class="fa-solid fa-arrow-up"></i></button>
  // <button id="down-note" class="mt-2 btn btn-success"><i class="fa-solid fa-arrow-down"></i></button>
  // homework: add swap notes buttons

  newActions.append(deleteBtn);
  
  newRow.append(newNote);
  newRow.append(newActions);
  notes.push({
    id: `note-${notes.length}`,
    text: noteTxt.value
  });

  localStorage.setItem('notes', JSON.stringify(notes));
  
  noteList.append(newRow);
  noteTxt.value = '';
  noteTxt.focus();
}

function deleteNote(e) {
  e.target.parentElement.parentElement.remove();
  const noteId = e.target.parentElement.parentElement.id;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === noteId) {
      notes.splice(i, 1);
    }
  }
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  notes = localStorage.getItem('notes') || [];
  notes = JSON.parse(notes);
  for (let i=0; i < notes.length; i++) {
    const newRow = document.createElement('tr');
    newRow.id = notes[i].id;

    const newNote = document.createElement('td');
    newNote.textContent = notes[i].text;

    const newActions = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.id = `del-note-${notes[i].id}` ;
    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', deleteNote);
    newActions.append(deleteBtn);
    
    newRow.append(newNote);
    newRow.append(newActions);

    noteList.append(newRow);
    noteTxt.focus();
  }
}
loadNotes()

function clearNotes() {
  noteList.innerHTML = '';
  notes = [] ;
  localStorage.setItem('notes', JSON.stringify(notes));
}

clearBtn.addEventListener('click', clearNotes);

createBtn.addEventListener('click', addNote);

noteTxt.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNote();
  }
});

})();