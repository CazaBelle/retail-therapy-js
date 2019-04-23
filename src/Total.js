class Total {
  constructor(items){
    this.cartItems=items || []
    this.total = 0 
  }

  add(){
   let totalArray =  this.cartItems.map(element => element.price)

    if(totalArray.length > 0){
      this.total = totalArray.reduce((num1,num2) => num1 + num2)
      console.log(this.total)
      return this.total
    
    }else{
      return this.total
    }
  }

  displayTotal(){
    return `<h3>Total: £${parseFloat(this.total).toFixed(2)}</h3>`
  }

}
