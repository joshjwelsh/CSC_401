var a = [
    'field1',
    'field2',
    'field3',
    'field4',
    'field5',
    'field6',
    'field7',
    'field8',
    'field9',
    'field10',
    'field11'
];

var b = [
    1,2,4,8,16,32,64,128,256,512,1024
];

function compute(){
    let sum = 0;
    for(let i = 0; i < b.length; i++){
        if(document.NumberBuild[a[i]].checked){
            sum = sum + b[i];
        }
    }
    if (sum == 1925){
        var elem = document.createElement("img");
        document.getElementById("my-img").appendChild(elem);
        elem.src = 'um.jpeg';
    }
    document.NumberBuild.theResult.value = sum;
}