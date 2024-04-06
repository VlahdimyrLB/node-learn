// import Built in Module OS
const os = require("os");

// info about current user
const user = os.userInfo();

console.log(user);
//  {
//     uid: -1,
//     gid: -1,
//     username: 'Dodi',
//     homedir: 'C:\\Users\\Dodi',
//     shell: null
//   }

// method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`); //The system uptime is: 102472.281 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freMem: os.freemem(),
};

console.log(currentOS);
//  {
//     name: 'Windows_NT',
//     release: '10.0.19045',
//     totalMem: 12663775232,
//     freMem: 5444362240
//   }
