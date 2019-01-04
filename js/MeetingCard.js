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

        shadow.textContent = this.textContent;
        shadow.appendChild(style);
        shadow.appendChild(image);

        this.addEventListener('click', this.handleClick);
    }

    handleClick(event) {
        this.classList.toggle('open');
    }
}
