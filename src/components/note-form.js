class NoteForm extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .center-section {
                background-color: #ffffff;
                width: 60%;
                margin: 0 auto;
                box-shadow: 0px 0px 11px 9px #E5E7EB;
                padding: 24px 28px;
                border-radius: 12px;
                min-height: 400px;
                margin-top: -100px;
            }

            #section-note-form h2 {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #9ea2a9;
                font-size: 2rem;
            }

            .form-group label {
                font-family: Arial, Helvetica, sans-serif;
                display: block;
                margin-bottom: 6px;
                margin-top: 16px;
                font-size: 1.2rem;
            }

            .form-group input {
                height: 48px;
            }

            .form-group textarea {
                height: 102px;
            }

            .form-group input, .form-group textarea {
                width: 100%;
                border-radius: 8px;
                padding: 4px 8px;
                border: 3px solid #9ea2a9;
                font-size:1rem;
            }

            .form-group textarea {
            }

            .validation-message {
                color: red;
            }

            .form-group button {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                padding: 7px 20px;
                background-color: #E5E7EB;
                border-radius: 10px;
                font-size: 1.2rem;
                color: #111827;
                font-weight: 600;
                margin-top: 20px;
                transition: all .3s ease-in-out;
            }

            .form-group button:hover {
                cursor: pointer;
                background-color: #c8cbd0;
            }

            @media screen and (max-width:600px) {
                .center-section {
                width: 80%
                }
            }
        `;
  }

  render() {
    this.updateStyle();
    this._shadowRoot.innerHTML = `
        <style>${this._style.textContent}</style>
            <div class="center-section">
                <h2>Create New Note</h2>
                <form id="note-form">
                    <div class="form-group">
                        <label for="note-title">Note Title</label>
                        <input type="text" id="note-title" name="note-title" placeholder="Input Note Title" minlength="5" maxlength="50" aria-describedby="note-title-validation" required>
                        <p id="note-title-validation" class="validation-message" aria-live="polite"></p>
                    </div>
                    <div class="form-group">
                        <label for="note-body">Note Body</label>
                        <textarea name="note-body" id="note-body" name="note-body" placeholder="Input Note Body" minlength="10" maxlength="500" aria-describedby="note-body-validation" required></textarea>
                        <p id="note-body-validation" class="validation-message" aria-live="polite"></p>
                    </div>
                    <div class="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        `;
    const form = this._shadowRoot.getElementById('note-form');
    const noteTitleInput = this._shadowRoot.getElementById('note-title');
    const noteBodyInput = this._shadowRoot.getElementById('note-body');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = this._shadowRoot.getElementById('note-title').value;
      const body = this._shadowRoot.getElementById('note-body').value;

      this.dispatchEvent(
        new CustomEvent('note-submitted', {
          detail: { title, body },
          bubbles: true,
        })
      );

      form.reset();
    });

    const customValidationNoteTitleHandler = (event) => {
      event.target.setCustomValidity('');

      if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Note title input field is required');
        return;
      }
      if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Note title must be at least 5 characters');
        return;
      }
      if (event.target.validity.tooLong) {
        event.target.setCustomValidity('Maximum note title length is 50 characters');
        return;
      }
    };

    const customValidationNoteBodyHandler = (event) => {
      event.target.setCustomValidity('');

      if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Note body input field is required');
        return;
      }
      if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Note body must be at least 10 characters');
        return;
      }
      if (event.target.validity.tooLong) {
        event.target.setCustomValidity('Maximum note body length is 500 characters');
        return;
      }
    };

    noteTitleInput.addEventListener('change', customValidationNoteTitleHandler);
    noteTitleInput.addEventListener('invalid', customValidationNoteTitleHandler);

    noteBodyInput.addEventListener('change', customValidationNoteBodyHandler);
    noteBodyInput.addEventListener('invalid', customValidationNoteBodyHandler);

    noteTitleInput.addEventListener('blur', (event) => {
      const isValid = event.target.validity.valid;
      const errorMessage = event.target.validationMessage;

      const connectedValidationId = event.target.getAttribute('aria-describedby');
      const connectedValidationEl = connectedValidationId ? this._shadowRoot.getElementById(connectedValidationId) : null;

      if (connectedValidationEl && errorMessage && !isValid) {
        connectedValidationEl.innerText = errorMessage;
      } else {
        connectedValidationEl.innerText = '';
      }
    });

    noteBodyInput.addEventListener('blur', (event) => {
      const isValid = event.target.validity.valid;
      const errorMessage = event.target.validationMessage;

      const connectedValidationId = event.target.getAttribute('aria-describedby');
      const connectedValidationEl = connectedValidationId ? this._shadowRoot.getElementById(connectedValidationId) : null;

      if (connectedValidationEl && errorMessage && !isValid) {
        connectedValidationEl.innerText = errorMessage;
      } else {
        connectedValidationEl.innerText = '';
      }
    });
  }
}

customElements.define('note-form', NoteForm);
