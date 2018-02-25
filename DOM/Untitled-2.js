
    var div = document.getElementById("foo");
    var form = document.createElement("form");
    form.name = "login";
    form.action = "google.com";
    div.appendChild(form);
        
    var element1 = document.createElement("input");
    element1.setAttribute("name","age");
    element1.setAttribute("placeholder", "My age is");
    element1.setAttribute("type", "text");
    element1.setAttribute("pattern","[0-9]+$");
    form.appendChild(element1);

    var element2 = document.createElement("input");
    element2.setAttribute("name","username");
    element2.setAttribute("placeholder", "My name is");
    element2.setAttribute("type","text");
    element2.setAttribute("pattern", "^(user_)\\S+$");
    form.appendChild(element2);

    var element3 = document.createElement("input");
    element3.setAttribute("name","date");
    element3.setAttribute("placeholder", "My birth date is MM/DD/YYYY");
    element3.setAttribute("type","text");
    element3.setAttribute("pattern","^(((0[13578]|(10|12))/(0[1-9]|[1-2][0-9]|3[0-1]))|(02/(0[1-9]|[1-2][0-9]))|((0[469]|11)/(0[1-9]|[1-2][0-9]|30)))/[0-9]{4}$");
    
    form.appendChild(element3);

    var element4 = document.createElement("input");
    element4.setAttribute("type","submit");
    element4.setAttribute("value","Validate Me");
    form.appendChild(element4);
    
    
    