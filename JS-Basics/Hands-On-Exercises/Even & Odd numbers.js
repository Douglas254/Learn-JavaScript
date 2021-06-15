// Write a function that will take limit as a parameter and when called it displays
// the numbers showing whether it is even number or odd number

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, '"EVEN"');
    else console.log(i, '"ODD"');
  }
}

// using the ternary operator to simplify above code
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? '"EVEN"' : '"ODD"';
    console.log(i, message);
  }
}

showNumbers(10); // calling function with the kind of limit that you want pass
