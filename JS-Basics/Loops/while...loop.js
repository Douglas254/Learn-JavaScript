// Printing even numbers between 0 - 100
let i = 0;

while (i <= 100) {
  if (i % 2 == 0) {
    console.log("Even number", i);
  }
  i++;
}

// without the curl braces {}
while (i <= 100) {
  if (i % 2 == 0) console.log("Even number", i);
  i++;
}
