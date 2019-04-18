describe('Cart', () => {
  let item = [{id: 1, name: "testitem", price: 50, quantity: 4}]
  let multipleItems = [{ id: 1, name: "testitem1", price: 50, quantity: 4},{ id: 2, name: "testitem2", price: 50, quantity: 4}]
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

  it('items can be removed from cart', () => {
    cart.addCartItem(1)
    cart.removeCartItem(1)
    expect(cart.countCartItems()).toEqual(0)
  })

  it('the right item will be removed from cart', () =>{
    let newcart = new Cart([{ id: 1, name: "testitem1", price: 50, quantity: 4},{ id: 2, name: "testitem2", price: 50, quantity: 4}])
    console.log(newcart)
    cart.removeCartItem(2)
    expect(cart.countCartItems()).toEqual(1)
    expect(cart.cartText()).toEqual(['Name: Suede Shoes, Blue Price: 42.00 <button class="remove-from-cart" id=2>Remove</button>'])
  })
  

})

