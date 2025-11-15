class NoteItem extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    this._data = {};
  }

  connectedCallback() {
    this.render();
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
            * {
            margin:0;
            padding:0;
            box-sizing:border-box;
            }
            
            :host {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0px 0px 11px 9px #E5E7EB;
                position: relative;
                transition: all .25s ease-in-out;
            }

            .card-note {
                padding: 16px;
            }

            .card-note h3 {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 1.5rem;
                margin-bottom: 8px;
            }

            .card-note p {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 1.1rem;
                margin-bottom: 24px;
            }

            .card-note span {
                position: absolute;
                bottom: 12px;
                right: 20px
            }

            .delete-note-button {
                position: absolute;
                top: 12px;
                right: 20px;
                padding: 4px 10px;
                border-radius: 4px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #E5E7EB;
                color: #111827;
                transition: .2s all ease-in-out;
            }

            .delete-note-button:hover {
                cursor: pointer;
                background-color: #c8cbd0;
            }

            .archive-note, .unarchive-note {
                border: 1px solid black;
                border-radius: 6px;
                padding: 4px 10px;
                background-color: #E5E7EB;
                color: #111827;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 1rem;
                font-weight: 600;
                margin-top:10px;
                transition: all .3s ease-in-out;
            }

            .archive-note:hover, .unarchive-note:hover {
                background-color: #c8cbd0;
                cursor: pointer;
            }

            @media screen and (max-width: 600px) {
                .card-note span {
                    width:100px;
                    text-align:right;
                }
            }
        `;
  }

  render() {
    const date = new Date(this._data.createdAt);

    const tanggal = date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const jam = date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const formattedDate = `${tanggal} ${jam}`;

    this.updateStyle();
    this._shadowRoot.innerHTML = `
        <style>${this._style.textContent}</style>
        <div class="card-note" data-noteid="${this._data.id}">
            <h3><slot name="title">${this._data.title}</slot></h3>
            <p><slot name="body">${this._data.body}</slot></p>
            <span>${formattedDate}</span>
            <button class="delete-note-button">X</button>
            ${this._data.archived ? '<button class="unarchive-note">Unarchive</button>' : '<button class="archive-note">Archive</button>'}
        </div>
        `;

    const btn = this._shadowRoot.querySelector('.delete-note-button');
    if (btn) {
      btn.addEventListener('click', () => {
        this.dispatchEvent(
          new CustomEvent('delete-note', {
            detail: { id: this._data.id },
            bubbles: true,
            composed: true,
          })
        );
      });
    }

    this._shadowRoot.querySelector('.archive-note')?.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('archive-note', {
          detail: { id: this._data.id },
          bubbles: true,
          composed: true,
        })
      );
    });

    this._shadowRoot.querySelector('.unarchive-note')?.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('unarchive-note', {
          detail: { id: this._data.id },
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

customElements.define('note-item', NoteItem);
