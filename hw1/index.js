var inputName = ""

function getGreet(){
    document.EnterName.greeting.value =
    inputName + " " +
    document.EnterName.myName.value +
    "!";
}

function button(val){
    inputName = val;
}