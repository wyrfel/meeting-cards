import MeetingCard from './MeetingCard.js';
import MeetingCards from './MeetingCards.js';

customElements.define('meeting-card', MeetingCard);
customElements.define('meeting-cards', MeetingCards);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}
