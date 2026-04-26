const raceSchedule = [
    { country: "AUSTRALIA", track: "Albert Park, Melbourne", date: "2026-03-16T05:00:00Z" },
    { country: "CHINA", track: "Shanghai International Circuit", date: "2026-03-23T07:00:00Z" },
    { country: "JAPAN", track: "Suzuka Circuit, Suzuka", date: "2026-04-06T05:00:00Z" },
    { country: "MIAMI", track: "Miami International Autodrome", date: "2026-05-04T19:00:00Z" },
    { country: "CANADA", track: "Circuit Gilles Villeneuve, Montreal", date: "2026-06-15T18:00:00Z" },
    { country: "MONACO", track: "Circuit de Monaco, Monte Carlo", date: "2026-06-29T13:00:00Z" },
    { country: "BARCELONA", track: "Circuit de Barcelona-Catalunya", date: "2026-07-06T13:00:00Z" },
    { country: "AUSTRIA", track: "Red Bull Ring, Spielberg", date: "2026-07-13T13:00:00Z" },
    { country: "GREAT BRITAIN", track: "Silverstone Circuit, Silverstone", date: "2026-07-27T14:00:00Z" },
    { country: "BELGIUM", track: "Circuit de Spa-Francorchamps", date: "2026-08-03T13:00:00Z" },
    { country: "HUNGARY", track: "Hungaroring, Budapest", date: "2026-08-17T13:00:00Z" },
    { country: "NETHERLANDS", track: "Circuit Zandvoort, Zandvoort", date: "2026-08-31T13:00:00Z" },
    { country: "ITALY", track: "Autodromo Nazionale Monza", date: "2026-09-07T13:00:00Z" },
    { country: "SPAIN", track: "Circuit de Valencia, Valencia", date: "2026-09-21T13:00:00Z" },
    { country: "AZERBAIJAN", track: "Baku City Circuit, Baku", date: "2026-10-05T11:00:00Z" },
    { country: "SINGAPORE", track: "Marina Bay Street Circuit", date: "2026-10-19T12:00:00Z" },
    { country: "USA", track: "Circuit of the Americas, Austin", date: "2026-10-26T19:00:00Z" },
    { country: "MEXICO", track: "Autodromo Hermanos Rodriguez, Mexico City", date: "2026-11-02T20:00:00Z" },
    { country: "BRAZIL", track: "Interlagos, Sao Paulo", date: "2026-11-09T17:00:00Z" },
    { country: "LAS VEGAS", track: "Las Vegas Strip Circuit", date: "2026-11-22T06:00:00Z" },
    { country: "QATAR", track: "Lusail International Circuit", date: "2026-11-30T14:00:00Z" },
    { country: "ABU DHABI", track: "Yas Marina Circuit, Abu Dhabi", date: "2026-12-07T13:00:00Z" }
];

function getNextRace() {
    const now = new Date();
    for (let i = 0; i < raceSchedule.length; i++) {
        const raceDate = new Date(raceSchedule[i].date);
        if (raceDate > now) {
            return raceSchedule[i];
        }
    }
    return raceSchedule[raceSchedule.length - 1];
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function updateCountdown() {
    const nextRace = getNextRace();
    const now = new Date();
    const raceDate = new Date(nextRace.date);
    let diff = raceDate - now;

    if (diff <= 0) {
        diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hrs').textContent = padZero(hrs);
    document.getElementById('min').textContent = padZero(min);
    document.getElementById('sec').textContent = padZero(sec);

    document.getElementById('race-countryname').textContent = nextRace.country;
    document.getElementById('track-name').textContent = nextRace.track;
}

updateCountdown();
setInterval(updateCountdown, 1000);