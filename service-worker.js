const cacheName = 'wyrfel-meeting-cards-v2';
const filesToCache = [
    'index.html',
    'js/main.js',
    'js/MeetingCards.js',
    'js/MeetingCard.js',
    'js/TimerCard.js',
    'js/CountdownTimer.js',
    'css/styles.css',
    'css/meeting-card.css',
    'images/cards/awesome.svg',
    'images/cards/badconn.svg',
    'images/cards/brb.svg',
    'images/cards/breakup.svg',
    'images/cards/canthear.svg',
    'images/cards/cantsee.svg',
    'images/cards/elmo.svg',
    'images/cards/fivemin.svg',
    'images/cards/frozen.svg',
    'images/cards/gtg.svg',
    'images/cards/hold.svg',
    'images/cards/lowbattery.svg',
    'images/cards/mute.svg',
    'images/cards/muted.svg',
    'images/cards/no.svg',
    'images/cards/noise.svg',
    'images/cards/onemin.svg',
    'images/cards/pass.svg',
    'images/cards/question.svg',
    'images/cards/reboot.svg',
    'images/cards/repeat.svg',
    'images/cards/slowdown.svg',
    'images/cards/speakup.svg',
    'images/cards/speedup.svg',
    'images/cards/threemin.svg',
    'images/cards/twomin.svg',
    'images/cards/yes.svg',
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );

    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
