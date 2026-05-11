const heart = document.getElementById("heart");
const timerText = document.getElementById("timer");
const backLink = document.getElementById("backLink");

/* PEGAR ID */

const params = new URLSearchParams(window.location.search);
const heartId = params.get("heart");

/* POSIÇÃO */

let x = 100;
let y = 100;

let vx = 8;
let vy = 8;

/* CONTROLE */

let moving = true;
let holdTime = 0;
let interval = null;

/* MOVIMENTO */

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

/* COMEÇAR */

function startHolding(e){

  e.preventDefault();

  if(!moving) return;

  moving = false;

  holdTime = 0;

  timerText.textContent = "0";

  interval = setInterval(() => {

    holdTime++;

    timerText.textContent = holdTime;

    if(holdTime >= 5){

      clearInterval(interval);

      /* SALVAR PROGRESSO */

      let completed = JSON.parse(localStorage.getItem("completed")) || [];

      if(!completed.includes(heartId)){
        completed.push(heartId);
      }

      localStorage.setItem("completed", JSON.stringify(completed));

      /* ESCONDER */

      heart.style.display = "none";
      timerText.style.display = "none";

      /* MOSTRAR VOLTAR */

      backLink.style.display = "block";
    }

  }, 1000);
}

/* SOLTAR */

function stopHolding(){

  if(holdTime < 5){

    clearInterval(interval);

    moving = true;

    timerText.textContent = "0";
  }
}

/* MOBILE */

heart.addEventListener("touchstart", startHolding);
heart.addEventListener("touchend", stopHolding);

/* PC */

heart.addEventListener("mousedown", startHolding);
heart.addEventListener("mouseup", stopHolding);
