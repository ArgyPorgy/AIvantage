const products = [
{
    image : 'https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1671741016.jpg',

    name : 'Calcimax Forte Plus Strip Of 30 Tablets' ,
    cost : '0.0018 SepoliaETH',
},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg',
    name: 'Dr. Morepen Gluco One Bg 03 Glucometer Test',
    cost: '0.0050 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/226830/prega-news-pregnancy-test-kit-1-1669655006.jpg',
    name: 'Prega News Pregnancy Test Kit',
    cost: '0.00032 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1671741223.jpg',
    name: 'Calcimax 500 Health Supplement Tablets',
    cost: '0.0038 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1671741035.jpg',
    name: 'Scalpe Plus Anti Dandruff Shampoo',
    cost: '0.0018 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-2-1671740956.jpg',
    name: 'Volini Pain Relief Gel Tube Of 75 G',
    cost: '0.0018 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg',
    name: 'Accu-Chek Active Glucometer Test',
    cost: '0.0070 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/105900/himalaya-liv52-ds-tablets-60s-2-1671741075.jpg',
    name: 'Himalaya Liv.52 Ds Tablets - 60\'S',
    cost: '0.0015 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1669710365.jpg',
    name: 'Accu-Chek Instant Glucometer Test ',
    cost: '0.0072 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1675775391.jpg',

    name: 'Pharmeasy Multivitamin Multimineral',
    cost: '0.0054 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/180461/venusia-max-intensive-moisturizing-cream-for-dry-to-very-dry-skin-repairs-smoothens-skin-150g-2-1686118239.jpg',
    name: 'Venusia Max Intensive Moisturizing Cream',
    cost: '0.0060 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/266914/clocip-anti-fungal-powder-of-100-gm-2-1671740821.jpg',
    name: 'Clocip Anti Fungal Powder Of 100 Gm',
    cost: '0.0014 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-2-1671741117.jpg',
    name: 'Revital H Women Multivitamin ',
    cost: '0.0029 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1671740865.jpg',
    name: 'Venusia Max Intensive Moisturizing Lotion',
    cost: '0.0080 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/D92359/everherb-by-pharmeasy-amla-juice-rich-in-vitamin-c-natural-immunity-booster-1-litre-bottle-2-1680238204.jpg',
    name: 'Everherb (By Pharmeasy) Amla Juice-',
    cost: '0.0019 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/131679/onetouch-select-test-stripsblood-sugar-test-machine-testing-strips50-strips-2-1689593025.jpg',
    name: 'Onetouch Select Test Strips',
    cost: '0.009 SepoliaETH'


},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/205923/maxirich-multivitamin-minerals-sofgels-strip-of-10-2-1671740732.jpg',
    name: 'Maxirich Multivitamin & Minerals Sofgels',
    cost: '0.0012 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1685623949.jpg',
    name: 'Pharmeasy All-In -One Vaporizer',
    cost: '0.0029 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I40513/softovac-sf-constipation-powder-bottle-of-250-g-2-1669710492.jpg',
    name: 'Softovac Sf Constipation Powder Bottle Of 250 G',
    cost: '0.004 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I40168/durex-extra-time-packet-of-10-condoms-2-1685367749.jpg',
    name: 'Durex Extra Time Packet Of 10 Condoms',
    cost: '0.0027 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/N37764/onetouch-select-plus-test-stripsfor-use-with-onetouch-select-plus-simple-glucometerpack-of-50-2-1689586535.jpg',
    name: 'Onetouch Select Plus Test Strips',
    cost: '0.009 SepoliaETH'


},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I48252/ahaglow-s-face-wash-foaming-bottle-of-100-ml-2-1675845974.jpg',
    
    name: 'Ahaglow S Face Wash Foaming Bottle',
    cost: '0.006 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/U97974/everherb-giloy-tulsi-juice-strengthens-body-defence-system-natural-immunity-booster-1-litre-2-1680172279.jpg',
    name: 'Everherb Giloy Tulsi Juice ',
    cost: '0.0023 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/T14325/ahaglow-advanced-tube-of-200gm-face-wash-gel-2-1690790078.jpg',
    name: 'Ahaglow Advanced Tube Of 200gm Face Wash Gel',
    cost: '0.007 SepoliaETH'

},

{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/D92359/everherb-by-pharmeasy-amla-juice-rich-in-vitamin-c-natural-immunity-booster-1-litre-bottle-2-1680238204.jpg',
    name: 'Everherb (By Pharmeasy) Amla Juice-',
    cost: '0.0019 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/131679/onetouch-select-test-stripsblood-sugar-test-machine-testing-strips50-strips-2-1689593025.jpg',
    name: 'Onetouch Select Test Strips',
    cost: '0.009 SepoliaETH'


},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/205923/maxirich-multivitamin-minerals-sofgels-strip-of-10-2-1671740732.jpg',
    name: 'Maxirich Multivitamin & Minerals Sofgels',
    cost: '0.0012 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1685623949.jpg',
    name: 'Pharmeasy All-In -One Vaporizer',
    cost: '0.0029 SepoliaETH'

},

{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1671741035.jpg',
    name: 'Scalpe Plus Anti Dandruff Shampoo',
    cost: '0.0018 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-2-1671740956.jpg',
    name: 'Volini Pain Relief Gel Tube Of 75 G',
    cost: '0.0018 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg',
    name: 'Accu-Chek Active Glucometer Test',
    cost: '0.0070 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/105900/himalaya-liv52-ds-tablets-60s-2-1671741075.jpg',
    name: 'Himalaya Liv.52 Ds Tablets - 60\'S',
    cost: '0.0015 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1669710365.jpg',
    name: 'Accu-Chek Instant Glucometer Test ',
    cost: '0.0072 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1675775391.jpg',

    name: 'Pharmeasy Multivitamin Multimineral',
    cost: '0.0054 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/180461/venusia-max-intensive-moisturizing-cream-for-dry-to-very-dry-skin-repairs-smoothens-skin-150g-2-1686118239.jpg',
    name: 'Venusia Max Intensive Moisturizing Cream',
    cost: '0.0060 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/266914/clocip-anti-fungal-powder-of-100-gm-2-1671740821.jpg',
    name: 'Clocip Anti Fungal Powder Of 100 Gm',
    cost: '0.0014 SepoliaETH'

},
{

    image:'https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-2-1671741117.jpg',
    name: 'Revital H Women Multivitamin ',
    cost: '0.0029 SepoliaETH'

},

]
//that was the list of products
let cartHTMl = '';
let productsHTML = '';
let sum = 0;

//generating the html manually
products.forEach((product)=>
{
        productsHTML+= `
                <div class="product" style="" >
                <div class="proImg">
                <img
                    src="${product.image}"
                    alt=""
                />
                </div>
                <div class="proDetails">
                <span class="proTitle">${product.name}</span>
                <span class="pcost">${product.cost}</span>
                <button class="addTocart js-addcart" data-proName = "${product.name}" data-proCost = "${product.cost}">Add To Cart</button>
                <p class="addedMsg">
                </p>
                </div>
                </div>`

});
//this cart is storing the add to cart values
let cart = [];


document.querySelector(".js-products").innerHTML = productsHTML;
//adding the values to the sidebar
document.querySelectorAll(".js-addcart").forEach((button)=>
{
button.addEventListener('click', ()=>{

    const proName = button.dataset.proname;
    const proCost = button.dataset.procost;
    
    cart.push({
        proName : proName,
        proCost : proCost
    });
    
});

});

//displaying the items in real time
document.querySelectorAll(".js-addcart").forEach((button)=>
{
    button.addEventListener('click', render);
});


//function to display
function render()
{
for (let i = 0; i<cart.length;i++)
{
    const proOBJ = cart[i];
    const{proName,proCost} = proOBJ;
    sum = sum+ parseFloat(proCost);
const listELEM  = `<li> ${proName}  \n <span>Cost : ${proCost}</span>   <button class="pro-rem" onclick = "
cart.splice(${i}, 1);
render();
">Remove</button>

</li>`
cartHTMl +=listELEM;
}
//total sum of items
// whe
whe = 1000000000000000000*sum;
//hex
hex = whe.toString(16);
cartHTMl += `
<p>
Total Sum = ${sum.toFixed(5)}
</p>
`;
sum = 0;

//place order

 cartHTMl+= `
<li>
 <button id="placeOrder" onclick="Order()">
 Place Order
 </button>
</li>
 `;



document.querySelector(".classItems").innerHTML = cartHTMl;

cartHTMl = '';
}




async function Order() {

    
const initialize = async () => {
    if (typeof window.ethereum !== 'undefined') {
        // console.log('MetaMask is installed!');
    } else {
        console.log('MetaMask is not installed.');
    }
  
    try {
        
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // alert("MetaMask is connected!");
        
    } catch (error) {
        alert("Error connecting to MetaMask: " + error.message);
    }
  };
  
  initialize();
   
    if (typeof window.ethereum !== 'undefined') {
        try {
    
            const accounts = await window.ethereum.enable();

            if (accounts.length === 0) {
                console.error("No accounts available.");
                return;
            }

            const senderAddress = accounts[0]; 

            
            const txParams = {
                "from": senderAddress,
                "to": "0xB923b9ed260AA3b9bE3900A2C5A602f30FAD794b",
                "gas": "0x5208", // Example gas limit
        "gasPrice": "0x4A817C800", // Example gas price (25 Gwei)
        "value": hex,
            };

        
            const result = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [txParams],
            });
            console.log("Transaction result:", result);
                window.location.href = "thank_u.html";

        } catch (error) {
            console.error("Transaction error:", error);
        }
    } else {
        console.error("MetaMask not detected.");
    }
}
