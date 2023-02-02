const cointoss = require('cointoss');
const supervillains = require('supervillains');

var res;

if(cointoss())
    res = "Heads";
else
    res = "Tails";

console.log(res);
console.log(supervillains.random);