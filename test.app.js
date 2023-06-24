/*const bcrypt = require("bcryptjs");

const passwordHash = bcrypt.hashSync("Pa$$w0rd", 8);
const appHash = "zaymax";
const x = passwordHash + appHash;
console.log("Hash password: ", x);

const verified = bcrypt.compareSync("Pa$$w0rd", x.replace(appHash, ""));
console.log("Verified password: ", verified);
*/

let arrSymbol = [
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
];
const randId = (arr, numb) => {
  let res = [];
  for (let i = 0; i < numb; i++) {
    res.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return res.join("");
};

console.log(randId(arrSymbol, 10));
