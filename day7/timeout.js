'use strict'
// var i = 10;
function a(i){
    
    console.log(i--);
}
setTimeout(a(1),1000);
setTimeout(a(2),2000);
setTimeout(a(3),3000);
setTimeout(a(4),4000);
setTimeout(a(5),5000);