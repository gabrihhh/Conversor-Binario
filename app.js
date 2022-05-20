function converter(num){
    var decimal = parseInt(num);
    var binario = decimal.toString(2);

    document.getElementById("resultado").innerText = binario
}