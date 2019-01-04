import CountdownTimer from "./CountdownTimer.js";
import MeetingCard from "./MeetingCard.js";

export default class TimerCard extends MeetingCard {
    constructor() {
        super();
    }

    buildContent(shadow) {
        const originalContent = this.textContent;
        const re = /\d{1,2}:\d{1,2}/;
        const parts = originalContent.split(re);
        const match = originalContent.match(re);

        const prefix = document.createElement('span');
        prefix.textContent = parts[0];

        const suffix = document.createElement('span');
        suffix.textContent = parts[1];

        this.timer = document.createElement('countdown-timer');
        this.timer.textContent = match[0];

        const container = document.createElement('div');
        container.appendChild(prefix);
        container.appendChild(this.timer);
        container.appendChild(suffix);

        shadow.appendChild(container);
    }

    open() {
        this.timer.start();
    }

    close() {
        this.timer.stop();
        this.timer.reset();
    }
}
