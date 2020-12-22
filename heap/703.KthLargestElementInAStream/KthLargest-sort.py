#!/usr/bin/env python3
class KthLargest:

    def __init__(self, k, nums):
        self.k = k
        nums.sort(reverse = True)
        self.arr = nums[:k]
        
    def add(self, val):
        if (len(self.arr) < self.k) or (val > self.arr[-1]):
            self.arr.append(val)
           
            self.arr.sort(reverse=True)
            if len(self.arr) > self.k:
                self.arr.pop()
        return self.arr[-1]
    
    def print1(self):
        for num in self.arr:
            print(num, end=' ')
        print()

# Your KthLargest object will be instantiated and called as such:
obj = KthLargest(3, [4, 5, 8, 2])
param_1 = obj.add(3)
param_2 = obj.add(7)
obj.print1()
param_3 = obj.add(10)
param_4 = obj.add(9)
param_5 = obj.add(3)
print(param_5)

obj2 = KthLargest(3, [])
p1 = obj2.add(1)
print(p1)