import MeetingCard from './MeetingCard.js';
import MeetingCards from './MeetingCards.js';
import TimerCard from './TimerCard.js';
import CountdownTimer from './CountdownTimer.js';
import InfoCard from './InfoCard.js';

customElements.define('meeting-card', MeetingCard);
customElements.define('timer-card', TimerCard);
customElements.define('meeting-cards', MeetingCards);
customElements.define('countdown-timer', CountdownTimer);
customElements.define('info-card', InfoCard);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
