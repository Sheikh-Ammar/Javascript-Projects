const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstP = document.getElementById("val1");
let secontP = document.getElementById("val2");
let Alive = false;

function Generator() {
  let password1 = "";
  let password2 = "";
  let passwordL = 15;

  for (let i = 0; i < passwordL; i++) {
    let random1 = Math.floor(Math.random() * characters.length);
    let random2 = Math.floor(Math.random() * characters.length);
    password1 += characters[random1];
    password2 += characters[random2];
  }
  firstP.textContent = password1;
  secontP.textContent = password2;
  Alive = true;
}
function Copyone() {
  navigator.clipboard.writeText(firstP.textContent);
  if (Alive === true) {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
}
function Coptwo() {
  navigator.clipboard.writeText(secontP.textContent);
  if (Alive === true) {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
}
