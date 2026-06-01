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