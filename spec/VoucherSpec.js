describe(`Voucher`, () => {

  it('will return a number when passed a code', () =>{
    let voucher = new Voucher('5off', 60)
    expect(voucher.checkDiscount()).toEqual(5)
  })

    it('will return a number when passed a code', () =>{
      let voucher = new Voucher('10off50', 60)
      expect(voucher.checkDiscount()).toEqual(10)
    })

    it('will return a number when passed a code', () =>{
      let voucher = new Voucher('15off75foot', 76)
    expect(voucher.checkDiscount()).toEqual(15)
  })

  it('will alert the user if they input an invalid code', () =>{
    let voucher = new Voucher()
    expect(voucher.checkDiscount('cat', 100)).toEqual('Invalid code please try again')
  })

  

})