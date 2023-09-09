 // Function to update the UTC time continuously
 function updateUTCTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.getTime();

    document.getElementById('currentUTCTime').textContent = currentUTCTime;
    document.getElementById('currentUTCTime').setAttribute('data-testid', 'currentUTCTime');
}

// Initial update
updateUTCTime();

// Update the UTC time every second
setInterval(updateUTCTime, 1000);

// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];

// Update the HTML element with the current day of the week and its data-testid
document.getElementById('currentDayOfTheWeek').textContent = currentDay;
document.getElementById('currentDayOfTheWeek').setAttribute('data-testid', 'currentDayOfTheWeek');
