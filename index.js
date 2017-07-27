function fatBastard(meal) {
  function whatsForDinner() { // whatsForDinner() is the inner function, a closure
    if (meal === 'Mini-Me') { // whatsForDinner() uses argument provided to the parent function
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  return whatsForDinner;
}

const whatsForDinner = fatBastard('Kobe beef');
whatsForDinner();
const whatsInHisTummy = fatBastard('Mini-Me');
whatsInHisTummy();
