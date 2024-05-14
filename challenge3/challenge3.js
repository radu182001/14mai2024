const seif = document.getElementById("seif");

seif.addEventListener("click", () => {
  seif.classList.add("animate");

  seif.addEventListener("animationend", () => {
    seif.classList.remove("animate");
  });

  let cod1 = Number(document.getElementById("1").value);
  let cod2 = Number(document.getElementById("2").value);
  let cod3 = Number(document.getElementById("3").value);

  if (cod1 === 8 && cod2 === 3 && cod3 === 2) {
    console.log("gata");
    window.location.href = "../final/chat.html";
  } else {
    document.getElementById("warning").style.display = "block";
  }
});
