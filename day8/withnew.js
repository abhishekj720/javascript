// var x = document.getElementById("i");
// console.log(x);


function hello()
{    var myname = "kiran";
    this.myname = "abhi";
    console.log(myname);
    this.fullname = new (function(){
        this.myname= "Ravi";
        console.log( myname + this.myname) ;
    })()
}
var x = new hello();
var y = new hello();
x.myname="why";
console.log(x.fullname);
console.log(x.myname);
