from sympy import *


def execute_explicit(suite, rank):
    x = var('x')
    sympy_suite = sympify(suite)
    return sympy_suite.subs(x, rank)


def execute_recurent(suite, initial_term, rank):
    x = var('x')
    sympy_suite = sympify(suite)
    i = 0
    while i < rank:
        initial_term = sympy_suite.subs(x, initial_term)
        i = i + 1
    return initial_term


def is_arithmetique(suite, initial_term, is_recurrent=0):
    value_holder = []
    i = 1
    while i <= 6:
        if is_recurrent == 0:
            value_holder.append(int(execute_explicit(suite, i)))
        else:
            value_holder.append(int(execute_recurent(suite, initial_term, i)))
        i = i + 1
    first_test = abs(value_holder[0] - value_holder[1])
    second_test = abs(value_holder[2] - value_holder[3])
    third_test = abs(value_holder[4] - value_holder[5])
    return first_test == second_test == third_test


def is_geometrique(suite, initial_term, is_recurrent=0):
    value_holder = []
    i = 1
    while i <= 6:
        if is_recurrent == 0:
            value_holder.append(int(execute_explicit(suite, i)))
        else:
            value_holder.append(int(execute_recurent(suite, initial_term, i)))
        i = i + 1
    first_test = value_holder[1] / value_holder[0]
    second_test = value_holder[3] / value_holder[2]
    third_test = value_holder[5] / value_holder[4]
    return first_test == second_test == third_test


firstChoice = int(input("Type 1 for an explicit or 2 for recurrent... => "))
if firstChoice == 1:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    if is_arithmetique(suite, 0):
        print("Cette suite est arithmétique.")
    elif is_geometrique(suite, 0):
        print("Cette suite est géométrique.")
    else:
        print("Cette suite n'est ni arithmétique ni géométrique.")
elif firstChoice == 2:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    initialTerm = int(input("Enter the value for U0... => "))
    if is_arithmetique(suite, initialTerm, 1):
        print("Cette suite est arithmétique.")
    elif is_geometrique(suite, initialTerm, 1):
        print("Cette suite est géométrique.")
    else:
        print("Cette suite n'est ni arithmétique ni géométrique.")
else:
    print('Invalid input')

