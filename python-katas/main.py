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
