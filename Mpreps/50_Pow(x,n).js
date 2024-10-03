function pow1(x, n) {
  let result = 1;
  let prod = x;
  function calc(n) {
    if (n < 1) return;
    if (n % 2 !== 0) result *= prod;
    prod *= prod;
    calc(Math.floor(n / 2));
  }
  calc(Math.abs(n));
  if (n < 1) return 1 / result;
  return result;
}
function pow(x, n) {
  let pow = 1;
  let prod = x;
  while (pow < n / 2) {
    prod *= prod; // x * x
    pow *= 2;
  }
  let remaining = n - pow;
  for (let i = 0; i < remaining; i++) {
    prod *= x;
  }

  console.log(prod, pow);
}
pow(2, 10);

module.exports = pow;
