// var x = document.getElementById("i");
// console.log(x);


function hello()
{    var myname = "kiran";
    this.myname = "abhi";
    //console.log(myname);
    this.fullname = (function(){
        this.myname= "Ravi";
        return myname + this.myname;
    })();
    //console.log(this.myname);
}
var x = new hello();
x.myname="why";
console.log(x.fullname);
//console.log(x.myname);
