
const loadPage = () => {
  let products = document.querySelector('.card-group')
  let cart = document.querySelector('.cart-section')
  const inventory = new Inventory(data)
  products.innerHTML = ''
  products.appendChild(inventory.addInventoryDOM())
  let cartButton = document.querySelectorAll('.add-to-cart')
  let quantity = document.getElementsByClassName(`product-quantity-${this.id}`)
  
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
     
   
     

       
    })
  }
}

document.onload = loadPage()