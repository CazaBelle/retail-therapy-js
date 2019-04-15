

class Inventory{
  constructor(products){
    this.products = products || []
  }

  getProducts(){
   return this.products
  }

  // inventoryText(){
  //   return this.products.map(function(product){
  //     `Name: ${console.log(product.name)} Category: ${console.log(product.category)} Price: ${console.log(product.price)} Availbility: ${console.log(product.quantity)}`
  //   })
  // }

  inventoryText(){
    return this.products.map(function(product){
        return `Name: ${product.name} Price: ${parseFloat(product.price).toFixed(2)} Availbility: ${product.quantity} <button  id=${product.id}>Add To Cart</button>`
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
  
 

}
 
