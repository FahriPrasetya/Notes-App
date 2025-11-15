class AppHeader extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  static get observedAttributes() {
    return ['title'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.render();
    }
  }

  updateStyle() {
    this._style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            header {
                background-color: #E5E7EB;
                padding: 16px 0;
                margin-bottom: 30px;
            }
            h1 {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #111827;
                text-align: center;
            }
        `;
  }

  render() {
    this.updateStyle();
    this._shadowRoot.innerHTML = `
        <style>${this._style.textContent}</style>
        <header>
            <h1>${this.getAttribute('title') || 'Notes App'}</h1>
        </header>
        `;
  }
}

customElements.define('app-header', AppHeader);
