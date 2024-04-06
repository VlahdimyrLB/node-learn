//Modules

//CommoJS, every file is module (by default)
//Modules - Encapsulated Code (share minimal)

// access the exports using require and the parameter is the path of the module export
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");

console.log(data); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

// I destructure the names since its an object
const { vlahd, shar } = names;

sayHi(vlahd);
sayHi(shar);
