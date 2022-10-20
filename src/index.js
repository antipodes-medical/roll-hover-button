class RollHoverButton extends HTMLElement {

	constructor() { // eslint-disable-line no-useless-constructor
		super(); // always call super() first in the ctor. This also calls the extended class' ctor.
		this.isButton = this.hasAttribute('is-button');
	}

	static get observedAttributes() {
		return ['href', 'target', 'type'];
	}

	/**
   * Get button.
   *
   * @returns {HTMLAnchorElement|HTMLButtonElement}
   */
	get button() {
		return this.querySelector(this.isButton ? 'button' : 'a');
	}

	/**
   * Get href.
   *
   * @returns {string}
   */
	get href() {
		return this.getAttribute('href');
	}

	/**
   * Set href.
   *
   * @param value
   */
	set href(value) {
		if (typeof value === 'string') {
			this.setAttribute('href', value);
		}
	}

	/**
   * Get type.
   *
   * @returns {string}
   */
	get type() {
		return this.getAttribute('type');
	}

	/**
   * Set type.
   *
   * @param value
   */
	set type(value) {
		if (typeof value === 'string') {
			this.setAttribute('type', value);
		}
	}

	/**
   * Get target.
   *
   * @returns {string}
   */
	get target() {
		return this.getAttribute('target');
	}

	/**
   * Set target.
   *
   * @param value
   */
	set target(value) {
		if (typeof value === 'string') {
			this.setAttribute('target', value);
		}
	}

	connectedCallback() {
		let template = this._getTemplate();
		const title = this.querySelector('[slot=title]');
		const picto = this.querySelector('[slot=picto]');

		if (!title) {
			throw new Error('You need to specify a title slot.');
		}

		if (!this.isButton && !this.href) {
			throw new Error('You need to specify an href.');
		}

		if (this.isButton && !this.type) {
			throw new Error('You need to specify a type to the button.');
		}

		template = template
			.replaceAll('{%TITLE%}', title.outerHTML)
			.replaceAll('{%PICTO%}', picto ? picto.outerHTML : '');

		this.innerHTML = template;
		this._buttonAttributes();

		// On click on the web custom element, trigger click on the first children.
		this.addEventListener('click', () => {
			this.children[0].click();
		});
	}

	/**
   * On attribute change, handle the new value.
   *
   * @param attrName
   * @param oldValue
   * @param newValue
   */
	attributeChangedCallback(attrName, oldValue, newValue) {
		switch (attrName) {
		case 'href':
			if (this.button) {
				this.button.href = newValue;
			}
			break;
		case 'target':
			if (this.button) {
				if (this.target === '_blank') {
					this.button.target = '_blank';
					this.button.rel = 'noopener noreferrer';
				} else {
					this.button.target = '';
					this.button.rel = '';
				}
			}
			break;
		case 'type':
			if (this.button) {
				this.button.type = newValue;
			}
			break;
		}
	}

	/**
   * Handle button attributes.
   *
   * @private
   */
	_buttonAttributes() {
		if (!this.isButton) {
			this.button.href = this.href;
			if (this.target === '_blank') {
				this.button.target = '_blank';
				this.button.rel = 'noopener noreferrer';
			}
		} else {
			this.button.type = this.type;
		}
	}

	/**
   * Get template.
   *
   * @returns {string}
   * @private
   */
	_getTemplate() {
		return !this.isButton ? `
        <a>
            {%PICTO%}
            <div>
               {%TITLE%}
               {%TITLE%}
            </div>
        </a>
    ` : `
        <button>
            {%PICTO%}
            <div>
               {%TITLE%}
               {%TITLE%}
            </div>
        </button>
    `;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('roll-hover-button', RollHoverButton);
});