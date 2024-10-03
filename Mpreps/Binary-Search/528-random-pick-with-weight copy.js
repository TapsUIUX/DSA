// w = [1,3]
// the sum becomes 4
// the probability of 1 = 1/4
// the probability of 3 = 3/4

// step 1 : make it a cumulative sum

// that becomse
// [1,4]
// [1,2,3,4]
// we can now randomly pick any number from this and that
// and then binary search for the tance of the number
// if it is between

// resertvior sampling and binary search, if the numbers are not sorted we
// can go for reservior sampling
// if the number are sorted then we can do it
// using binary search

// the questin we need to ask firstt is
// are the numbers are sorted
// if the answer is yes then go for binary search as that is
// the optimal solution
// if the number are not sorted then deffinately
// it is an reservior sampling

// let us first assume that he number are sorter

// var Solution = function (w) {
//   // step 1 , get sum
//   let arr = w;
//   let sum = w.reduce((s, el) => (s += el), 0);
//   console.log(sum);
//   // step 2 : get the cumulative sum array
//   let c = 1;
//   let cs = [];
//   arr.forEach((w, i) => {
//     let x = c + w;
//     while (c != x) {
//       cs.push({ c, i });
//       c++;
//     }
//   });
//   console.log(cs);
//   console.log(getRandom(cs.length - 1));
//   let point = getRandom(cs.length - 1);
//   console.log(cs[point]["i"]);
//   return cs[point]["i"];
// };

// var Solution2 = function (w) {
//   // step 1 , get sum
//   let arr = w;
//   let sum = w.reduce((s, el) => (s += el), 0);
//   console.log(sum);

//   let bucket = [];
//   // step 2 : get the cumulative sum array
//   let c = 0;
//   let cs = [];
//   arr.forEach((w, i) => {
//     let x = c + w;
//     let curr = [];
//     while (c != x) {
//       curr.push(c);
//       c++;
//     }
//   });
//   console.log(cs);
//   console.log(getRandom(1, 25) - 1);
//   let point = getRandom(1, 25) - 1;
//   console.log(cs[point]["i"]);
//   return cs[point]["i"];
// };
