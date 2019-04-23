class Voucher{

  checkDiscount(discount,total){
    if(discount == '5off'){
      return 5 
    }else if(discount == '10off50' && total > 50){
      return 10
    }else if(discount == '15off75foot' && total > 75){
      return 15
    }else{
      alert('Invalid code please try again')
      return 'Invalid code please try again'
    }
      
  }

  
}