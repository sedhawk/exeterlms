///////////////////////////////////////////////////////////////////////////
// Don Speer
// Dynamic Programming
// Fibonacci sequence using basic iteration, a recursive memoization
// algorithm, and a non-recursive bottom-up approach.
///////////////////////////////////////////////////////////////////////////

let times = null;

// Basic iteration
function fibonacci(num) {
  let t0 = performance.now();
  let a = 0, b = 1, tmp = 1;
  for(var i = 2; i <= num; i++) {
    tmp = a + b;
    a = b;
    b = tmp;
  }
  let t1 = performance.now();
  times.Iterative = (t1 - t0);
  console.log(t1);
  console.log(t0);
  return tmp;
};

// Recursive memoization
let fib = (n) => {
  let memo = [];
  let f = 0;
  let worker = (n) => {
    let f = 0;
    if (memo[n]) return memo[n];
    else if (n <= 2) f = 1;
    else f = worker(n - 1) + worker(n - 2);
    memo[n] = f;
    return f;
  }
  let t0 = performance.now();
  f = worker(n);
  let t1 = performance.now();
  times.Memoization = (t1 - t0);
  return f;
}

// Non-recursive bottom-up approach
let fib_bu = (n) =>{
  let F = [];
  let t0 = performance.now();
  for (k in Array.from(Array(n).keys())){
    if (k < 2) f = 1;
    else f = F[k-1] + F[k - 2];
    F[k] = f;
  }
  let t1 = performance.now();
  times.Bottoms_up = (t1 - t0);
  return F[n-1];
}

runTest = () => {
  times = {
    Iterative: 0,
    Memoization: 0,
    Bottoms_up: 0
  };
  let n = parseInt(document.getElementById("seq").value);
  fibonacci(n);
  fib(n);
  fib_bu(n);
  document.getElementById("iterative").innerHTML = times.Iterative;
  document.getElementById("memoization").innerHTML = times.Memoization;
  document.getElementById("bottoms_up").innerHTML = times.Bottoms_up;
}
