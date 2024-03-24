v = int(input())
t = int(input())

s = abs(v) * t

k = s % 109

if (k == 0):
    print(0)
else:
    if (v < 0):
        print(109 - k)
    else:
        print(k)