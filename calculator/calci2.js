var display = document.getElementById("display");

function insert(hel){
    display.value+=hel;
}
 function clr(){
display.value=null;
}
function del() {
    var string = display.value;
    display.value = string.substring(0,string.length-1);
}
function equal(){
    display.value=eval(display.value)
}