from math import exp, fabs


def f(x):
    return (exp(x) - 2*x) - 3


def center(min, max):
    return 0.5*(min + max)


def is_positif(x):
    return x > 0


def is_negatif(x):
    return x < 0


def is_inferior_range(min, max):
    return (is_positif(f(min)) and is_negatif(f(center(min, max)))) or (is_negatif(f(min)) and is_positif(f(center(min, max))))


def dicho(min, max):
    if fabs(f(min)) < 0.01:
        return min

    if is_inferior_range(min, max):
        return dicho(min, center(min, max))
    else:
        return dicho(center(min, max), max)


def getResult(min, max, isNeg):
    if isNeg:
        msg = "négative"
    else:
        msg = "positive"

    print("Pour la solution " + msg + ", min = " + str(min) + " max = " + str(max) + ", result = " + str(round(dicho(min, max), 2)))


getResult(0, 2, False)
getResult(-2, 0, True)
