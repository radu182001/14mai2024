// Penguin page
chatPos = 0;

const penguinChat = [
  { msg: "Mmm...Ok! Ai știut. Poți trece la urmatorul challenge.", img: "" },
  { msg: "Vei avea de făcut un puzzle!", img: "-closed" },
  { msg: "Trebuie să potrivești piesele în chenarul de pe ecran.", img: "" },
  { msg: "Când potrivești o piesă, aceasta va avea marginile verzi.", img: "" },
  {
    msg: "Ar trebui să recunoști poza, deci nu vei avea probleme.",
    img: "",
  },
  { msg: "Asta dacă ești chiar tu Andra", img: "-hmm" },
  { msg: "SUCCES! Apasă pe next pentru a începe!", img: "-closed" },
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
    window.location.href = "../challenge2/challenge2.html";
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
