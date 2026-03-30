from tkinter import *


w= Tk()
w.title("Calculator")
w.geometry("300x300")

#make a entry box
e= Entry(w,width=20)
e.place(x =0,y =0)

def click(num):
    result = e.get()
    e.delete(0, END)
    e.insert(0, result + str(num))

def sum():
    result = e.get()
    global math
    math= 'Addition'
    global i
    i = int(result)
    e.delete(0, END)

def sub():
    result = e.get()
    global math
    math= 'Subtraction'
    global i
    i = int(result)
    e.delete(0, END)
def mul():
    result = e.get()
    global math
    math= 'Multiplication'
    global i
    i = int(result)
    e.delete(0, END)

def div():
    result = e.get()
    global math
    math= 'Division'
    global i
    i = int(result)
    e.delete(0, END)

def equal():
    result = e.get()
    e.delete(0, END)
    if math == 'Addition':
        e.insert(0, i + int(result))
    elif math == 'Subtraction':
        e.insert(0, i - int(result))
    elif math == 'Multiplication':
        e.insert(0, i * int(result))
    elif math == 'Division':
        if int(result) == 0:
            e.insert(0, "Error: Division by zero")
        else:
            e.insert(0, i / int (result))


Button(w,text="1", command=lambda: click(1)).place(y=30,x=00)
Button(w,text="2", command=lambda: click(2)).place(y=30,x=60)
Button(w,text="3", command=lambda: click(3)).place(y=30,x=120)
Button(w,text="4", command=lambda: click(4)).place(y=70,x=00)
Button(w,text="5", command=lambda: click(5)).place(y=70,x=60)
Button(w,text="6", command=lambda: click(6)).place(y=70,x=120)
Button(w,text="7", command=lambda: click(7)).place(y=120,x=00)
Button(w,text="8", command=lambda: click(8)).place(y=120,x=60)
Button(w,text="9", command=lambda: click(9)).place(y=120,x=120)
Button(w,text="0", command=lambda: click(0)).place(y=160,x=00)
Button(w,text="-", command= sub).place(y=160,x=60)
Button(w,text="+", command= sum).place(y=160,x=120)
Button(w,text="*", command= mul).place(y=200,x=00)
Button(w,text="/", command= div).place(y=200,x=60)
Button(w,text="=", command= equal).place(y=200,x=120)
Button(w,text="c", command=lambda: e.delete(0, END)).place(y=240,x=00)
w.mainloop()