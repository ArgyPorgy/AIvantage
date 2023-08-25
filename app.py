from flask import Flask, render_template, request



app = Flask(__name__)

data=[]

@app.route("/")
def render():
    return render_template('index.html')

# @app.route("/home")
# def home():
#     return render_template('index.html')

@app.route("/about")
def about():
    return render_template('About_Us.html')

@app.route("/contact")
def contact():
    return render_template('Contact_Us.html')

@app.route("/products")
def products():
    return render_template('products.html')

@app.route("/submit", methods = ['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    number = request.form.get('number')
    
    if name and email and number:
        data.append({"name": name, "email": email, "number": number})
        return "<script>alert('Form submitted successfully!');</script>"
    else:
        return "<script>alert('Error: please try again');</script>"


if __name__ == '__main__':
    app.run(debug=True, port=8000)