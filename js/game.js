const heart = document.getElementById("heart");
const timerText = document.getElementById("timer");
const backLink = document.getElementById("backLink");

const params = new URLSearchParams(window.location.search);

const heartId = params.get("heart");

let x = 100;
let y = 100;

let vx = 8;
let vy = 8;

let moving = true;

let timer = 0;
let interval;

/* MOVIMENTO */

function animate(){

  if(moving){

    x += vx;
    y += vy;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const size = heart.offsetWidth;

    if(x <= 0 || x + size >= w){
      vx *= -1;
    }

    if(y <= 0 || y + size >= h){
      vy *= -1;
    }

    heart.style.left = x + "px";
    heart.style.top = y + "px";
  }

  requestAnimationFrame(animate);
}

animate();

/* SEGURAR */

function startHold(e){

  e.preventDefault();

  moving = false;

  timer = 0;

  timerText.innerHTML = "0";

  interval = setInterval(() => {

    timer++;

    timerText.innerHTML = timer;

    if(timer >= 5){

      clearInterval(interval);

      let completed = JSON.parse(localStorage.getItem("completed")) || [];

      if(!completed.includes(heartId)){
        completed.push(heartId);
      }

      localStorage.setItem("completed", JSON.stringify(completed));

      heart.style.display = "none";

      timerText.style.display = "none";

      backLink.style.display = "block";
    }

  }, 1000);
}

/* SOLTAR */

function stopHold(){

  if(timer < 5){

    clearInterval(interval);

    moving = true;

    timerText.innerHTML = "0";
  }
}

heart.addEventListener("touchstart", startHold);

heart.addEventListener("touchend", stopHold);

heart.addEventListener("mousedown", startHold);

heart.addEventListener("mouseup", stopHold);
