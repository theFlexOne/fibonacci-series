function fibonacci(num) {
  let a = 0, b = 1;
  for (let i = 0; i < num; i++) [a, b] = [b, (a + b)];
  return a;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 233");
  console.log("=>", fibonacci(14));

  console.log("");

  console.log("Expecting: 1597");
  console.log("=>", fibonacci(17));

  console.log("");

  console.log("Expecting: 12586269025");
  console.log("=>", fibonacci(50));
}


module.exports = fibonacci;

/*
pseudo-code:

a) make 2 variables (a & b) that point to the previous 2 numbers in the sequence, and default to 0 & 1
b) loop with a for loop, using the num argument as the amount of iterations
  c) add a + b
  d) update a & b
e) return a (if i starts with a value of 0)

explanation:

I first thought about building an array but assumed that I could use math, since the Fibonacci sequence is math.
I only needed two pointers to find the next number.
I tried some cool destructuring and it worked. I like the way mine looks WAY better than the one in the solutions directory.
*/
