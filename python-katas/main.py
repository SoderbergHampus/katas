import math
import numpy as np


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


def perimeter(n):
    sides = [1, 1]

    for i in range(2, n + 1):
        # sides = np.append(sides, sides[i - 1] + sides[i - 2])
        sides.append(sides[i - 1] + sides[i - 2])

    sum = 0
    for num in sides:
        sum += num

    return 4 * sum


print("Should be 80: ", perimeter(5))
print("Should be 216: ", perimeter(7))
print("Should be 114624: ", perimeter(20))
