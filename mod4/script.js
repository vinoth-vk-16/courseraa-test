var arr=["jhonny","vishal","jhonathan","vinoth"]
var msgdiv=document.getElementById('msg')
for( var i=0;i< arr.length;i++){
    if((arr[i].charAt(0))==="j"|"J"){
        console.log("Goodbye jsomeName");
        msg="Goodbye jsomeName";
    }
    else{
        console.log("Hello SomeName");
        msg="Hello SomeName";
    }

    var p = document.createElement('p');
    p.textContent=msg;
    msgdiv.appendChild(p);
}
