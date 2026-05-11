const completed = JSON.parse(localStorage.getItem("completed")) || [];

/* PINTAR CORAÇÕES */

completed.forEach(id => {
  const heart = document.getElementById("c" + id);

  if(heart){
    heart.innerHTML = "❤️";
    heart.classList.add("filled");
  }
});

/* EVOLUÇÃO DA FOTO FINAL */

const finalPhoto = document.getElementById("finalPhoto");

if(completed.length >= 1){
  finalPhoto.style.opacity = "0.7";
}

if(completed.length >= 2){
  finalPhoto.style.filter = "grayscale(40%)";
}

if(completed.length >= 3){
  finalPhoto.classList.add("active");
}

/* DESBLOQUEAR FINAL */

if(completed.length >= 3){

  const finalPhoto = document.getElementById("finalPhoto");

  finalPhoto.classList.add("active");

  finalPhoto.style.cursor = "pointer";

  finalPhoto.addEventListener("click", () => {
    window.location.href = "final.html";
  });
}
