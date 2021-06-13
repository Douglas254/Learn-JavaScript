// atleast the statement is executed once unlike the while...loop
let i = 1;

do {
  if (i % 2 !== 0) console.log("Odd number", i);
  i++;
} while (i <= 5);
