// Break - Jump out of a loop.
// Continue - Jump to the next iteration.

let i = 0;

while (i <= 10) {
  // if (i === 3) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
