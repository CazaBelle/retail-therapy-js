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

  it('will display the total of the cart', () =>{
    let cartItems = [{ id: 1, name: "testshow", price: 50, quantity: 4 }]
    let total = new Total(cartItems)
    total.add()
    expect(total.displayTotal()).toEqual('<h3>£50.00</h3>')
  })

  it('will remove a cart item', () => {
    let cartItems = [{ id: 1, name: "testshow", price: 50, quantity: 4 }]
    let total = new Total(cartItems)
    total.removeItem(1)
    expect(total.displayTotal()).toEqual('<h3>£0.00</h3>')
  })
})