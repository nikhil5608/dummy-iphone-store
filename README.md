<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>iPhone Style Store</title>
<style>
*{box-sizing:border-box}
body{margin:0;font-family:Arial,sans-serif;background:#f5f5f7;color:#222}
header{background:#111;color:white;text-align:center;padding:22px}
.product{max-width:600px;margin:30px auto;padding:25px;background:white;border-radius:15px;text-align:center;box-shadow:0 3px 12px #ddd}
.phone{width:150px;height:270px;margin:25px auto;background:linear-gradient(135deg,#444,#111);border:5px solid #777;border-radius:28px;position:relative}
.camera{position:absolute;top:15px;left:12px;width:58px;height:58px;background:#333;border-radius:13px;padding:6px;display:grid;grid-template-columns:1fr 1fr;gap:4px}
.camera span{background:#080808;border:2px solid #888;border-radius:50%}
.price{font-size:30px;font-weight:bold;margin:20px;color:#087b36}
form{max-width:500px;margin:25px auto;background:white;padding:25px;border-radius:15px}
label{display:block;margin-top:14px;font-weight:bold}
input,textarea{width:100%;padding:12px;margin-top:7px;border:1px solid #ccc;border-radius:7px;font-size:16px}
button{background:#25D366;color:#073b19;border:0;border-radius:8px;padding:14px;width:100%;font-size:16px;font-weight:bold;margin-top:20px;cursor:pointer}
.note{font-size:13px;color:#555;line-height:1.5}
footer{text-align:center;background:#111;color:white;padding:20px;margin-top:30px}
</style>
</head>
<body>

<header>
<h2>PREMIUM PHONE STORE</h2>
</header>

<div class="product">
<p>PREMIUM STYLE SMARTPHONE</p>
<div class="phone">
<div class="camera">
<span></span><span></span><span></span><span></span>
</div>
</div>
<h1>iPhone 17 Pro Max Style</h1>
<p>Third-party Clone Smartphone</p>
<div class="price">₹18,000</div>
<p>Confirm product specifications and availability before ordering.</p>
</div>

<form id="orderForm">
<h2>Place Your Order</h2>

<label for="name">Full Name *</label>
<input id="name" required placeholder="Enter your name">

<label for="mobile">Your Mobile Number *</label>
<input id="mobile" type="tel" inputmode="numeric" pattern="[0-9]{10}" maxlength="10" required placeholder="10-digit mobile number">

<label for="address">Delivery Address *</label>
<textarea id="address" rows="3" required placeholder="Full address and PIN code"></textarea>

<label for="quantity">Quantity</label>
<input id="quantity" type="number" min="1" max="10" value="1" required>

<button type="submit">ORDER ON WHATSAPP</button>

<p class="note">This is a third-party clone smartphone, not a genuine Apple iPhone. Please verify the product specifications, condition, warranty and final price before purchasing.</p>
</form>

<footer>Independent Store • Not affiliated with Apple Inc.</footer>

<script>
document.getElementById("orderForm").addEventListener("submit",function(event){
event.preventDefault();

const name=document.getElementById("name").value.trim();
const mobile=document.getElementById("mobile").value.trim();
const address=document.getElementById("address").value.trim();
const quantity=Number(document.getElementById("quantity").value);

if(!/^[0-9]{10}$/.test(mobile)){
alert("Enter a valid 10-digit mobile number.");
return;
}

if(!Number.isInteger(quantity)||quantity<1||quantity>10){
alert("Enter quantity from 1 to 10.");
return;
}

const total=quantity*18000;

const message=
"NEW ORDER REQUEST\n"+
"Product: iPhone 17 Pro Max Style Clone Smartphone\n"+
"Quantity: "+quantity+"\n"+
"Price per unit: Rs. 18,000\n"+
"Total: Rs. "+total.toLocaleString("en-IN")+"\n"+
"Customer Name: "+name+"\n"+
"Customer Mobile: "+mobile+"\n"+
"Delivery Address: "+address+"\n"+
"Please confirm availability and delivery details.";

const whatsappNumber="917821825608";
const url="https://wa.me/"+whatsappNumber+"?text="+encodeURIComponent(message);

window.open(url,"_blank");
});
</script>

</body>
</html>
