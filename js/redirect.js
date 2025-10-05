let seconds = 5;
const countdownEl = document.getElementById("countdown");
const button = document.getElementById("manualRedirect");

// Change this to your redirect destination:
const redirectUrl = "https://exoneration.vip";

const interval = setInterval(() => {
  seconds--;
  countdownEl.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(interval);
    window.location.href = redirectUrl;
  }
}, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
  window.location.href = redirectUrl;
});