from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def render():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('About_Us.html')

@app.route("/contact")
def contact():
    return render_template('Contact_Us.html')

if __name__ == '__main__':
    app.run(debug=True, port=8000)