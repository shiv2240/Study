W=int(input("Enter the height of the brick wall : "))
H=int(input("Enter the the width of the brick wall : "))
for i in range(1,W+1):
    bag=""
    for j in range(1,H*2-1):
        if (i%2==0 and j%2==0) or (i%2!=0 and j%2!=0):
            bag+="[]"
        else:
            bag+="  "
    print(bag)