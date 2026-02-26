/* ANIMATED COUNTERS */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = (current + increment).toFixed(1);
            setTimeout(update, 30);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

/* TEMPERATURE CHART */
new Chart(document.getElementById("tempChart"), {
    type: "line",
    data: {
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [{
            label: "Global Temperature Rise (°C)",
            data: [0.2, 0.4, 0.6, 0.9, 1.2],
            borderWidth: 2,
            fill: false
        }]
    }
});

/* CO2 CHART */
new Chart(document.getElementById("co2Chart"), {
    type: "bar",
    data: {
        labels: ["1980", "1990", "2000", "2010", "2020"],
        datasets: [{
            label: "CO₂ Levels (ppm)",
            data: [338, 354, 369, 390, 420],
            borderWidth: 1
        }]
    }
});