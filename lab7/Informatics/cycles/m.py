n = int(input())

cnt = 0

for i in range(n):
    val = int(input())
    if val == 0:
        cnt += 1

print(cnt)