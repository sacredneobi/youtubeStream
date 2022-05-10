// "use strict";

let data = { test: 1, isTest: true };
var data2 = { t: 1 };
const data3 = { x: 1000 };

data3.x = 4000;

data2 = data;

console.log(data, data2, data3);
