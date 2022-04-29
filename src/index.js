class RollHoverButton extends HTMLElement {

	constructor() { // eslint-disable-line no-useless-constructor
		super(); // always call super() first in the ctor. This also calls the extended class' ctor.
	}

	static get observedAttributes() {
		return ['href', 'target'];
	}

	/**
   * Get anchor.
   *
   * @returns {HTMLAnchorElement}
   */
	get anchor() {
		return this.querySelector('a');
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
		if (!this.href) {
			throw new Error('You need to specify an href.');
		}

		template = template
			.replaceAll('{%TITLE%}', title.outerHTML)
			.replaceAll('{%PICTO%}', picto ? picto.outerHTML : '');

		this.innerHTML = template;
		this.anchor.href = this.href;
		if (this.target === '_blank') {
			this.anchor.target = '_blank';
			this.anchor.rel = 'noopener noreferrer';
		}
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		switch (attrName) {
		case 'href':
			if (this.anchor) {
				this.anchor.href = newValue;
			}
			break;
		case 'target':
			if (this.anchor) {
				if (this.target === '_blank') {
					this.anchor.target = '_blank';
					this.anchor.rel = 'noopener noreferrer';
				} else {
					this.anchor.target = '';
					this.anchor.rel = '';
				}
			}
			break;
		}
	}

	/**
   * Get template.
   *
   * @returns {string}
   * @private
   */
	_getTemplate() {
		return `
        <a>
            {%PICTO%}
            <div>
               {%TITLE%}
               {%TITLE%}
            </div>
        </a>
    `;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('roll-hover-button', RollHoverButton);
});