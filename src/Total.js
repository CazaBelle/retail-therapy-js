class Total {
  constructor(items){
    this.cartItems=items || []
    this.total = 0 
  }

  removeItem(id){
    let index = this.cartItems.findIndex(x => x.id === id)
    this.cartItems.splice(index, 1)
  }

  add(){
   let totalArray =  this.cartItems.map(element => element.price)
    if(totalArray.length > 0){
      this.total = totalArray.reduce((num1,num2) => num1 + num2)
      return this.total
    }else{
      return this.total
    }
  }

  displayTotal(){
    return `<h3>£${parseFloat(this.add()).toFixed(2)}</h3>`
  }

}
