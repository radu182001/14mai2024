// Penguin page
chatPos = 0;

const penguinChat = [
  {
    msg: "Vaai nu pot să cred! Ai trecut de toate provocările!",
    img: "-closed",
  },
  {
    msg: "Acum, că știu că ești Andra, îți voi da cadoul de la Radu.",
    img: "",
  },
  { msg: "Dar, mai întai, îți voi spune ce e.", img: "" },
  {
    msg: "A vrut să-ți facă ceva ce nu a mai facut de ceva timp.",
    img: "",
  },
  {
    msg: "Adică...",
    img: "",
  },
  {
    msg: "O melodie!",
    img: "",
  },
  {
    msg: "S-a gândit că nu se știe niciodată când va mai avea ocazia să facă asta.",
    img: "",
  },
  {
    msg: "Dar este pasiunea lui și îl bucură mult să împartă asta cu tine.",
    img: "-closed",
  },
  {
    msg: "Nu este chiar terminată 100%, dar în mare asta e melodia.",
    img: "",
  },
  {
    msg: "Te las cu cadoul! PAAAA!!!",
    img: "-closed",
  },
];

document.getElementById("penguinChat").innerText = penguinChat[chatPos].msg;

const penguin = document.getElementById("penguin");
penguin.src = `../assets/penguin${penguinChat[chatPos].img}.png`;

penguin.classList.add("animate");

penguin.addEventListener("animationend", () => {
  penguin.classList.remove("animate");
});

document.getElementById("next-btn").addEventListener("click", () => {
  chatPos++;

  // If end of dialog
  if (chatPos >= penguinChat.length) {
    window.location.href = "../song/song.html";
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
