// function fatBastard(meal) {
//   function whatsForDinner() { // whatsForDinner() is an inner function, a closure
//     if (!meal) { // whatsForDinner() uses argument provided to the parent function
//       console.log('My belly is empty. Woe is me.');
//     } else if (meal === 'Mini-Me') {
//       console.log('The wee man is in my belly!');
//     } else {
//       console.log(`I'm eatin' a bit of ${meal}! Burp.`);
//     }
//   }
//
//   function digest() { // digest() is an inner function, a closure
//     meal = undefined; // digest() uses argument provided to the parent function
//   }
//
//   return {whatsForDinner, digest};
// }

// const whatsForDinner = fatBastard('Kobe beef');
// whatsForDinner(); // prints 'I'm eatin' a bit of Kobe beef! Burp.'
//
// const whatsInHisTummy = fatBastard('Mini-Me');
// whatsInHisTummy(); // prints 'The wee man is in my belly!'
//
// const {whatsForDinner, digest} = fatBastard('ribeye');
// whatsForDinner(); // prints 'I'm eatin' a bit of ribeye! Burp.'
// digest();
// whatsForDinner(); // prints 'My belly is empty. Woe is me.'
//
// let obj = {a: "eyyyy", b: 2, c: 3};
// let {a, b, c} = obj;
//
// console.log(a,b,c);


function raspyDoorGuy() {
  const password = 'yarr'; // password is a local variable created by raspyDoorGuy()

  function givePassword(givenPassword) { // givePassword() is an inner function, a closure
    if (givenPassword === password) { // givePassword() uses variable declared in the parent function
      console.log('Ye may enter.');
    } else {
      console.log('Begone, landlubber!');
    }
  }

  function willBreakPrinciples(bribeAmount) { // willBreakPrinciples() is the private method
    return bribeAmount >= 50;
  }

  function bribe(amount) { // bribe() is an inner function, a closure
    if (willBreakPrinciples(amount)) { // bribe() uses private method created in the parent function
      return password; // bribe() uses variable declared in the parent function
    } else {
      console.log("Pssht. That won't work.");
    }
  }

  return {
    givePassword,
    bribe
  };
}

const {password, givePassword, bribe} = raspyDoorGuy()

givePassword('kittens'); // prints 'Begone, landlubber!'

bribe(40); // logs 'Pssht. That won't work.'
console.log(bribe(80)); // returns 'yarr'

givePassword(bribe(80))
