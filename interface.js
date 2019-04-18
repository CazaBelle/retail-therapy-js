
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
    let removeButton = document.querySelectorAll('.remove-from-cart')
    for(i=0; i<removeButton.length; i++){
      removeButton[i].addEventListener('click', function(){
        cart.removeCartItem(this.id)
        cartDOM.innerHtML =''
        cartDOM.appendChild(cart.displayCartDOM())    
    })
    
  }
}, 400)



}
document.onload = loadPage()