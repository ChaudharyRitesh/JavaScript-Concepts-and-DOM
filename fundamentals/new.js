"use strict";

// using the strict mode in javascript
/*
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('has driver license');


function fruitProcessor(apple, orange) {
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 1));


// arrow functions

const retireYear = (birthyear, firstname) => {
    const age = 2037-birthyear;
    const retireAge = 65-age

    return `${firstname} retires in ${retireAge} years 🧨`;
}
console.log(retireYear(1990, 'John'));



// Arrays in JavaScript

const arr1 = ['Michael','Steven', 'Smith', 'John'];
arr1.push('Jay');
arr1.push('Jane');
arr1.unshift('Jannet');

console.log(arr1);
console.log(arr1.length);

// pop out elements from the array
console.log(arr1.shift());
console.log(arr1.pop());
console.log(arr1)

console.log(arr1.indexOf('Smith'));

if(arr1.includes('Steven')) {
    console.log(`You have a friend called steven`);
}


const calcTip = function(bill){
    return bill<=300 && bill >=100 ? bill *.5 : bill*.2;
}
const bills = [270, 50, 100];
const tip = [calcTip(bills[0]), calcTip(bills[1])];
console.log(tip,bills)



// introduction to arrays

const obj1 = {
    firstName: 'Ritesh',
    lastName: 'Chaudhari',
    age: 23,
    job : 'Web Developer',
    hasDriverLicense: true,
    friends: ['Smith', 'John', 'Sara'],
    birthyear: 1995,

    calcAge : function() {
        console.log(this)
        return this.birthyear - 1970;
    }
}

// console.log(obj1);
// console.log(obj1.lastName)

// console.log(obj1['firstName'])

// const nameKey = 'Name';
// console.log(obj1['first' + nameKey]);
// console.log(obj1['last' + nameKey]);

// creating objects  => {'key': 'value'}

console.log(obj1.calcAge());
// console.log(obj1['calcAge'](1995));


// loops in javascript
for(let i = 1; i <=10; i++) {
    console.log(`lifting the weight repetition ${i} 😃`);
}


const obj1 = [
    'Ritesh',
    'Chaudhari',
    23,
    'Web Developer',
     true,
    ['Smith', 'John', 'Sara'],
    1995
]

// looping from the back..

for (let i = obj1.length-1; i>=0; i--) {
    console.log(i, obj1[i]);
}


for(let exercise = 1; exercise < 5; exercise++) {
    console.log(`=================Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repitition ${rep} 🏃`)
    }
}

// while lopp
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE :=> lifting weight repitition ${rep} 🏃`);
    rep++;
}


let rollDice = Math.trunc( Math.random() * 6) + 1;
// console.log(rollDice);

while(rollDice !==6) {
    console.log(`You rolled ${rollDice}`);
    rollDice = Math.trunc( Math.random() * 6) + 1;

    if(rollDice === 6) {
        console.log(`loop ends here.....`);
    }
}

// calculating the sum of an array;

const calcArray = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
         sum += arr[i]
    }
    // console.log(sum)
    return sum;
}

console.log(calcArray([2,3,5,6]));
*/

function compareTriplets(a, b) {
  const arr1 = a;
  const arr2 = b;
  let aliceTotal = 0;
  let bobTotal = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      bobTotal++;
    } else if (arr2[i] > arr1[i]) {
      aliceTotal++;
    } else {
      continue;
    }
  }
  return [aliceTotal, bobTotal];
}

console.log(compareTriplets([5, 6, 7], [5, 6, 10]));
