const clock= document.querySelector(".clock");

let date = new Date();
// console.log(date.toLocaleTimeString);

setInterval(function() {
    const date = new Date();
    const timeString = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString();

    clock.innerHTML = timeString + "<br>" + dateString;
}, 1000);
