import store from './store/store';
import { addNote } from './actions/actions';

console.log('Before:', store.getState());
store.dispatch(addNote('One', 'One content'));
store.dispatch(addNote('Two', 'Two content'));
store.dispatch(addNote('Three', 'Three content'));
console.log('After:', store.getState());


// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
function deleteNote(index) {
  
  // console.log(index);
}

function renderNotes() {
  let notes = store.getState().notes;

  // sets the <ul> inner html in the index.html to empty
  notesUList.innerHTML = '';

  // updates the <ul> inner html
  notes.map((note, index) => {
    let noteItem = `
    <li>
      <b>${ note.title }</>
      <button data-id="${ index }">x</button>
      <br />
      <span>${ note.content }</span>
    </li>
    `;
    notesUList.innerHTML += noteItem;
  });

  setDeleteNoteButtonsEventListeners();
}

store.subscribe(() => {
  renderNotes();
});

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  store.dispatch(addNote(title, content));

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');
  
  for(let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the initial Notes ------
renderNotes();