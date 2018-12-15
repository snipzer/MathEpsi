from sympy import *


def execute_explicit(suite, rang):
    x = var("x")
    resultat = suite.subs(x, rang)
    return resultat


def execute_recurent(suite, rang, initial_term):
    x = var("x")
    i = 0
    while i < rang:
        initial_term = suite.subs(x, initial_term)
        i = i + 1
    return initial_term


def is_monotone(suite, initial_term, is_recurent=0):
    value_holder = []
    i = 0
    while i <= 5:
        if is_recurent == 0:
            value_holder.append(execute_explicit(suite, i))
        else:
            value_holder.append(execute_recurent(suite, i, initial_term))
        i = i + 1
    return analyse_resultat(value_holder)


def analyse_resultat(value_holder):
    first_test = value_holder[1] - value_holder[0]
    second_test = value_holder[3] - value_holder[2]
    third_test = value_holder[5] - value_holder[4]
    if first_test == second_test == third_test == 0:
        return "La suite est constante"
    elif first_test > 0 and second_test > 0 and third_test > 0:
        return "La suite est croissante et monotone"
    elif first_test < 0 and second_test < 0 and third_test < 0:
        return "La suite est décroissante et monotone"
    else:
        return "La suite n'est pas monotone"


first_choice = int(input("Type 1 for an explicit or 2 for recurrent... => "))
if first_choice == 1:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    print(is_monotone(suite))
elif first_choice == 2:
    suite = input("Enter the expression of the function with 'x' as variable... => ")
    initial_term = int(input("Enter the value for U0... => "))
    print(is_monotone(suite, initial_term, 1))
else:
    print('Invalid input')

