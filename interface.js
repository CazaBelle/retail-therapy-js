
const loadPage = () => {
  //PRODUCTS LOAD ON INIT
  let productDOM = document.querySelector('#product-list')
  let cartDOM = document.querySelector('.cart-section')
  const inventory = new Inventory(data)
  const cart = new Cart()
 
  productDOM.innerHTML = ''
  productDOM.appendChild(inventory.addInventoryDOM())
  let cartButton = document.querySelectorAll('.add-to-cart')

  //ADD TO CART 
  for(i=0; i<cartButton.length; i++){
    cartButton[i].addEventListener('click', function(){
      let quantity = document.querySelector(`.product-quantity-${this.id}`)
      quantity.innerHTML = quantity.innerHTML - 1
      cartDOM.innerHTML = ''
      cart.addCartItem(this.id)
      cartDOM.appendChild(cart.displayCartDOM())
      
    })
  }
  
  //REMOVE FROM CART 
  setInterval(function(){
    cartDOM.innerHTML = ''
    cartDOM.appendChild(cart.displayCartDOM())
    let removeButton = document.getElementsByClassName('remove-from-cart')
    let total = new Total(cart.getCartItems())
   
  
    if(removeButton.length > 0){
      for(i=0; i<removeButton.length; i++){
        removeButton[i].addEventListener('click', function(){
          cart.removeCartItem(this.id + 1)
          total.removeItem(this.id + 1)
          
         
        })
      }
      
     
    }
    //DISPLAY TOTAL
    let totalSection = document.getElementById('total-section')
    totalSection.innerHTML = total.displayTotal()
    //ADD VOUCHER
    let voucherButton = document.getElementById('voucherButton')
    voucherButton.addEventListener('click', function(){
      let promoCode = document.getElementById('voucherInput').value
      let currentTotal = total.add()
      let voucher = new Voucher(promoCode, currentTotal)
      let newTotalDOM = document.getElementById('total-after-discount')
      newTotalDOM.innerHTML = ''
      newTotalDOM.innerHTML = voucher.displayTotalWithPromo()


      // totalSection.innerHTML = ((total.add()) - (voucher.checkDiscount()))
      
      
      // console.log(total.displayTotal()) - (voucher.checkDiscount())
    })
    

  }, 400)


}
document.onload = loadPage()