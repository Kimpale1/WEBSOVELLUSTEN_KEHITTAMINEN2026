function silitaTopoa() {
  const btn = document.getElementById("pet-btn");
  const message = document.getElementById("pet-message");
  const img = document.getElementById("topo-react");
  const sound = document.getElementById("purr-sound");

  // 1. piilota nappi
  btn.style.display = "none";

  // 2. näytä reaktio
  message.innerText = "Töpö kehrää tyytyväisenä 🐱";
  img.classList.remove("d-none");

  // 3. ääni
  sound.currentTime = 0;
  sound.play();

  // 4. reset
  setTimeout(() => {
    img.classList.add("d-none");
    message.innerText = "";
    btn.style.display = "inline-block";
  }, 13000);
}

