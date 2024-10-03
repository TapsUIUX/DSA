const findPeakElement = require("./162_Find_Peak_Element");
const findMedianSortedArrays = require("./4_Median_of_Two_Sorted_Arrays");

describe("Binary search solutio test", () => {
  it("should retur peak element", () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
    expect(findPeakElement([1])).toBe(0);
    expect(findPeakElement([1, 2])).toBe(1);
  });
  it("should return median", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });
});
