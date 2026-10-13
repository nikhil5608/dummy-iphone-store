# dummy-iphone-store
online store for iphone dummy models
<!DOCTYPE html>
<html lang="mr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iPhone Dummy Store</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        header {
            background-color: #000;
            color: #fff;
            padding: 20px;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }
        .card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin: 15px;
            padding: 15px;
            width: 250px;
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: contain;
            border-radius: 5px;
        }
        .price {
            color: #e63946;
            font-size: 18px;
            font-weight: bold;
        }
        .buy-btn {
            display: inline-block;
            background-color: #25D366;
            color: white;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <header>
        <h1>iPhone Dummy Store</h1>
        <p>Premium Quality iPhone Dummy Models for Display</p>
    </header>

    <div class="container">
        <!-- Product 1 -->
        <div class="card">
            <img src="iphone15.jpg" alt="iPhone 15 Pro Dummy">
            <h3>iPhone 15 Pro Dummy</h3>
            <p class="price">₹499</p>
            <!-- Khali tumcha WhatsApp Number 91XXXXXXXXXX cha jagavar taka -->
            <a href="https://wa.me/91XXXXXXXXXX?text=Mala%20iPhone%2015%20Pro%20Dummy%20order%20karaycha%20ahe" class="buy-btn" target="_blank">WhatsApp var Order kara</a>
        </div>

        <!-- Product 2 -->
        <div class="card">
            <img src="iphone14.jpg" alt="iPhone 14 Dummy">
            <h3>iPhone 14 Dummy</h3>
            <p class="price">₹399</p>
            <a href="https://wa.me/917821825608?text=Mala%20iPhone%2014%20Dummy%20order%20karaycha%20ahe" class="buy-btn" target="_blank">WhatsApp var Order kara</a>
        </div>
    </div>

</body>
</html>
