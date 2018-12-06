from sympy import *


def execute_explicit(suite, rank):
    x = var('x')
    sympy_suite = sympify(suite)
    return sympy_suite.subs(x, rank)


def execute_recurent(suite, initialTerm, rank):
    x = var('x')
    sympy_suite = sympify(suite)
    i = 0
    while i < rank:
        initialTerm = sympy_suite.subs(x, initialTerm)
        i = i + 1
    return initialTerm


firstChoice = int(input("Type 1 for an explicite or 2 for recurrent... => "))
if firstChoice == 1:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    rank = int(input("Enter the rank for x... => "))
    print(execute_explicit(suite, rank))
elif firstChoice == 2:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    initialTerm = int(input("Enter the value for U0... => "))
    rank = int(input("Enter the rank for x... => "))
    print(execute_recurent(suite, initialTerm, rank))
else:
    print('Invalid input')

