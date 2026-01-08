

let isGood = require("lib/index.js")
let shuf = require("lodash/shuffle")

console.log(isGood("abc"))
console.log(isGood("bca"))

console.log(isGood(shuf("hello").join("")))
