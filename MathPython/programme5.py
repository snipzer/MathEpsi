from sympy import *
from sympy.abc import x


def is_limit(suite):
    res = limit(suite, x, oo)
    if res == oo:
        return "Suite divergente"
    elif res == -oo:
        return "Suite convergente"
    else:
        return "Pas de limite"


suite = sympify(input("Entrée la fonction pour déterminer sa limite :\n"))
print(is_limit(suite))
