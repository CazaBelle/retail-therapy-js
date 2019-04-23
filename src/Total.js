class Total {
  constructor(items){
    this.cartItems=items || []
  }

  add(){
   let total =  this.cartItems.map(element => element.price)
    console.log(total)
    if(total.length > 0){
      return total.reduce((num1,num2) => num1 + num2)
    }else{
      return 0
    }
  }

}
