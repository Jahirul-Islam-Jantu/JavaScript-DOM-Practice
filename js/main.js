// const age = 17;

// if (age > 18) {
//   console.log("You are adult.");
// } else if (age == 18) {
//   console.log("you are adult, congratulations!");
// } else if (age < 18) {
//   console.log("You are not adult");
// } else if (age < 60) {
//   console.log("you are not an old person");
// } else {
//   console.log("you are not an adult person");
// }

// Logical Operator

// && -  and and
/**
 * Left  Right   result
 *
 * True  true    true
 * True  false   false
 * false  true   false
 * false  false   false
 *
 *
 * */

// const left = 30;
// const right = 100;

// // const result = left < 50 && right > 80;
// const result = left > 20 && right < 90;
// console.log(result);

// || -  logical or
/**
 * Left  Right   result
 *
 * True  true    true
 * True  false   true
 * false  true   true
 * false  false   false
 *
 *
 * */

// const left = 50
// const right = 90

// const result = left > 60 || right < 20

// console.log(result)

/* !operator */
// const left = 60
// const right = 100

// const result = left > 99 || right < 12
// console.log(!result);
// let isTrue = !true;
// console.log(isTrue);

// switch case

const day = 5;

switch (day) {
  case 0:
    console.log("sunday");
  case 1:
    console.log("monday");
  case 2:
    console.log("tuesday");
  case 3:
    console.log("wednesday");
  case 4:
    console.log("thursday");
  case 5:
    console.log("friday");
  case 6:
    console.log("saturday");
  case 7:
    console.log("sunday");
}
