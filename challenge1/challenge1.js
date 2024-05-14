// Penguin page
chatPos = 0;

const penguinChat = [
  { msg: "Bunăă!!!", img: "" },
  { msg: "În primul rând, LA MULTI ANII!!!", img: "-closed" },
  {
    msg: "Sper că ți a placut ce ai primit de la Radu și sper ca ai avut o zi superbă!",
    img: "-closed",
  },
  { msg: "Acum...mai există ceva ce trebuie sa primești...", img: "" },
  { msg: "Daaar, nu încă! Va trebui să treci de niște provocări!", img: "" },
  {
    msg: "De ce? Pai, de unde știu eu că ești chiar tu Andra? Trebuie să mă convingi!!!",
    img: "-hmm",
  },
  {
    msg: "Nu te stresa, dacă ești cu adevărat Andra, provocările o să ți se pară simple.",
    img: "-closed",
  },
  {
    msg: "Deeeeeeeci....dacă ești gata, APASĂ PE NEXT!",
    img: "",
  },
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
    var template = document.createElement("template");
    template.innerHTML = `<div class="dialog-container"><dialog class="start-dialog" open>
        <h3>Cod de acces!</h3>
        <div class="form-group">
            <h4>Întrebare:</h4>
            <p>Care este locul în care am avut primul date?</p>
        </div>
        <div class="form-group">
            <h4>Răspuns:</h4>
            <input type="text" id="answer1"/>
        </div>
        <p id="gresit" class="gresit">Nu este corect!</p>
        <button id="done" class="unselectable">Done</button>
        </form>
    </dialog></div>`;

    // Append the content of the template to the document body
    document.body.appendChild(template.content);

    document.getElementById("done").addEventListener("click", () => {
      let answer = document.getElementById("answer1").value;

      if (answer.toLowerCase() !== "tucano") {
        document.getElementById("gresit").style.display = "block";
      } else window.location.href = "../inter1and2/chat.html";
    });
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
