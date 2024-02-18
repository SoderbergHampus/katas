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


def two_sum(numbers, target):
    for i, x in enumerate(numbers):
        for j, y in enumerate(numbers):
            if i != j and x + y == target:
                return (i, j)


def in_array(array1, array2):
    arr1, arr2 = sorted(array1), sorted(array2)
    result = []
    for word1 in arr1:
        for word2 in arr2:
            if word1 in word2 and word1 not in result:
                result.append(word1)
    return result


print(
    "Should return ['arp', 'live', 'strong'] ",
    in_array(
        ["arp", "live", "strong"],
        ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
)

print(
    "Should return [] ",
    in_array(
        ["tarp", "mice", "bull"],
        ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
)
