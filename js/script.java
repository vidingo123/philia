window.onload = () => {

  const h1 = localStorage.getItem("heart_1");
  const h2 = localStorage.getItem("heart_2");
  const h3 = localStorage.getItem("heart_3");

  /* CORAÇÃO 1 */

  if(h1 === "true"){

    document.getElementById("c1").innerHTML = "❤️";

  }

  /* CORAÇÃO 2 */

  if(h2 === "true"){

    document.getElementById("c2").innerHTML = "❤️";

  }

  /* CORAÇÃO 3 */

  if(h3 === "true"){

    document.getElementById("c3").innerHTML = "❤️";

  }

  /* FOTO FINAL */

  const finalPhoto = document.getElementById("finalPhoto");

  /* DESBLOQUEAR */

  if(
    h1 === "true" &&
    h2 === "true" &&
    h3 === "true"
  ){

    finalPhoto.style.filter = "grayscale(0%)";

    finalPhoto.style.opacity = "1";

    finalPhoto.style.cursor = "pointer";

    finalPhoto.onclick = () => {

      window.location.href = "final.html";

    };

  }

};
