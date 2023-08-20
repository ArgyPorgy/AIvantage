from flask import Flask, render_template, request
from web3 import Web3


w3 = Web3(Web3.HTTPProvider('https://sepolia.infura.io/v3/c8716d5516e44d738ecf28895eec3e03'))


private_key = 'c8716d5516e44d738ecf28895eec3e03'


recipient_address = '0xB923b9ed260AA3b9bE3900A2C5A602f30FAD794b'

app = Flask(__name__)

data=[]

@app.route("/")
def render():
    return render_template('index.html')

@app.route("/home")
def home():
    return render_template('index.html')

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
    

  
@app.route('/payment', methods=['GET', 'POST'])
def payment():
    if w3.isConnected():
        try:
           
            account = w3.eth.account.privateKeyToAccount(private_key)

            transaction = {
                'to': recipient_address,
                'value': w3.toWei(0.01, 'ether'),  
                'gas': 21000,  
                'gasPrice': w3.toWei('10', 'gwei'),  
                'nonce': w3.eth.getTransactionCount(account.address),
            }

           
            signed_txn = account.signTransaction(transaction)
            tx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
            return f"Transaction sent: {tx_hash.hex()}"
        except Exception as e:
            return f"Error sending transaction: {e}"
    else:
        return "Web3 connection failed"


if __name__ == '__main__':
    app.run(debug=True, port=8000)