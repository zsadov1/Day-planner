function initializeSchedule () {

    // 1. first grab the data we ALREADY have
    let data = JSON.parse(window.localStorage.getItem("dayPlanner"));
     // 2. update the data with our new time key and task value  
    let schedule = { ...data };

    document.getElementById('nineAm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('tenAm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('elevenAm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('twelvePm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('onePm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('twoPm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('threePm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('fourPm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('fivePm').value = schedule['9am'] ? schedule['9am'] : '';

}




function renderTime() {

    var currentTime = new Date();
    var diem = "AM";
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    if (h === 0) {
    h = 12;
    } else if (h > 12) {
        h = h - 12;
        diem ="PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var myClock = document.getElementById('clockDisplay');
    console.log(myClock);
    myClock.innerHTML = h + ":" + m + ":" + s + "" + diem;
    setTimeout('renderTime()' , 1000);

}
renderTime();
function addItemToDay( time, taskInputId) {

   const task = document.getElementById(taskIputId).value; 

    let dayPlannerData = JSON.parse(window.localStorage.getItem("dayPlanner"));

    let updateSchedule = {...data, [time]: taskinput };

    windown.localStroage.setItem("dayPlanner", JSON.stringify(updateSchedule));

}

addItemToDay();