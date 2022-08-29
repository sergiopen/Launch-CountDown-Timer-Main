function updateTime(){
    finalDate = new Date("1 Dec 2022");
    actuallyDate = new Date();

    let secondsLeft = (finalDate - actuallyDate) / 1000;
    let days = Math.floor(secondsLeft / (3600*24));
    let hours = Math.floor(secondsLeft % (3600*24) / 3600);
    let minutes = Math.floor(secondsLeft % 3600 / 60);
    let seconds = Math.floor(secondsLeft % 60);

    document.querySelector(".days").textContent = addZeros(days);
    document.querySelector(".hours").textContent = addZeros(hours);
    document.querySelector(".minutes").textContent = addZeros(minutes);
    document.querySelector(".seconds").textContent = addZeros(seconds);
}

function addZeros(n){
    return n < 10 ? "0" + n : n;
}

updateTime();
setInterval(updateTime, 1000);