// os module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);
// require("./7-mind-grinade")

// methodes that returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
