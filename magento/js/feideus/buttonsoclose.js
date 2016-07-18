function createButton(){

    var button = document.createElement("input");
    var LaDiv = document.getElementById("scriptos");
    var Essai = document.getElementsByClassName("row");


    Essai[0].style="background-color: red;";
    alert(Essai[0]);
    alert(LaDiv);
    alert(button);
    button.style="width:600px;height:600px;font-size:20px;background-color:red;"
    button.type = "button";
    button.value = "COUCOU";
    button.onclick = "alert()";
    LaDiv.appendChild(button);
    
}
