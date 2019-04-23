class Voucher{
  constructor(discount, total){
    this.discount = discount
    this.total = total 
  }
  
  checkDiscount(){
    if(this.discount == '5off'){
      return 5 
    }else if(this.discount == '10off50' && this.total > 50){
      return 10
    }else if(this.discount == '15off75foot' && this.total > 75){
      return 15
    }else{
      alert('Invalid code please try again')
      return 'Invalid code please try again'
    }
      
  }

  getTotal(){
    return this.total - this.checkDiscount()
  }

  displayTotalWithPromo(){
    return `<h3>Total with Discount: £${parseFloat(this.getTotal()).toFixed(2)}</h3>`
  }

  
}