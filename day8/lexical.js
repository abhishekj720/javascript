function a()
{
    var x = 10;
    var y= function b()
    {
        console.log(x);
        return 30;
    };
    x=20;
    
     return y=b();;
}

var exec = a();
exec();