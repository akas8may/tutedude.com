import copy
s1 ="Hello world"
print(s1[2:8:2])

f= frozenset({1,2,3,4,5})
print(f,type(f))


x=frozenset({"sxwec","adcxwd",3})
print(x,type(x))

print(f & x)
print(f | x)
print(f  , x)

a=[2,3,[3,5,7]]
for x in a:
    print(x)
    print(x,type(x))

x=0
while x < len(a):
    print(a)
    print(x, type(x))
    x=x+1

print(x)
print(type(x),type(len(a)))
if x >= len(a) :
    print("if")
    print(a[x])
else:
    print("else")
    print(a)
print("now")
b=a
c=copy.deepcopy(b)
d=copy.copy(a)
a[1]=4
a[2][2]=9
print(a)
print(b)
print(c)
print(d)

s=5
print(s,type(s))