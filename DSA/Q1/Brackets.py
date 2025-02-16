def check(st):
    st1=[]
    pairs = {")":"(","}":"{","]":"["}
    for i in st:
        if i in "([{":
            st1.append(i)
        elif i in ")]}":
            if not st1 or st1[-1]!=pairs[i]:
                return "Not Balanced"
            st1.pop()
    return "Balanced" if not st1 else "Not Balanced"

st="[({})]" 
print(check(st))

# def check(st):
#     sta=[]
#     balance = True
#     for i in st:
#         if i=="[" and i=="{" and i=="(":
#             sta.append(i)
#         elif i=="}" and i=="]" and i==")":
#             if len(sta)==0:
#                 balance = False
#                 break
#             top = sta[-1]
#             if i==")" and top=="(" or i=="}" and top=="{" or i=="]" and top=="[":
#                 sta.pop()
#             else:
#                 balance = False
#                 break
#     if balance and len(sta)==0:
#         return "Balanced"
#     else:
#         return "Not Balanced"

