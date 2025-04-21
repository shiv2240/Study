def three_min_three_max(N, arr):
    arr=list(set(arr))
    arr.sort()
    if N==0 or N<6:
        print("Not Possible")
        print("Not Possible")
        return
    else:
        a= arr[:3]
        for i in a:
            print(i,end=" ")
        print()
        b=arr[len(arr)-3:]
        for i in b:
            print(i,end=" ")