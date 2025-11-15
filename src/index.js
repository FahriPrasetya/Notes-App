import { getNotes, getArchiveNotes, createNote, deleteNote, archiveNote, unarchiveNote } from './data/notes.js';
import './components/app-header.js';
import './components/note-item.js';
import './components/loading-indicator.js';
import './components/note-form.js';
import './components/app-footer.js';
import './style/style.css';
import Swal from 'sweetalert2';

getNotes(renderNotes, showErrorMessage);

const noteForm = document.querySelector('note-form');
noteForm.addEventListener('note-submitted', function (e) {
  const note = {
    title: e.detail.title,
    body: e.detail.body,
  };

  createNote(note, renderNotes, showSuccessMessage, showErrorMessage);
});

const toggleUnarchiveNotes = document.getElementById('toggle-unarchive-notes');
const toggleArchiveNotes = document.getElementById('toggle-archive-notes');

toggleUnarchiveNotes.addEventListener('click', function () {
  getNotes(renderNotes, showErrorMessage);
});

toggleArchiveNotes.addEventListener('click', function () {
  getArchiveNotes(renderNotes, showErrorMessage);
});

function renderNotes(notes) {
  const wrapper = document.querySelector('.cards-note-wrapper');
  wrapper.innerHTML = '';

  notes.forEach((note) => {
    const noteItem = document.createElement('note-item');
    noteItem.data = note;

    noteItem.addEventListener('delete-note', function (e) {
      const noteId = e.detail.id;
      deleteNote(noteId, renderNotes, showSuccessMessage, showErrorMessage);
    });

    noteItem.addEventListener('archive-note', function (e) {
      const noteId = e.detail.id;
      archiveNote(noteId, renderNotes, showSuccessMessage, showErrorMessage);
    });

    noteItem.addEventListener('unarchive-note', function (e) {
      const noteId = e.detail.id;
      unarchiveNote(noteId, renderNotes, showSuccessMessage, showErrorMessage);
    });

    wrapper.append(noteItem);
  });

  console.log(notes);
}

function showSuccessMessage(message) {
  Swal.fire({
    title: 'Success',
    text: message,
    icon: 'success',
  });
}

function showErrorMessage(message) {
  Swal.fire({
    title: 'Error',
    text: message,
    icon: 'error',
  });
}
