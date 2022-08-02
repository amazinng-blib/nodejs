// Modules - Encapsulated code (only share minimun)
// CommonJs - every file is module(by default)

// In other to access modules, we use required

const { john, peter, sussan } = require("./4-names");
const sayHi = require("./5-utilities");
const data = require("./6-alternativive-flavor");
require("./7-mind-grinade");
sayHi(john);
sayHi(peter);
sayHi(sussan);
