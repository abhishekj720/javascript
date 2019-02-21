
function bookTicket(mode){
    var discount = mode == 'flight' ? 10 :
     mode == 'cruise' ? 20 :
     mode == 'train' ? 30 : 0 ;

     return {
        printTicket : function (source,destination){
            return function() {
                console.log('I am 2nd level closure');
            var price = Math.floor((Math.random()*1000) +1);
            console.log('Source'+source)
            console.log('Destination'+destination)
            console.log('Price'+price)
           console.log('Discount:',discount);
            //console.log('Discount'+price*(discount/100));
        }
     } ,
         printDiscount : function (source,destination) {
            console.log('Discount'+price*(discount/100));
         }
}
}

var flight = bookTicket('flight');
var train = bookTicket('train')
var cruise = bookTicket('cruise')

// flight('Bangalore','Hyderabad')
// train('a','b')
// cruise('c','d')

flight.printTicket('Bangalore','Hyderabad');
