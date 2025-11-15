class AppFooter extends HTMLElement {
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
            footer {
                background-color: #E5E7EB;
                padding: 16px 0;
                margin-top: 30px;
                font-size:0.8rem;
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
        <footer>
            <h1>${this.getAttribute('title') || 'Thanks for visiting! – Fahri Prasetya'}</h1>
        </footer>
        `;
  }
}

customElements.define('app-footer', AppFooter);
