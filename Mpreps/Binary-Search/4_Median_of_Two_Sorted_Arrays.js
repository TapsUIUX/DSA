var findMedianSortedArrays = function (nums1, nums2) {
  //step 1: finding the smalles array
  if (nums2.length < nums1.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  // step2 : create variable and assigne values
  let m = nums1.length;
  let n = nums2.length;
  // m will always be the smallest // or same

  // step 3 : set the l and r indexes.

  let l = -1; // <===
  let r = m; // <====

  // step 4: write the binary search condition

  while (l <= r) {
    //calc MID that is PX
    let px = Math.floor((l + r) / 2); // this is the number of items we are selecting from the nums 1 array
    let py = Math.floor((m + n + 1) / 2) - px; // this will be consdered as the item we are selecting from the nums2 array

    // left side of the partion we created with px and py
    let l1 = px > 0 ? nums1[px - 1] : Number.NEGATIVE_INFINITY;
    let l2 = py > 0 ? nums2[py - 1] : Number.NEGATIVE_INFINITY;

    // right side of the partioson we created with px and py
    let r1 = px < m ? nums1[px] : Number.POSITIVE_INFINITY;
    let r2 = py < n ? nums2[py] : Number.POSITIVE_INFINITY;

    if (l1 <= r2 && l2 <= r1) {
      if ((m + n) % 2 === 0) return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      else return Math.max(l1, l2);
    }
    if (l1 > r2) {
      r = px - 1; // we are reducing the item we picked nums1 array by 1
    } else {
      l = px + 1; // increaseing the item we picked from the nums1 array by 1
    }
  }
};

module.exports = findMedianSortedArrays;
