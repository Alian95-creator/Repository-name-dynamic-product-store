const productContainer = document.getElementById("productContainer")

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {

products.forEach(product => {

const card = document.createElement("div")

card.classList.add("product-card")

card.innerHTML = `
<img src="${product.image}">
<h3>${product.title}</h3>
<p>$${product.price}</p>
`

productContainer.appendChild(card)

})

})