"use strict";

var _pdf2png = require("./pdf2png");

var testUrl = '';
console.time();
(0, _pdf2png.pdf2png)(testUrl).then(function (res) {
    console.timeEnd();
    console.log(res);
});