var x = (function(){
console.log(10);
})();

console.log(x);






(function(){
    'use strict'
    var student;
    console.log(student);
    function Person()
    {
        var x=10;
        this.firstName = "abhishek";
    }
    console.log(student);
    student = new Person() ;


    console.log(student);
    console.log(x);
})() ;
