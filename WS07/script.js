function silitaTopoa() {
  const message = document.getElementById("pet-message");
  const img = document.getElementById("topo-react");
  const sound = document.getElementById("purr-sound");

  message.innerText = "Töpö kehrää tyytyväisenä 😌🐾";

  img.classList.remove("d-none");
 
  setTimeout(() => {
    img.classList.remove("d-none");
  }, 200);

  sound.currentTime = 0;
  sound.play();

}

