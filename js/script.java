const completed = JSON.parse(localStorage.getItem("completed")) || [];

/* PINTAR CORAÇÕES */

completed.forEach(id => {
  const heart = document.getElementById("c" + id);

  if(heart){
    heart.textContent = "❤";
    heart.classList.add("filled");
  }
});

/* DESBLOQUEAR FINAL */

if(completed.length >= 3){

  const finalPhoto = document.getElementById("finalPhoto");

  finalPhoto.classList.add("active");

  finalPhoto.style.cursor = "pointer";

  finalPhoto.addEventListener("click", () => {
    window.location.href = "final.html";
  });
}
