const output = document.getElementById("feestdag");

const url = "https://date.nager.at/api/v3/PublicHolidays/2026/NL";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        const vandaag = new Date();

        const komendeFeestdag = data.find(function(dag) {
            return new Date(dag.date) >= vandaag;
        });

        output.innerHTML =
            komendeFeestdag.date + " - " + komendeFeestdag.localName;

    })
    .catch(function(error) {
        console.log("Error:", error);
    });
    output.innerHTML =
    "Volgende feestdag: <br>" +
    komendeFeestdag.date + " - " + komendeFeestdag.localName;