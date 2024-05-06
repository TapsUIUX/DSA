function getMaxProfit(p) {
  let len = p.length;
  let buyPrice = p[0];
  let i = 1;
  let maxProfit = 0;
  //if he sell next day what will be the plice
  while (i < len) {
    if (p[i] < buyPrice) {
      buyPrice = p[i];
    }

    let currentProfit = p[i] - buyPrice;

    maxProfit = Math.max(currentProfit, maxProfit);

    i++;
  }
  return maxProfit;
}

getMaxProfit([7, 1, 5, 3, 6, 4]);

function getMax2(p) {
  let [len, i, j, profit] = [p.length, 0, 0, 0];

  while (j < len) {
    if (p[j] < p[i]) {
      i = j;
    }
    profit = Math.max(profit, p[j] - p[i]);

    j++;
  }
  return profit;
}

let res = getMax2([7, 1, 5, 3, 6, 4]);
console.log(res);
