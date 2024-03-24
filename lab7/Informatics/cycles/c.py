import math as m

a = int(input())
b = int(input())


for i in range(a, b + 1):
    if int(m.sqrt(i)) == m.sqrt(i * 1.0):
        print(i)