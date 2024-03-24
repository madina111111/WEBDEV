def xor(a, b):
    if a == 1 and b == 0:
        return 1
    if a == 0 and b == 1:
        return 1
    return 0

a, b = map(int, input().split())

print(xor(a, b))
    