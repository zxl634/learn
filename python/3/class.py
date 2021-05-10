class Difference:
    def __init__(self, a):
        self.__elements = a

    # Add your code here
    def computeDifference(self):
        max_diff = 0
        for i in self.__elements:
            for j in self.__elements:
                if abs(i - j) > max_diff:
                    max_diff = abs(i - j)
        self.maximumDifference = max_diff

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
