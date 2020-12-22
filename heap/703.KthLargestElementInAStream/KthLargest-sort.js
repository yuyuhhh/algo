/*
QUESTION:
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

    KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
    int add(int val) Returns the element representing the kth largest element in the stream.

*/

/*
IDEA:
See Kth largest element in array, think about sort (Onlogn)
eg. k=3 [4,5,8,2] 
1step: DES[8,5,4] keep k largest numbers in array 
2step: ADD6: push(6) => [8,6,5,4] size > k, remove newArr[newArr.length -1] => return newArr[len-1]
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    // descending order
    nums.sort((a, b) => b - a);
    //cut if > k
    if (nums.length > k) nums.length = k;
    //create class number: array
    this.arr = nums;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    //insert into heap slot
    if (this.arr.length < this.k || this.arr[this.arr.length - 1] < val) {
      this.arr.push(val);
      this.arr.sort((a, b) => b - a);
      if (this.arr.length > this.k) {
        this.arr.pop();
      }
    }
    return this.arr[this.arr.length - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var obj = new KthLargest(3, [6, 8, 5]);
let param_1 = obj.add(3);
let param_2 = obj.add(7);
let param_3 = obj.add(10);
let param_4 = obj.add(9);
let param_5 = obj.add(3);
console.log(param_5);
