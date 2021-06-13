// syntax: for (initialExpression; Condition; Increment / DecrementExpression) {
//   statement;
// }

// program to display hello World! 5 times on the console
for (i = 0; i < 5; i++) {
  console.log("Hello World!", i);
}

// Decrement above code in reverse order
for (i = 5; i >= 1; i--) {
  console.log("Hello World", i);
}

// program to display odd numbers between 0 - 100

for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("Odd numbers are: ", i);
  }
}
