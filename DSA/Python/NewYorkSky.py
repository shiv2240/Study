def Solve(N, heights):
    for i in range(N):
        if i==0:
            if heights[i]>heights[i+1]:
                print(1,end=" ")
            else:
                print(0,end=" ")
        elif i==N-1:
            if heights[i]>heights[i-1]:
                print(1)
            else:
                print(0)
        else:
            if heights[i]>heights[i-1] and heights[i]>heights[i+1]:
                print(2,end=" ")
            elif heights[i]>heights[i-1] or heights[i]>heights[i+1]:
                print(1, end=" ")
            else:
                print(0,end=" ")

   
T=int(input())
while T>0:
    N=int(input())
    arr=list(map(int,input().split()))
    Solve(N,arr)
    T-=1