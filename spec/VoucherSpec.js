describe(`Voucher`, () => {

  it('will return a number when passed a code', () =>{
    let voucher = new Voucher()
    expect(voucher.checkDiscount('5off', 60)).toEqual(5)
    expect(voucher.checkDiscount('10off50', 60)).toEqual(10)
    expect(voucher.checkDiscount('15off75foot', 76)).toEqual(15)
  })

  it('will alert the user if they input an invalid code', () =>{
    let voucher = new Voucher()
    expect(voucher.checkDiscount('cat', 100)).toEqual('Invalid code please try again')
  })

  

})