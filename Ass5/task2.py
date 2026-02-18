numberList= [1,2,3,4,5,6,7,8,9,10]
half = numberList[:len(numberList)//2]
print("Original list",numberList)
print("Extracted first five element", half)
print("Reversed Extracted element",half[::-1])