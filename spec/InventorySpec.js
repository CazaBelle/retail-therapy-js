

describe ( `Inventory`, () => {
  let testProduct = [{ id: 1, name: "testshow", price: 50, quantity: 4 }, { id: 2, name: "testshow", price: 50, quantity: 4 } ]

  it('it will init empty', () =>{
    let inventory = new Inventory()
    expect(inventory.getProducts()).toEqual([]);
  })


  it('will store a list of inventory', () =>{
    let inventory = new Inventory(testProduct)
    expect(inventory.getProducts()).toEqual([{ id: 1, name: "testshow", price: 50, quantity: 4 }, { id: 2, name: "testshow", price: 50, quantity: 4 }])
    })

  it('add to cart decreased the quantity when clicked', () =>{
    let item =[{ id: 1, name: "testshow", price: 50, quantity: 4 }]
    let inventory = new Inventory(item)
    inventory.decrease(1)
    expect(inventory.getProducts()[0].quantity).toEqual(3)
  })

  

})
