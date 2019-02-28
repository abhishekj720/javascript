    function modify(){

        str = document.getElementById("id1").value;
        var new_str = str.slice(1,-1)
        console.log(new_str);
        document.write("<h2>New String:"+new_str+"</h2>");
    }

