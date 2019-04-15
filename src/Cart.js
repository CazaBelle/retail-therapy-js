class Cart {
  constructor(){
    this.items=[]
  }

  countCartItems(){
    console.log(this.items.length)
    return this.items.length
  }

  addCartItem(id){
      let cartItems = data.find(function(product){
          if(product.id === id){
              return product
          }
      })
      cartItems.quantity = 1
      this.items.push(cartItems)
  
  }
}