
   alert();

function createButton(){
 
    var button = document.createElement("input");
    var ElemBefore = getElementByClass("col-sm-6 em-col-right em-sidebar");

    button.type = "button";
    button.value = "im a button";
    button.onclick = alert();
    ElemBefore.append(button);
}
 
setTimeout(createButton, 10000);
