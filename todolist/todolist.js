function todoList() {
    var item=document.getElementById("todoInput").value;
    var newItem=document.createElement("li");
    var button=document.createElement("button");
    button.setAttribute("onclick","remove(this)");
    button.innerHTML="remove";
    newItem.innerHTML="<span>"+item+" </span>";
    var ol=document.getElementById("todoli");
    if (item.trim()!==""){
        
        newItem.appendChild(button);
        ol.appendChild(newItem);
    }
    document.getElementById("todoInput").value=null;

}

function remove(element){
    var li=element.parentNode;
    var ol=li.parentNode;
    ol.removeChild(li);
}

