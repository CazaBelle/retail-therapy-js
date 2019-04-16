class Cart {
  constructor(){
    this.items=[]
  }

  countCartItems(){
    return this.items.length
  }


  checkId(element, id){
    
   if(element.id == id){
      element.quantity = 1
      this.items.push(element)
      console.log(this.items)
   }
  
}
  
  addCartItem(id){
   data.forEach(element => {
       this.checkId(element, id)
    })

  }
      
     
      
    
  }


