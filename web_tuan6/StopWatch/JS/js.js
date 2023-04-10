window.onload = function() {
    var m = 00;
    var s = 00;
    var ms = 00;
    var addMs = document.getElementById("ms");
    var addS = document.getElementById("s");
    var addM = document.getElementById("m");
    var buttonST = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonRS = document.getElementById("reset");
    var Interval;

    buttonST.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    buttonRS.onclick = function() {
        clearInterval(Interval);
        ms = "00";
        s = "00";
        addMs.innerHTML = ms;
        addS.innerHTML = s;
    }

    function startTime() {
        ms++;

        if (ms <= 9) {
            addMs.innerHTML = "0" + ms;
        }
        if (ms > 9) {
            addMs.innerHTML = ms;
        }
        if (ms > 99) {
            console.log("s");
            s++;
            addS.innerHTML = "0" + s;
            ms = 0;
            addMs.innerHTML = "0" + 0;
        }
        if (s > 9) {
            addS.innerHTML = s;
        }
        if (s > 59) {
            console.log("m");
            m++;
            addM.innerHTML = "0" + m;
            s = 0;
            addS.innerHTML = "0" + 0
        }
    }
}