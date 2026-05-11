const heart = document.getElementById("heart");
const timerText = document.getElementById("timer");
const backLink = document.getElementById("backLink");

/* ID */

const urlParams = new URLSearchParams(window.location.search);
const heartId = urlParams.get("heart");

/* POSIÇÃO */

let x = 100;
let y = 100;

let speedX = 7;
let speedY = 7;

let moving = true;

let seconds = 0;
let interval = null;

/* MOVIMENTO */

function animateHeart(){

  if(moving){

    x += speedX;
    y += speedY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const size = heart.offsetWidth;

    if(x <= 0 || x + size >= width){
      speedX *= -1;
    }

    if(y <= 0 || y + size >= height){
      speedY *= -1;
    }

    heart.style.left = x + "px";
    heart.style.top = y + "px";
  }

  requestAnimationFrame(animateHeart);
}

animateHeart();

/* SEGURAR */

function startHold(e){

  e.preventDefault();

  moving = false;

  seconds = 0;

  timerText.innerHTML = "0";

  interval = setInterval(() => {

    seconds++;

    timerText.innerHTML = seconds;

    if(seconds >= 5){

      clearInterval(interval);

      /* SALVAR */

      localStorage.setItem(
        "heart_" + heartId,
        "true"
      );

      /* ESCONDER */

      heart.style.display = "none";

      timerText.style.display = "none";

      backLink.style.display = "block";
    }

  }, 1000);
}

/* SOLTAR */

function stopHold(){

  if(seconds < 5){

    clearInterval(interval);

    moving = true;

    timerText.innerHTML = "0";
  }
}

/* EVENTOS */

heart.addEventListener("mousedown", startHold);
heart.addEventListener("mouseup", stopHold);

heart.addEventListener("touchstart", startHold);
heart.addEventListener("touchend", stopHold);
