const productContainer = document.getElementById("productContainer")
const searchInput = document.getElementById("searchInput")

let allProducts = []

function renderProducts(products){

productContainer.innerHTML = ""

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

}

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {

allProducts = data
renderProducts(allProducts)

})