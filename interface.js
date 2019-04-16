
const loadPage = () => {
  let productDOM = document.querySelector('#product-list')
  let cartDOM = document.querySelector('.cart-section')
  const inventory = new Inventory(data)
  const cart = new Cart()
  productDOM.innerHTML = ''
  productDOM.appendChild(inventory.addInventoryDOM())
  let cartButton = document.querySelectorAll('.add-to-cart')

  
  // let quantity = document.getElementsByClassName("product-quantity"
  // quantity.array.forEach(element => {
  //   return element.innerHTML
  // });
     // let quantity = document.getElementsByClassName(`product-quantity-${this.id}`)
      //   quantity.forEach(element => {
      //     return element.innerHTML
      //   })

  for(i=0; i<cartButton.length; i++){
    cartButton[i].addEventListener('click', function(){
      let quantity = document.querySelector(`.product-quantity-${this.id}`)
      quantity.innerHTML = quantity.innerHTML - 1
      console.log(this.id)
      cart.addCartItem(this.id)
    })
  }
}

document.onload = loadPage()