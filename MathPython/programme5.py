# coding=utf-8

from sympy import *
from sympy.abc import x


def is_limit(suite):
    res = limit_seq(suite, x)
    if res == oo or res == -oo:
        return "La suite possède comme limite %s, elle est donc divergente." % res
    elif res is None:
        return "La suite ne possède pas de limite."
    elif res.is_real:
        return "La suite possède comme limite %s, elle est donc convergente." % res
    else:
        return "Il semble y avoir un cas particulier non prévue..."


suite = sympify(input("Entrée la fonction pour déterminer sa limite(avec x en tant que variable) : "))
print(is_limit(suite))

