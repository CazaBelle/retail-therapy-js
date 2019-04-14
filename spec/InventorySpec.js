

describe ( `Inventory`, () => {
  it('will store a list of inventory', () =>{
    let product = []
    let inventory = new Inventory(product)
    expect(inventory.getProducts()).toEqual(product)
    })
})
