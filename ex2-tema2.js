//Calculați suma numerelor dintr-un șir de numere

// Method with for
const arr=[3.45, -2.68, 356, -75.96, 64, 19.28];
let sum = 0;
for(let i=0; i< arr.length;i++){
    sum +=arr[i];
} 
console.log(sum);

//Method with reduce ( )
const mynumbers =[1, -5, 20, -34, 16, 29, 36, -4];
var sum = mynumbers.reduce ((accumulator, currentValue) =>{
    return accumulator + currentValue
}, 0);
console.log (sum);

//Method with forEach()
const numbers =[ 76,90,4, -3, -20]
let sum =0;
numbers.forEach( num => {
    sum += num;
})
console.log (sum);


