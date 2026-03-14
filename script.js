const productContainer = document.getElementById("productContainer")
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")

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

function renderCategories(products){

categoryFilter.innerHTML = '<option value="all">All Categories</option>'

const categories = [...new Set(products.map(p => p.category))]

categories.forEach(category => {

const option = document.createElement("option")

option.value = category
option.textContent = category

categoryFilter.appendChild(option)

})

}
productContainer.innerHTML = "<p>Loading products...</p>"

fetch("https://fakestoreapi.com/products")
.then(res => {

if(!res.ok){
throw new Error("Network response not ok")
}

return res.json()

})
.then(data => {

allProducts = data

renderCategories(allProducts)
renderProducts(allProducts)

})
.catch(error => {

console.error(error)
productContainer.innerHTML = "<p>Failed to load products</p>"

})

.catch(error => {

console.error(error)

})

searchInput.addEventListener("input", function(){

const keyword = this.value.toLowerCase()

const filtered = allProducts.filter(product =>
product.title.toLowerCase().includes(keyword)
)

renderProducts(filtered)

})

categoryFilter.addEventListener("change", function(){

const selected = this.value

if(selected === "all"){
renderProducts(allProducts)
return
}

const filtered = allProducts.filter(product =>
product.category === selected
)

renderProducts(filtered)

})