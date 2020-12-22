#!/usr/bin/env python3
def canFormArray(arr, pieces):
        for i in range(len(pieces)):
            if pieces[i][0] in arr:
                pos = arr.index(pieces[i][0])
                print(pos)
                for j in range(len(pieces[i])):
                    if pos >= len(arr) or pieces[i][j] != arr[pos]:
                        return False
                    pos = pos + 1
            else:
                return False
        return True

print(canFormArray([49, 18, 16], [[16, 18, 49]]))
print(canFormArray([2,4,5,6], [[4,5],[2],[6]]))