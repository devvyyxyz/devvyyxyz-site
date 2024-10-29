const countdownElement = document.getElementById("countdown");

// Set launch date to 35 days from 29th October at 6 AM
const launchDate = new Date("2024-10-29T06:00:00Z");
launchDate.setDate(launchDate.getDate() + 35);

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    // Calculate time components
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Stop countdown if launch date is reached
    if (diff <= 0) {
        countdownElement.innerHTML = "We're live!";
    }
}

// Initial countdown display update and timer
updateCountdown();
setInterval(updateCountdown, 1000);
