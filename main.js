const numbers = [1, 2, 3, 4, 5];
// let sumNum=numbers.reduce((accumulator,currentvalue)=> accumulator+currentvalue);
// console.log(sumNum);

let sumNum=numbers.reduce(function(pre,curr){

return pre + curr*2;
},10)
console.log(sumNum);
