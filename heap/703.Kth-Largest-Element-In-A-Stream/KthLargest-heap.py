from heapq import heapify, heappop, heappush, heappushpop

class KthLargest:

    def __init__(self, k, nums):
        self.k = k
        self.k_heap = nums
        heapify(self.k_heap)
        while len(self.k_heap) > self.k:
            heappop(self.k_heap)

    def add(self, val):
        if len(self.k_heap) < self.k:
            heappush(self.k_heap, val)
        else:
            heappushpop(self.k_heap, val)
        return self.k_heap[0]
    
    def print1(self):
        for num in self.k_heap:
            print(num, end=' ')
        print()
        
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
