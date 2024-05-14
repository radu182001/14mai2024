// Penguin page
chatPos = 0;

const penguinChat = [
  { msg: "Oooook, n-a fost așa greu oricum!", img: "-closed" },
  {
    msg: "Ne apropiem de final. Mai ai puțin să mă convingi că tu ești Andra!",
    img: "-closed",
  },
  { msg: "Ultimul cadou a lui Radu se află în seif.", img: "" },
  {
    msg: "Trebuie să te folosești de indicii pentru a descoperi cele 3 cifre care deschid seiful!",
    img: "",
  },
  {
    msg: "După ce le gasești, introdu-le și vei pune mâna pe cadou.",
    img: "",
  },
  { msg: "Gata! Când eși pregătită, apasă pe next!", img: "-closed" },
];

document.getElementById("penguinChat").innerText = penguinChat[chatPos].msg;

penguin.classList.add("animate");

penguin.addEventListener("animationend", () => {
  penguin.classList.remove("animate");
});

document.getElementById("next-btn").addEventListener("click", () => {
  chatPos++;

  // If end of dialog
  if (chatPos >= penguinChat.length) {
    window.location.href = "../challenge3/challenge3.html";
  } else {
    document.getElementById("penguinChat").innerText = penguinChat[chatPos].msg;
    const penguin = document.getElementById("penguin");
    penguin.src = `../assets/penguin${penguinChat[chatPos].img}.png`;

    penguin.classList.add("animate");

    penguin.addEventListener("animationend", () => {
      penguin.classList.remove("animate");
    });
  }
});
