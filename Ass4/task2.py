def writetofile(text):
    try:
         with open("output.txt", "at") as f:
            f.write(text + "\n")

         with open("output.txt", "r") as f:
            print(f.read())

    except Exception as e:
        print(e)

writetofile(input("Enter text for file: "))