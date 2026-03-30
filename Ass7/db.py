import psycopg2
conn = psycopg2.connect(
    host="localhost",
    database="mydb",
    user="postgres",
    password="123@#Ura"
)

cur = conn.cursor()
cur.execute("SELECT * FROM users")
user= cur.fetchall()
print(user[0][2])
conn.commit()
conn.close()