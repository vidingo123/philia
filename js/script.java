window.onload = () => {

  let completed = JSON.parse(localStorage.getItem("completed")) || [];

  console.log(completed);

  completed.forEach(id => {

    const heart = document.getElementById("c" + id);

    if(heart){

      heart.innerHTML = "❤️";

      heart.style.color = "red";

    }

  });

  const finalPhoto = document.getElementById("finalPhoto");

  if(completed.length >= 3){

    finalPhoto.style.filter = "grayscale(0%)";

    finalPhoto.style.opacity = "1";

    finalPhoto.style.cursor = "pointer";

    finalPhoto.onclick = () => {

      window.location.href = "final.html";

    };

  }

};
