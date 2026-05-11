const heart = document.getElementById("heart");
const timerText = document.getElementById("timer");
const backLink = document.getElementById("backLink");

const params = new URLSearchParams(window.location.search);
const heartId = params.get("heart");

let x = 100;
let y = 100;

let vx = 7;
let vy = 7;

let moving = true;
let holdTime = 0;
let interval;

function moveHeart(){

  if(moving){

    const w = window.innerWidth;
    const h = window.innerHeight;

    const size = heart.offsetWidth;

    x += vx;
    y += vy;

    if(x + size >= w || x <= 0){
      vx *= -1;
    }

    if(y + size >= h || y <= 0){
      vy *= -1;
    }

    heart.style.left = x + "px";
    heart.style.top = y + "px";
  }

  requestAnimationFrame(moveHeart);
}

moveHeart();

/* SEGURAR */

function startHolding(){

  if(!moving) return;

  moving = false;

  holdTime = 0;
  timerText.textContent = "0";

  interval = setInterval(() => {

    holdTime++;

    timerText.textContent = holdTime;

    if(holdTime >= 5){

      clearInterval(interval);

      heart.style.display = "none";
      timerText.style.display = "none";

      backLink.style.display = "block";

      let completed = JSON.parse(localStorage.getItem("completed")) || [];

      if(!completed.includes(heartId)){
        completed.push(heartId);
      }

      localStorage.setItem("completed", JSON.stringify(completed));
    }

  }, 1000);
}

function stopHolding(){

  if(holdTime < 5){

    clearInterval(interval);

    moving = true;

    timerText.textContent = "0";
  }
}

heart.addEventListener("mousedown", startHolding);
heart.addEventListener("mouseup", stopHolding);
heart.addEventListener("touchstart", startHolding);
heart.addEventListener("touchend", stopHolding);
