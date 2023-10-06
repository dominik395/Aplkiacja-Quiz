import string


class BigLitterCounter:
    def __init__(self, file_name):
        self.file_name = file_name
        self.counter = 0

    def process_file(self):
        with open(self.file_name, 'r') as input_file:
            while True:
                char = input_file.read(1)

                if not char:
                    break

                if char in string.ascii_uppercase:
                    self.counter += 1

                # if char.isupper():
                #     self.counter += 1


a = BigLitterCounter('text.txt')
a.process_file()
print(a.counter)
