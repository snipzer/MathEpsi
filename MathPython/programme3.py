from sympy import *
import matplotlib.pyplot as plt


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


def create_graph(suite, initialTerm, is_recurent=0):
    value_holder = []
    i = 1
    while i < 200:
        if is_recurent == 0:
            value_holder.append(int(execute_explicit(suite, i)))
        else:
            value_holder.append(int(execute_recurent(suite, initialTerm, i)))
        i = i + 1
    plt.plot(value_holder)
    plt.show()


firstChoice = int(input("Type 1 for an explicite or 2 for recurrent... => "))
if firstChoice == 1:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    create_graph(suite, 0)
elif firstChoice == 2:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    initialTerm = int(input("Enter the value for U0... => "))
    create_graph(suite, initialTerm, 1)
else:
    print('Invalid input')

