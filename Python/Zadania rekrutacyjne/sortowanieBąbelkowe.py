random_numbers = [1, 5, 2, 6, 12, 64, 11, 4]


def sort_number(list_number):
    len_number = len(list_number)

    while len_number > 0:
        for i in range(0, len_number - 1):
            if list_number[i] > list_number[i + 1]:
                list_number[i], list_number[i + 1] = list_number[i + 1], list_number[i]

        len_number -= 1

    return list_number


print(sort_number(random_numbers))
