from sympy import *
from sympy.abc import x


def is_limit(suite):
    res = limit_seq(suite, x)
    if res == oo or res == -oo:
        return "Suite divergente"
    elif res is None:
        return "Pas de limite"
    elif res.is_real:
        return "Suite convergente"
    else:
        return "Il semble y avoir un cas particulier non prévue..."


suite = sympify(input("Entrée la fonction pour déterminer sa limite(avec x en tant que variable) : "))
print(is_limit(suite))

