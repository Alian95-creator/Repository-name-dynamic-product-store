const productContainer = document.getElementById("productContainer")

console.log(productContainer)

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
console.log(data)
})