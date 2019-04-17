describe('Cart', () => {
  let item = [{ id: 1, name: "testitem", price: 50, quantity: 4}]
  let cart

  beforeEach(function(){
    cart = new Cart()
  })
  
  it(`init with no product`, ()=>{
  
    expect(cart.countCartItems()).toBe(0)
  })

  it('items can be added to the cart', ()=>{
    cart.addCartItem(1)
    expect(cart.countCartItems()).toBe(1)
  })

  it('displays cart items', () => {
    cart.addCartItem(1)
    expect(cart.cartText()).toEqual([ 'Name: Almond Toe Court Shoes, Patent Black Price: 99.00 <button class="remove-from-cart" id=1>Remove</button>' ])
  })
  

})

