var inputs = document.getElementsByTagName('input');
var passwordInputs = [];
for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].type=="password"){
        passwordInputs.push(inputs[i]);
        inputs[i].addEventListener("dblclick", function(){
            alert();
        });
    }
};
