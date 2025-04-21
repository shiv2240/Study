def check(n, arr):
    arr.sort()
    res = set()
    for i in range(n - 2):
        j = i + 1
        k = n - 1
        while j < k:
            s = arr[i] + arr[j] + arr[k]
            if s == 0:
                res.add((arr[i], arr[j], arr[k]))
                j += 1
                k -= 1
            elif s < 0:
                j += 1
            else:
                k -= 1
    fin = list(res)
    for i in range(len(fin)):
        for j in range(i + 1, len(fin)):
            if fin[i] > fin[j]:
                fin[i], fin[j] = fin[j], fin[i]
    print(len(fin))
    for triplet in fin:
        print(" ".join(map(str, triplet)))
    
# t=int(input())
# for i in range(t):
#   n=int(input())
#   arr=list(map(int,input().split()))
#   check(n,arr)

n=6
arr=[1,2,3,-4,8,10]
check(n,arr)
