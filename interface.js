
const loadPage = () => {
  let products = document.querySelector('.card-group')
  let cart = document.querySelector('.cart-section')
  console.log(products)
  const inventory = new Inventory(data)
  
  
  products.innerHTML = ''
  
  products.appendChild(inventory.addInventoryDOM())
  
}

document.onload = loadPage()