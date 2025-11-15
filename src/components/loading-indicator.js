class LoadingIndicator extends HTMLElement {
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

        #loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3); 
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            visibility: hidden; 
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        #loading-overlay.active {
            visibility: visible;
            opacity: 1;
        }

        .spinner {
            border: 8px solid rgba(255, 255, 255, 0.2);
            border-top: 8px solid #ffffff;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `;
  }

  show() {
    const overlay = this._shadowRoot.querySelector('#loading-overlay');
    overlay.classList.add('active');
  }

  hide() {
    const overlay = this._shadowRoot.querySelector('#loading-overlay');
    overlay.classList.remove('active');
  }

  render() {
    this.updateStyle();

    this._shadowRoot.innerHTML = `
        <style>${this._style.textContent}</style>
        <div id="loading-overlay">
                <div class="spinner"></div>
        </div>
        `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
