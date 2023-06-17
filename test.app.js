const bcrypt = require("bcryptjs");

const passwordHash = bcrypt.hashSync("Pa$$w0rd", 8);
const appHash = "zaymax";
const x = passwordHash + appHash;
console.log("Hash password: ", x);

const verified = bcrypt.compareSync("Pa$$w0rd", x.replace(appHash, ""));
console.log("Verified password: ", verified);
