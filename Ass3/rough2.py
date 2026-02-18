import random
from os.path import split

num=random.randint(1,50)

print("Guess the number. you have 10 chance to guess it.")

for i in range(10):
    print(f"You have only {10-i} chance to guess it.")
    guess = int(input("Please enter your guess:"))
    if guess == num:
        print("congrats! you guessed the number")
        break
    else:
        if guess != num:
            print("you guess the wrong number")
print("Game Over")


