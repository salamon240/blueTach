const diceOne = document.getElementById("diceOne");
const diceTwo = document.getElementById("diceTwo");
const resultTable = document.getElementById("resultTable");

const rollDice = (dice) => (dice.innerHTML = Math.floor(Math.random() * 6) + 1);

// Math.random()
// console.log(Math.floor((Math.random() * 6) + 1))

// console.log(Math.trunc(Math.random() *6  + 1))

const rollDices = () => {
  rollDice(diceOne);
  rollDice(diceTwo);
};

function cubeRollPromise() {
  return new Promise((resolve, reject) => {
    if (diceOne.innerText === diceTwo.innerText) {
      resolve();
    } else {
      reject();
    }
  });
}

function addRow(msg) {
  resultTable.innerHTML +=
    `<tr>` +
    `<td>${msg}</td>` +
    `<td>${diceOne.innerText}</td>` +
    `<td>${diceTwo.innerText}</td>` +
    `</tr>`;
}

const cubeRoll = () => {
  rollDices();
  cubeRollPromise()
    .then(() => {
      addRow("Resolve");
    })
    .catch(() => {
      addRow("Reject");
    });
};

document.getElementById("btnRoll").addEventListener("click", cubeRoll);
