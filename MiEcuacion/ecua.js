//Calcular las raíces de un polinomio  de 2do grado Ax^2+Bx+C

//Entrada de datos por promt("")
var a; 
var b; 
var c;
var delta;
a = prompt("Ingrese el valor de a: ");
b = prompt("Ingrese el valor de b: ");
c = prompt("Ingrese el valor de c: ");

//Cálculo del discriminante delta ya una vez recibidos los valores.
delta = (parseInt(b) * parseInt(b) - (4 * parseInt(a) * parseInt(c)));

//Muestro los datos por pantalla.
document.write("a: " + a + "<br />");
document.write("b: " + b + "<br />");
document.write("c: " + c + "<br />");
document.write("Discriminante delta: " + delta + "<br />");

//Determinación de las raíces.
if (delta < 0) {
    document.write("No hay solución.");
} else {
    if (delta == 0) {
        document.write("No hay única: " + (-b /(2 * a)));       
    } else {
        document.write("Solución 1: " + (-b + Math.sqrt(delta))+ "<br />");
        document.write("Solución 2: " + (-b - Math.sqrt(delta)));
    }  
}