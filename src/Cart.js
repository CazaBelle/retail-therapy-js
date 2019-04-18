class Cart {
  constructor(items){
    this.items=items || []
  }

  countCartItems(){
    return this.items.length
  }

  checkId(element, id){
   if(element.id == id){
      element.quantity = 1
      this.items.push(element)
   }
  
}
  addCartItem(id){
   data.forEach(element => {
      this.checkId(element, id)
    })

  }

  cartText(){
    return this.items.map(function(element){
      return `Name: ${element.name} Price: ${parseFloat(element.price).toFixed(2)} <button class="remove-from-cart" id=${element.id}>Remove</button>`
    })
  }

  displayCartDOM(){
    let ul = document.createElement('ul')
    this.cartText().map(function(text){
      let li = document.createElement('li')
      li.innerHTML = text
      ul.appendChild(li)
    })
    return ul
  }

  findItemIndex(id){
    this.items.find(function(item, index) {
      if(item.id == id){
        console.log(index)
        return index
        
      }
      
    })
 
  }

  removeCartItem(id){
    console.log(this.index)
    let index = this.items.forEach(element => {
       this.findItemIndex(id)
    })
    this.items.splice(index, 1)  
    console.log(this.index)
  }

    
  }
