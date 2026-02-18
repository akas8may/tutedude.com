def factorial(num):
    num = int(num)
    if num:
        return num * factorial(num-1)
    else:
        return 1

def factorial_loop(num):
    num = int(num)
    result = 1
    while num > 0:
        result *= num
        num -= 1
    return result


number = abs(int(input("Enter a number: ")))
print(f"factorial of {number} is {factorial(number)}")
print(f"factorial of {number} is {factorial_loop(number)} using loop")





