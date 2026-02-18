try:
    print("Reading file content...")
    with open("sample.txt", "r") as f:
        n=1
        for line in f.readlines():
            print(f"Line {n}: {line}")
            n+=1
    with open("notFind.txt", "r") as f:
        n=1
        for line in f.readlines():
            print(f"Line {n}: {line}")

except FileNotFoundError as e:
    print(e)

