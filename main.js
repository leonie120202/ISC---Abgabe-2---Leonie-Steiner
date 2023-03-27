let startTime = new Date();

function currentDay() {
    let thisday = new Date();
    let weekdays = ["Sonntag", "Montag", "Dienestag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let months = ["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
    let year = thisday.getFullYear();
    let dayInMonth = thisday.getDate();
    let weekday = weekdays[thisday.getDay()];
    let month = months[thisday.getMonth()];
    let fulldate = weekday + ", " + dayInMonth  + ". " + month + " " + year;
    document.getElementById("date").innerText = fulldate;
}

function currentTime() {
    let today = new Date();
    let hours = addLeadingZero(today.getHours());
    let minutes = addLeadingZero(today.getMinutes());
    let seconds = addLeadingZero(today.getSeconds());
    let fulltime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = fulltime
    setTimeout(currentTime, 1000);
}

function addLeadingZero(value) {
    if(value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}

function timeOnPage() {
    let time = new Date();
    let timePast = Math.floor((time - startTime)/1000);
    let seconds = timePast % 60;
    let minutes = Math.floor(timePast / 60) % 60;
    let hours = Math.floor(timePast / 3600);
    let PageTime = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
    alert("Zeit auf Seite beträgt: " + PageTime);
}

function refresh() {
    location.reload();
}