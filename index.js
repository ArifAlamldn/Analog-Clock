let hr = document.querySelector(".hand.hours");

let min = document.querySelector(".hand.minute");
let sec = document.querySelector(".hand.second");

function run() {

    

    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hRotation = 30 * hours + minute / 2;
    let mRotation = 6 * minute;             
    let sRotation = 6 * second;      
          
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(run, 1000);
run(); 
