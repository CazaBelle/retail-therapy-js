describe(`Total`, () => {
  
  it('will in init with a value of zero', () => {
    let total = new Total()
    expect(total.add()).toEqual(0)
  })

  it('will return the value of 1 item in the cart', () =>{
    let cartItems = [{ id: 1, name: "testshow", price: 50, quantity: 4 }]
    let total = new Total(cartItems)
    expect(total.add()).toEqual(50) 
  })
})