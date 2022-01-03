Days = document.getElementById("days")
Hours = document.getElementById("hours")
Minutes = document.getElementById("minutes")
Seconds = document.getElementById("seconds")



function countdown() {
    const christmas = '25 Dec 2021';
    const currdate = new Date();

    const christmasDate = new Date(christmas);

    const totalseconds = Math.floor(christmasDate - currdate) / 1000;
    //console.log(seconds);

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

}

countdown();
setInterval(countdown, 1000);
