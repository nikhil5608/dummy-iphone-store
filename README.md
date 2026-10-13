s<!DOCTYPE html><html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>iPhone 17 Pro Max Store</title>
<style>
*{box-sizing:border-box}
body{margin:0;font-family:Arial,sans-serif;background:#f5f5f7;color:#222}
header{background:#111;color:white;padding:20px;text-align:center}
header h1{margin:0}
.notice{background:#fff3cd;padding:12px;text-align:center;font-size:14px}
.product{max-width:700px;margin:30px auto;background:white;padding:25px;border-radius:16px;text-align:center;box-shadow:0 3px 12px #ddd}
.phone{font-size:110px;margin:20px}
.price{font-size:30px;font-weight:bold;color:#087b36}
button{background:#0071e3;color:white;border:0;border-radius:8px;padding:14px 22px;font-size:16px;cursor:pointer}
form{max-width:500px;margin:25px auto;background:white;padding:25px;border-radius:15px}
input,textarea,select{width:100%;padding:12px;margin:8px 0 16px;border:1px solid #ccc;border-radius:7px}
label{display:block;text-align:left;font-weight:bold}
h2{text-align:center}
footer{text-align:center;background:#111;color:white;padding:20px;margin-top:30px}
.small{font-size:13px;color:#666}
</style>
</head>
<body><header>
<h1>🍎 iPhone Store</h1>
<p>iPhone 17 Pro Max</p>
</header><div class="notice">
DEMO STORE — Independent seller; not an official Apple Store.
</div><section class="product">
<div class="phone">📱</div>
<h2>iPhone 17 Pro Max</h2>
<p>Check product condition and authenticity with the seller before ordering.</p>
<p class="price">₹18,000</p>
<p>Price shown is seller-listed and does not verify the phone's authenticity or condition.</p>
<button onclick="document.getElementById('order').scrollIntoView({behavior:'smooth'})">
Order Now
</button>
</section><h2>Place Your Order</h2><form id="order" onsubmit="submitOrder(event)">
<label>Full Name</label>
<input id="name" type="text" required><label>Mobile Number</label>
<input id="mobile" type="tel" pattern="[0-9]{10}" maxlength="10" placeholder="10-digit mobile number" required>

<label>Delivery Address</label>

<textarea id="address" rows="3" required></textarea><label>Payment Preference</label>
<select id="payment" required>

<option value="">Select payment preference</option>
<option>Cash on Delivery (subject to confirmation)</option>
<option>Pay after seller confirmation</option>
</select><button type="submit">Submit Order Request</button>

<p class="small">Demo only: this form does not transmit or save your information.</p>
</form><footer>
<p>iPhone Store</p>
<p>Independent demo website. Not affiliated with Apple Inc.</p>
</footer><script>
function submitOrder(event){
event.preventDefault();
alert("Demo only: Your order request has not been sent or saved. Please contact the seller directly to place a real order.");
}
</script></body>
</html>
