import {pdf2png} from "./pdf2png";
let testUrl = ''
console.time()
pdf2png(testUrl).then(res =>{
    console.timeEnd()
    console.log(res)
})