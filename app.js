    // Set the end time to 5 seconds from now
    const endTime = Date.now() + 7000;

    // Check the time every 100 milliseconds
    const intervalId = setInterval(() => {
        // If the current time is past the end time, hide the loading animation and clear the interval
        if (Date.now() > endTime) {
            const loading = document.querySelector('.loading');
            loading.style.display = 'none';
            clearInterval(intervalId);
        }
    }, 100);
    window.addEventListener("load", function () {
  var loader = document.querySelector(".loading");
});


