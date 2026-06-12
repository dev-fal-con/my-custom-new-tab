function searchWeb() {
    const query = document.getElementById("searchInput").value;
    const engine = document.getElementById("engine").value;

    let url = "";

    if (engine === "google") {
        url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    } else if (engine === "duckduckgo") {
        url = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
    } else {
        url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
    }

    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {

    const searchBtn = document.getElementById("searchBtn");

    if (searchBtn) {
        searchBtn.addEventListener("click", searchWeb);
    }

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                searchWeb();
            }
        });
    }

    function updateClock() {
        const now = new Date();

        document.getElementById("time").textContent =
            now.toLocaleTimeString();

        document.getElementById("date").textContent =
            now.toDateString();
    }

    setInterval(updateClock, 1000);
    updateClock();

    const quotes = [
        "Stay hungry. Stay foolish.",
        "Success is the sum of small efforts.",
        "Dream big and dare to fail.",
        "Every day is a second chance.",
        "Make today amazing.",
        "Focus on progress, not perfection."
    ];

    document.getElementById("quote").textContent =
        quotes[Math.floor(Math.random() * quotes.length)];

    const notes = document.getElementById("notes");

    if (notes) {
        notes.value = localStorage.getItem("dashboardNotes") || "";

        notes.addEventListener("input", function () {
            localStorage.setItem("dashboardNotes", notes.value);
        });
    }
});