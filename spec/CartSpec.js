describe('Cart', () => {
  let item = [{ id: 1, name: "testshow", price: 50, quantity: 4}]
  it(`init with no product`, ()=>{
    let cart = new Cart()
    expect(cart.countCartItems()).toBe(0)
  })

  it('items can be added to the cart', ()=>{
    let cart = new Cart()
    
    cart.addCartItem(1)
    expect(cart.countCartItems()).toBe(1)
  })

})

