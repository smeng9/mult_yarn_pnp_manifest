const isSorted = require("is-sorted");

module.exports = function (str) {
  return isSorted(str.split("").map(char => char.charCodeAt(0)))
}
