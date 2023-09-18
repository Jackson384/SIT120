<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* styles.css */

/* Reset some default styles */
body, ul, li {
    margin: 0;
    padding: 0;
}

/* Apply a modern font and background color */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

/* Style the navigation menu */
nav {
    background-color: #007bff;
    color: white;
    padding: 15px 0;
    text-align: center;
}

nav a {
    text-decoration: none;
    color: white;
    margin: 0 20px;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #0056b3;
}

/* Style buttons with a modern gradient */
button {
    background: linear-gradient(to bottom, #007bff, #0056b3);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
    background: linear-gradient(to bottom, #0056b3, #007bff);
    transform: scale(1.05);
}

/* Style cart items with a card-like design */
.cart-item {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Style the product list */
.product-item {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Style the header and content areas */
h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    margin-bottom: 10px;
}


</style>
