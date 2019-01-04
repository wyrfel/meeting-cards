function toSeconds(duration) {
    const parts = duration.split(':');

    return 60 * parts[0] + 1 * parts[1];
}

function format(timer) {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
}

export default class CountdownTimer extends HTMLElement {
    constructor() {
        super();

        this.duration = toSeconds(this.textContent);
    }

    start() {
        let current = this.duration;

        this.timer = setInterval(() => {
            this.textContent = format(current);

            if (--current < 0) {
                this.stop();
            }
        }, 1000);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    reset() {
        this.textContent = format(this.duration);
    }
}
