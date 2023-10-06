s = [1, 2, [3, 4, 5], [6, [7, 8, 9], 10], 11, 12]


def flatten(seq):
    for i in seq:
        if type(i) == list:
            for j in flatten(i):
                yield j
        else:
            yield i


print(list(flatten(s)))
