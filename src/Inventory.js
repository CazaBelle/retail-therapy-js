

class Inventory{
  constructor(products){
    this.products = products || []
  }

  getProducts(){
   return this.products
  }


  inventoryText(){
    return this.products.map(function(product){
        return `Name: ${product.name} Price: ${parseFloat(product.price).toFixed(2)} Availbility: <span class="product-quantity-${product.id}">${product.quantity}</span> <button class="add-to-cart" id=${product.id}>Add To Cart</button>`
    })
}
  
  addInventoryDOM(){
    let ul = document.createElement('ul')
    this.inventoryText().map(function(text, i){

      let li = document.createElement('li')
      li.innerHTML = text
      ul.appendChild(li)
    })
    return ul
  }

  
  decrease(id){
    this.products.find(function(product){
        if(product.id === id){
            product.quantity -=1
        }
    })
}
}