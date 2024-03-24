n = int(input())
res = 0

for i in range(2, n + 1):
    if n % i == 0:
        res = i
        break

print(res)