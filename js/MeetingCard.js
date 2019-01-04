export default class MeetingCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: 'open'
        });

        const image = document.createElement('img');
        image.setAttribute('class', '');

        const type = this.getAttribute('type');
        image.setAttribute('src', 'images/cards/' + type + '.svg');

        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'css/meeting-card.css');

        this.buildContent(shadow);
        shadow.appendChild(image);
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
        shadow.textContent = this.textContent;
    }

    open() {}

    close() {}
}
