
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Kolkata'
};

let interrvalId;

function dateandtime() {
        interrvalId = setInterval(function () {
        let date = new Date();
        let formateddate = date.toLocaleString('en-US', options);

        document.getElementById("result").innerHTML = formateddate;
    }, 1000);
}

function stopdateandtime() {
    clearInterval(interrvalId);
}

