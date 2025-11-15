const baseUrl = 'https://notes-api.dicoding.dev/v2';
const loading = document.querySelector('loading-indicator');

const toggleUnarchiveNotes = document.getElementById('toggle-unarchive-notes');
const toggleArchiveNotes = document.getElementById('toggle-archive-notes');

function toggleArchiveNotesActive() {
  toggleArchiveNotes.classList.add('active');
  toggleUnarchiveNotes.classList.remove('active');
}

function toggleUnarchiveNotesActive() {
  toggleUnarchiveNotes.classList.add('active');
  toggleArchiveNotes.classList.remove('active');
}

function scrollIntoNotes() {
  setTimeout(() => {
    document.getElementById('section-user-notes').scrollIntoView({
      behavior: 'smooth',
    });
  }, 500);
}

const getNotes = async (renderNotes, showErrorMessage) => {
  loading.show();
  try {
    const response = await fetch(`${baseUrl}/notes`);
    const responseJson = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (responseJson.status === 'success') {
      toggleUnarchiveNotesActive();
      renderNotes(responseJson.data);
    } else {
      showErrorMessage(responseJson.message);
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    loading.hide();
  }
};

const getArchiveNotes = async (renderNotes, showErrorMessage) => {
  loading.show();
  try {
    const response = await fetch(`${baseUrl}/notes/archived`);
    const responseJson = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (responseJson.status === 'success') {
      toggleArchiveNotesActive();
      renderNotes(responseJson.data);
    } else {
      showErrorMessage(responseJson.message);
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    loading.hide();
  }
};

const createNote = async (note, renderNotes, showSuccessMessage, showErrorMessage) => {
  loading.show();
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    };

    const response = await fetch(`${baseUrl}/notes`, options);
    const responseJson = await response.json();

    if (responseJson.status === 'success') {
      showSuccessMessage(responseJson.message);
      getNotes(renderNotes, showErrorMessage);
      scrollIntoNotes();
    } else {
      showErrorMessage(responseJson.message);
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    loading.hide();
  }
};

const archiveNote = async (note_id, renderNotes, showSuccessMessage, showErrorMessage) => {
  loading.show();
  try {
    const option = {
      method: 'POST',
    };

    const response = await fetch(`${baseUrl}/notes/${note_id}/archive`, option);
    const responseJson = await response.json();

    if (responseJson.status === 'success') {
      showSuccessMessage(responseJson.message);
      getArchiveNotes(renderNotes, showErrorMessage);
    } else {
      showErrorMessage(responseJson.message);
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    loading.hide();
  }
};

const unarchiveNote = async (note_id, renderNotes, showSuccessMessage, showErrorMessage) => {
  loading.show();
  try {
    const option = {
      method: 'POST',
    };

    const response = await fetch(`${baseUrl}/notes/${note_id}/unarchive`, option);
    const responseJson = await response.json();

    if (responseJson.status === 'success') {
      showSuccessMessage(responseJson.message);
      getNotes(renderNotes, showErrorMessage);
    } else {
      showErrorMessage(responseJson.message);
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    loading.hide();
  }
};

const deleteNote = async (note_id, renderNotes, showSuccessMessage, showErrorMessage) => {
  loading.show();
  try {
    const option = {
      method: 'DELETE',
    };

    const response = await fetch(`${baseUrl}/notes/${note_id}`, option);
    const responseJson = await response.json();

    if (responseJson.status === 'success') {
      showSuccessMessage(responseJson.message);
      getNotes(renderNotes, showErrorMessage);
    } else {
      showErrorMessage(response.message);
    }
  } catch (error) {
    showErrorMessage(error);
  } finally {
    loading.hide();
  }
};

export { getNotes, getArchiveNotes, createNote, deleteNote, archiveNote, unarchiveNote };
