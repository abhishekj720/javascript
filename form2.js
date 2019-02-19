var x
function show()
{     x = {
    id1 : document.getElementsByTagName("username"),
   
     id2 : (document.getElementByTagName("pass").value),
    id3 : (document.getElementByTagName("country").value),
    id4 : (document.getElementByTagName("reg").value)
}
}

function clk()
{
  
   console.log(x);
}

clk();