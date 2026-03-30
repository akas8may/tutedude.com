#IMPORTING FLASK
from flask import Flask , render_template , request

# CREATING A FLASK APPLICATION
web = Flask(__name__)

#Mappintg a URL to a function
@web.route("/")
def home():
    return render_template("home.html")


@web.route("/register")
def register():
    return render_template("register.html")

@web.route("/confirm", methods=["POST"])
def confirm():
    name = request.form.get("name")
    email = request.form.get("email")
    password = request.form.get("password")
    return render_template("confirm.html", name=name, email=email, password=password)


# Running the Flask application
if __name__ == "__main__":
    web.run(debug=True)