n = int(input())

res = 2
if n ** 0.5 % 1 == 0:
    res += 1
    q = int(n ** 0.5) - 1
else:
    q = int(n ** 0.5)
for i in range(2, q + 1):
    if n % i == 0:
        res += 2

print(res)