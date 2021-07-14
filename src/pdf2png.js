"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pdf2png = undefined;

var _pdfjsDist = require("pdfjs-dist");

var _pdfjsDist2 = _interopRequireDefault(_pdfjsDist);

var _pdf = require("pdfjs-dist/build/pdf.worker");

var _pdf2 = _interopRequireDefault(_pdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pdfjsDist2.default.GlobalWorkerOptions.workerSrc = _pdf2.default;

var pdf2png = exports.pdf2png = function pdf2png(url) {
    // let CMAP_URL = "https://unpkg.com/pdfjs-dist@2.0.943/cmaps/";
    var imgArr = [];
    var pdfPageNumber = 0;
    var pdfData = _pdfjsDist2.default.getDocument(url);
    return new Promise(function (resolve) {
        pdfData.promise.then(function (pdf) {
            pdfPageNumber = pdf.numPages;

            var _loop = function _loop(i) {
                console.log("正在初始化中第" + i + "页");
                var canvas = document.createElement("canvas");
                canvas.className = 'canvas' + i;
                pdf.getPage(i).then(function (page) {
                    // 获取DOM中为预览PDF准备好的canvasDOM对象
                    var viewport = page.getViewport(1);
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    var ctx = canvas.getContext("2d");
                    var renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    page.render(renderContext).then(function () {
                        console.log("正在转换中第" + i + "页");
                        var img = canvas.toDataURL("image/png");
                        imgArr.push({
                            url: img,
                            sortS: i
                        });
                        if (imgArr.length >= pdfPageNumber) {
                            console.log("转换完毕");
                            imgArr = imgArr.sort(function (a, b) {
                                return a.sortS - b.sortS;
                            });
                            resolve(imgArr);
                        }
                    });
                });
            };

            for (var i = 1; i <= pdfPageNumber; i++) {
                _loop(i);
            }
        });
    });
};