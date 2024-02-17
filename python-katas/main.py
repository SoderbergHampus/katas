import math


def is_prime(num):
    if num < 2:
        return False

    divident = 2
    while divident <= math.sqrt(num):
        if num % divident == 0:
            return False
        divident += 1

    return True


def digital_root(n):
    nStr = str(n)
    sum = 0

    for char in nStr:
        sum += int(char)

    if len(nStr) == 1:
        return sum

    return digital_root(sum)


print("Should be 16: ", digital_root(16))
print("Should be 2: ", digital_root(493193))
