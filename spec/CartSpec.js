describe('Cart', () => {
  
  it(`init with no product`, ()=>{
    let cart = new Cart()
    expect(cart.countCartItems()).toBe(0)
  })

  

})

