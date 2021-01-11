'use strict';


/*
const weekdays = ['sun','mon','tue','wed','thu','fri','sat'];

const openingHours = {
    // one of the ES6 ways to use enhanced object literals

    [weekdays[3]]:{
        open: 8,
        close: 17
    },

    [weekdays[4]]: {
        open: 10,
        close: 20
    },
    [weekdays[5]]: {
        open: 11,
        close: 18
    }
};


const hotel = {
    name: 'Naan House',
    location: 'Pokhara Bagar, Kaski, Nepal',
    categories: ['Nepali Khaja','Local Khaja','Vegeterian'],
    starter: ['Apple Juice','Poached Egg','Garlic Bread','Naan'],
    mainMenu: ['Momo','Chicken Wings','burrito','Syafali'],

    // ES6 enhanced object literals
    openingHours,

    order(straterIndex, mainIndex){
        return [this.starter[straterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({straterIndex=1, mainIndex=0, time='20:00', address}){
        console.log(`order recieved!! ${this.starter[straterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
    },

    orderPizza(ing1, ...otherIng) {
        console.log(ing1);
        console.log(otherIng);
    }
};

*/

//=========== OPTIONAL CHAINING ===========//

// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for(const day of days) {
//     const open = hotel.openingHours[day]?.open ?? `closed`;
//     console.log(`On ${day} we open at ${open}`);
// }


// console.log(hotel.openingHours.mon?.open);
// console.log(hotel.openingHours?.mon?.open);

// if(hotel.openingHours && hotel.openingHours.mon)
//     console.log(hotel.openingHours.mon.open);


/*
hotel.orderDelivery({
    time: '22:33',
    address: 'Pokhara',
    mainIndex: 2,
    straterIndex: 2,
});

hotel.orderDelivery({
    address: 'Pokhara Simpani',
    straterIndex: 1,
});


//=========== destructuring an aaray =============//

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//from the right side
const[x,y,z] = arr;
console.log(x,y,z);

let [main, , secondary] = hotel.categories;
console.log(main, secondary);

//switching the variables

const temp = main;
main = secondary;
secondary = temp;

let [main, , secondary] = hotel.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [strater, mainCourse] = hotel.order(2,0);
console.log(strater, mainCourse);

//========== nested array destructing  ===========/

// const nestedArr = [2, 4, [5, 6]];
// const [i, , j] = nestedArr;
// console.log(i, j);

// better approach
const [i, , [j, k]] = [2, 4, [5, 6]];
console.log(i, j, k);

//default values
const [p=1,q=1,r=1] = [8, 9];
console.log(p,q,r);

// ============ DESTRUCTURING THE OBJECT===========//

const {name, openingHours, categories} = hotel;

const {
    name: hotelName, 
    openingHours: hours, 
    categories: tags
} = hotel;

console.log(hotelName, hours, tags);

const {menu = [], starter: starterMenu = []} = hotel;
console.log(starterMenu, menu);

// Mutating default menu

let a = 11;
let b= 33;

const obj = {a: 23, b:44, c:55};

// one of the ways to initialize the destructuring the object
({a,b} = obj);

// Nested Objects .. how to destructure
const {
    fri: {
        open: o, 
        close: c
    },

} = openingHours
console.log(o,c);


//============= USING THE SPREAD OPERATOR ===========//
const arr = [7, 8, 9];
const brandNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(brandNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...hotel.mainMenu, 'Jhol Momo'];
console.log(newMenu);

// Copy the array with the spread operator
const copyMainMenu = [...hotel.mainMenu];

// join two or more arrays
const menu = [...hotel.starter, ...hotel.mainMenu];
console.log(menu);

// iterables are: arrays, strings, maps, sets, but not OBJECTS
const str = 'Ritesh';
const letters = [...str, ' ', 'h.'];
console.log(letters);

// real world example
// const ingredients = [
//     prompt("let\'s make pasta! Ingredient 1?"),
//     prompt("let\'s make pasta! Ingredient 2?"),
//     prompt("let\'s make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// hotel.orderPasta(...ingredients);

//Objects
const newHotel = {founded: 1998, ...hotel, founder: 'Ritesh'};
console.log(newHotel);

const hotelCopy = {...hotel};
hotelCopy.name = "Hotel Pokhara";
console.log(hotelCopy.name);
console.log(hotel.name);

//======= REST PATTERN & PARAMETERS =========//
// REST operator because its on the left side of tne assignment
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b, others);

const [momo, Chicken, ...otherFood] = [...hotel.mainMenu, ...hotel.starter];
console.log(momo, Chicken, otherFood);

// Objects
const {sat, ...weekdays} = hotel.openingHours;
console.log(weekdays);

// funtions with rest patterns
const add = function(...numbers) {
    console.log(numbers);
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        sum += numbers[i];
        console.log(sum)

    }
}
add(2,3);
add(3,4,5,6);
add(3,4,5,6,7,8);
*/

/*

//============ CODING CHALLENGE ==========//
const game = {
    team1: 'Chennai Super Kings',
    team2: 'Mumbai Indians',

    players: [
        [
        'MS Dhoni',
        'Suresh Raina',
        'FAF Du Plesis',
        'Shane Watson',
        'Ruturaj Gaikwad',
        'Ambati Rayudu',
        'Ravindra Jadeja',
        'Deepak Chahar',
        'Shardul Thakur',
        'Lungi Ngidi',
        'Josh Hazelwood',
    ],

    [
        'Quinton DeCock',
        'Rohit Sharma',
        'Surya yadav',
        'Ishan Kishan',
        'Hardik Pandya',
        'Krunal Pandya',
        'Keiron Pollard',
        'Trent Boult',
        'Jasprit Bumrah',
        'Rahul Chahar',
        'Chrish Lynn',
    ],
    ],
    score: '4:0',
    scored:['Ms Dhoni','Suresh Raina','Lungi Ngidi','Deepak Chahar'],
    date: 'Nov 10th 2020',
    odds: {
        team1: 6.5,
        x: 3.25,
        team2: 1.33,
    }
};

// destructuring the players array
const [players1, players2] = game.players;
console.log(players1,players2);

// step2:
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3:
const allPlayers = [...players1, ...players2];
console.log(allPlayers)

const playersFinal = [...players1, 'Deepak Chahar','Faf Du Plesis','Suresh Raina'];

const {odds: {team1, x: draw, team2}} = game;

//6:
const printGoals = function(...players) {
    console.log(`${players.length} goals scored`);
}
printGoals(...game.scored);

//==== FOR OF LOOP ====//
const menu = [...hotel.starter, ...hotel.mainMenu];
for (const item of menu) console.log(item);

*/
