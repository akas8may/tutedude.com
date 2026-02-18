import re;

def add(b,*args,c=3):
    """
    :param b:
    :param args:
    :param c:
    :return:
    """
    total = 0
    for card in args:
        total += card
        print(card)
    return total
add(1,2,3,4)

help(add)

abs= "alask 34242342342431331298 adcef";
pat= r"[0-9]{10}"
match= re.findall(pat,abs);
print(match)