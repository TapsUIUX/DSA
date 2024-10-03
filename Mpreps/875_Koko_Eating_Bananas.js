var minEatingSpeed = function (piles, h) {
  // step 1: sort the arr and get min and max
  let sortedPiles = [...piles];
  sortedPiles.sort((a, b) => a - b);
  //   console.log(piles, sortedPiles);
  let minBph = sortedPiles[0];
  let maxBph = sortedPiles[sortedPiles.length - 1];
  let hr = 0;

  if (piles.length == 1 && h > 0) {
    let x = Math.floor(minBph / h);
    if (minBph % h) {
      x += 1;
    }
    return x;
  }

  // step 2 start bhp from min to max

  while (minBph < maxBph) {
    for (let i = 0; i < piles.length; i++) {
      let sum = piles[i]; // first val
      while (sum > 0) {
        sum -= minBph;
        hr++;
      }
      if (hr == h && i == piles.length - 1) {
        console.log(minBph);
        return minBph;
      }
      if (hr > h) {
        hr = 0;
        break;
      }
    }
    minBph++;
  }

  //   console.log(">>>", hr, minBph);
  return minBph;
};

console.log(
  minEatingSpeed(
    [
      332484035, 524908576, 855865114, 632922376, 222257295, 690155293,
      112677673, 679580077, 337406589, 290818316, 877337160, 901728858,
      679284947, 688210097, 692137887, 718203285, 629455728, 941802184,
    ],
    823855818
  )
);
