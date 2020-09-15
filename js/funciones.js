var opera1;
var opera2;
var opera3;
function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var useis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
    borrar();
}
suma.onclick = function(e){
    opera1 = resultado.textContent;
    operacion = "+";
    limpiar()
    
}
resta.onclick = function(e){
    opera1 = resultado.textContent;
    operacion = "-";
    limpiar()
 }
multiplicacion.onclick = function(e){
    opera1 = resultado.textContent;
    operacion = "*";
    limpiar()
}
division.onclick = function(e){
    opera1 = resultado.textContent;
    operacion = "/";
    limpiar()
}
igual.onclick = function(e){
    opera2 = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
}
function borrar(){
    resultado.textContent = "";
    opera1 = 0;
    opera2 = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseInt(opera1) + parseInt(opera2);
          break;
         case "-":
            res = parseInt(opera1) - parseInt(opera2);
           break;
         case "*":
            res = parseFloat(opera1) * parseFloat(opera2);
           break;
         case "/":
            res = parseFloat(opera1) / parseFloat(opera2);
         break;
         
        }
        borrar();
        resultado.textContent = res;
}
