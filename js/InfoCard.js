export default class InfoCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: 'open'
        });

        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'css/info-card.css');

        this.buildContent(shadow);
        shadow.appendChild(style);

        this.addEventListener('click', this.handleClick);
    }

    handleClick(event) {
        if (this.classList.toggle('open')) {
            this.open();
        } else {
            this.close();
        }
    }

    buildContent(shadow) {
        shadow.innerHTML = this.innerHTML;
    }

    open() {}

    close() {}
}
