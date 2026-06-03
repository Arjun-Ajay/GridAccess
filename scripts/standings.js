const drivers = {
    antonelli: {
        name: "Antonelli",
        wins: 2,
        podiums: 3,
        points: 72
    },
    russell: {
        name: "Russell",
        wins: 1,
        podiums: 3,
        points: 63
    },
    leclerc: {
        name: "Leclerc",
        wins: 0,
        podiums: 2,
        points: 49
    },
    hamilton: {
        name: "Hamilton",
        wins: 0,
        podiums: 2,
        points: 41
    },
    norris: {
        name: "Norris",
        wins: 0,
        podiums: 1,
        points: 25
    },
    verstappen: {
        name: "Verstappen",
        wins: 0,
        podiums: 0,
        points: 12
    }
};

function compareDrivers() {
    const d1 = drivers[document.getElementById("driver1").value];
    const d2 = drivers[document.getElementById("driver2").value];

    document.getElementById("name1").innerText = d1.name;
    document.getElementById("wins1").innerText = d1.wins;
    document.getElementById("podiums1").innerText = d1.podiums;
    document.getElementById("points1").innerText = d1.points;

    document.getElementById("name2").innerText = d2.name;
    document.getElementById("wins2").innerText = d2.wins;
    document.getElementById("podiums2").innerText = d2.podiums;
    document.getElementById("points2").innerText = d2.points;
}

/* ---- View Toggles ---- */
function showTableView() {
    document.getElementById("table-view").style.display = "block";
    document.getElementById("cards-view").style.display = "none";
    document.getElementById("tab-table").classList.add("active");
    document.getElementById("tab-cards").classList.remove("active");
}

function showCardsView() {
    document.getElementById("table-view").style.display = "none";
    document.getElementById("cards-view").style.display = "block";
    document.getElementById("tab-table").classList.remove("active");
    document.getElementById("tab-cards").classList.add("active");
}

/* ---- Driver Details Modal ---- */
const driversDetails = {
    russell: {
        number: "63",
        flag: "🇬🇧",
        name: "George Russell",
        team: "Mercedes-AMG Petronas",
        wins: 1,
        podiums: 3,
        points: 63,
        championships: 0,
        img: "images/Grussel.avif",
        bio: "George Russell is a British racing driver currently competing in Formula One for Mercedes. Known for his stellar qualifying speed and consistent race execution, he has secured one grand prix win and three podiums this season."
    },
    antonelli: {
        number: "12",
        flag: "🇮🇹",
        name: "Kimi Antonelli",
        team: "Mercedes-AMG Petronas",
        wins: 2,
        podiums: 3,
        points: 72,
        championships: 0,
        img: "images/KimiA.avif",
        bio: "Andrea Kimi Antonelli is a rising Italian racing star driving for Mercedes in the 2026 season. Under the mentorship of Mercedes, he has already secured two impressive wins this season."
    },
    leclerc: {
        number: "16",
        flag: "🇲🇨",
        name: "Charles Leclerc",
        team: "Scuderia Ferrari",
        wins: 0,
        podiums: 2,
        points: 49,
        championships: 0,
        img: "images/Cleclerc.avif",
        bio: "Charles Leclerc is a Monégasque racing driver competing for Ferrari. Widely regarded as a pure qualifying master, he continues his quest to bring the World Championship back to Maranello."
    },
    hamilton: {
        number: "44",
        flag: "🇬🇧",
        name: "Lewis Hamilton",
        team: "Scuderia Ferrari",
        wins: 0,
        podiums: 2,
        points: 41,
        championships: 7,
        img: "images/Lhami.avif",
        bio: "Lewis Hamilton is a British racing driver and seven-time World Champion. Driving for Ferrari, he brings unmatched experience and determination as he chases a historic eighth world title."
    },
    norris: {
        number: "4",
        flag: "🇬🇧",
        name: "Lando Norris",
        team: "McLaren Racing",
        wins: 0,
        podiums: 1,
        points: 25,
        championships: 0,
        img: "images/Lnorris.avif",
        bio: "Lando Norris is a British racing driver competing for McLaren. With his blistering pace and popular personality, Norris has established himself as one of the top contenders on the grid."
    },
    verstappen: {
        number: "1",
        flag: "🇳🇱",
        name: "Max Verstappen",
        team: "Red Bull Racing",
        wins: 0,
        podiums: 0,
        points: 12,
        championships: 3,
        img: "images/Mversappen.avif",
        bio: "Max Verstappen is a Dutch racing driver and three-time World Champion competing for Red Bull Racing. Renowned for his aggressive driving and exceptional race pace, he is always a threat for the top spot."
    },
    piastri: {
        number: "81",
        flag: "🇦🇺",
        name: "Oscar Piastri",
        team: "McLaren Racing",
        wins: 0,
        podiums: 1,
        points: 21,
        championships: 0,
        img: "images/Opiastri.avif",
        bio: "Oscar Piastri is an Australian racing driver driving for McLaren Racing. Fast, composed, and highly analytical, Piastri is one of the most promising young stars on the modern F1 grid."
    },
    bearman: {
        number: "87",
        flag: "🇬🇧",
        name: "Oliver Bearman",
        team: "Haas F1 Team",
        wins: 0,
        podiums: 0,
        points: 17,
        championships: 0,
        img: "images/Obearman.avif",
        bio: "Oliver Bearman is a British driver racing for the Haas F1 Team in the 2026 season. After an impressive debut series of sessions, he continues to show strong racing class and potential."
    },
    gasly: {
        number: "10",
        flag: "🇫🇷",
        name: "Pierre Gasly",
        team: "Alpine F1 Team",
        wins: 0,
        podiums: 0,
        points: 15,
        championships: 0,
        img: "images/Pgasly.avif",
        bio: "Pierre Gasly is a French Formula One driver competing for Alpine. Known for his racecraft and determination, Gasly brings great consistency and speed to the Alpine F1 Team."
    },
    lawson: {
        number: "30",
        flag: "🇳🇿",
        name: "Liam Lawson",
        team: "Racing Bulls",
        wins: 0,
        podiums: 0,
        points: 10,
        championships: 0,
        img: "images/Llawson.avif",
        bio: "Liam Lawson is a New Zealand racing driver competing for VCARB Racing Bulls. Strong under pressure and tactically sharp, he has cemented his place on the 2026 F1 starting grid."
    },
    sainz: {
        number: "55",
        flag: "🇪🇸",
        name: "Carlos Sainz Jr",
        team: "Williams Racing",
        wins: 0,
        podiums: 0,
        points: 2,
        championships: 0,
        img: "images/Csainz.avif",
        bio: "Carlos Sainz Jr is an experienced Spanish Formula One driver competing for Williams. With a reputation for excellent analytical feedback and race strategy, he is a key asset to the team."
    }
};

function openDriverModal(driverId) {
    const data = driversDetails[driverId];
    if (!data) return;

    document.getElementById("modal-driver-img").src = data.img;
    document.getElementById("modal-driver-number").innerText = data.number;
    document.getElementById("modal-driver-flag").innerText = data.flag;
    document.getElementById("modal-driver-name").innerText = data.name;
    document.getElementById("modal-driver-team").innerText = data.team;
    document.getElementById("modal-points").innerText = data.points;
    document.getElementById("modal-wins").innerText = data.wins;
    document.getElementById("modal-podiums").innerText = data.podiums;
    document.getElementById("modal-championships").innerText = data.championships;
    document.getElementById("modal-bio-text").innerText = data.bio;

    const modal = document.getElementById("driver-detail-modal");
    modal.style.display = "flex";
}

function closeDriverModal() {
    document.getElementById("driver-detail-modal").style.display = "none";
}

// Close modal when clicking outside content area
window.addEventListener("click", function(event) {
    const modal = document.getElementById("driver-detail-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});