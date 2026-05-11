const completed = JSON.parse(localStorage.getItem("completed")) || [];

/* CORAÇÕES */

completed.forEach(id => {

  const heart = document.getElementById("c" + id);

  if(heart){

    heart.innerHTML = "❤️";

    heart.classList.add("filled");
  }

});

/* FOTO FINAL */

const finalPhoto = document.getElementById("finalPhoto");

/* EVOLUÇÃO */

if(completed.length >= 1){
  finalPhoto.style.opacity = "0.7";
}

if(completed.length >= 2){
  finalPhoto.style.filter = "grayscale(30%)";
}

if(completed.length >= 3){

  finalPhoto.classList.add("active");

  finalPhoto.style.filter = "grayscale(0%)";

  finalPhoto.style.opacity = "1";

  finalPhoto.style.cursor = "pointer";

  finalPhoto.addEventListener("click", () => {

    window.location.href = "final.html";

  });

}
