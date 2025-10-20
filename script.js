
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    const currentTime = new Date().getTime();
    timeElement.textContent = `Current Time: ${currentTime}ms`;
}
updateTime();
setInterval(updateTime, 1000);
