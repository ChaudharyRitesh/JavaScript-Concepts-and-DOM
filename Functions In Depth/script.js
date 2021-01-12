'use strict';

/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);


const flight = 'LH123';
const ritesh = {
  name: 'Ritesh Chaudhari',
  passport: 122345676
}

// creating a check-in func

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH234';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 122345676) {
    alert('Check In')
  }
  else {
    alert("Invalid Passport")
  }
}

// checkIn(flight, ritesh);
// console.log(flight);
// console.log(ritesh);


// new
const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}
newPassport(ritesh);
checkIn(flight, ritesh);

*/

/*
//============= FIRST CLASS FUNCTION ================//
//============= HIGHER ORDER FUNCTION ===============//

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split();
  return [first.toUpperCase(), ...others.join(' ')];
};

//higher order function

const transformer = function(str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('Hey');
greeter('Ritesh');
greeter('Rambo');


// call and apply 
const airIndia = {
  airline: 'Air India',
  iataCode: "AI",
  bookings: [],

  book(flightNum, name){
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode} ${this.flightNum}`, name});
  },
};

airIndia.book(222, 'Ritesh Chaudhari');
airIndia.book(321, 'John Doe');
console.log(airIndia)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const indigo = {
  airline: 'Indigo',
  iataCode: 'IN',
  bookings: [],
};

const book = airIndia.book;

// doesnot work
// book(221, 'Sara Williams')

// book.call(eurowings, 221, 'Sara Williams');
// console.log(eurowings);

// book.call(airIndia, 221, 'John Doe');
// console.log(airIndia);


// apply method
// const flightData = [232, 'George Cooper'];
// book.apply(eurowings, flightData);
// console.log(eurowings)

//============ BIND METHOD ===========//
const bookIn = book.bind(indigo);
// bookIn(221, 'Ritesh Chaudhari')

const bookIn223 = book.bind(indigo, 223);
bookIn223('Ritesh Chaudhari');
bookIn223('Martha Cooper');

// with the event listeners
indigo.planes = 300;
indigo.buyPlanes = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}
// indigo.buyPlanes();

document.querySelector('.buy').addEventListener('click', indigo.buyPlanes.bind(indigo));

// partial application of bind

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

*/

//=========== CODE CHALLENGE ===========//

const poll = {
  question: 'What is your fav programming language',
  options: ['0: JavaScript', '1: Python', '2:Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerPollAnswer() {
    const answer = prompt(
      `${this.question}\n ${this.options.join('\n')} (write options here)`
      );
      console.log(answer);

      typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

      this.displayResult()
      this.displayResult('string')
  },

  displayResult(type = 'array') {
    if(type === 'array'){
      console.log(this.answers);
    }
    else if(type === 'string'){
      console.log(`Poll results are ${this.answers.join(', ')}`)
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registerPollAnswer.bind(poll));

poll.displayResult.call({answers: [5, 2, 3]}, 'string');
poll.displayResult.call({answers: [5, 2, 3, 4, 1]});