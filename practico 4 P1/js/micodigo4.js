Inicializar();

function Inicializar() {
    document.querySelector("#imprimir1").addEventListener("click", ingresarvalores);
    document.querySelector("#imprimir2").addEventListener("click", mostrarEsMayoroNo);
    document.querySelector("#imprimir3").addEventListener("click", corroborAnioBisiesto);
    document.querySelector("#imprimir4").addEventListener("click", mostrarAreaTriangulo);
    document.querySelector("#imprimir5").addEventListener("click", areaRectangulo);
    document.querySelector("#imprimir6").addEventListener("click", convertirAFarenheit);
    document.querySelector("#imprimir7").addEventListener("click", convertirMEDIDASAFarenheit);
    document.querySelector("#imprimir8").addEventListener("click", mostrarNumAlaPotencia);
}
// 
function ingresarvalores() {

    let numero1 = parseInt(document.querySelector("#ingresarNUM_E1").value);
    let numero2 = parseInt(document.querySelector("#ingresarNUM_E2").value);
    let menor = numero1;
    let mayor = numero2;

    if (menor > mayor) {
        menor = numero2
        mayor = numero1
    }

    let cantidaddepares = imprimirpares(menor, mayor)
    document.querySelector("#resultado_E1").innerHTML = "hay: " + cantidaddepares + " numeros pares";
}
// contador de numeros pares
function imprimirpares(valor1, valor2) {

    let pares = 0;

    for (let i = valor1; i <= valor2; i++) {

        if (i % 2 == 0) {
            pares++;
        }

    }
    return pares;
}
// funcion para determinar edad si es mayor o no 
function mostrarEsMayoroNo() {

    let tope = parseInt(document.querySelector("#ingresar_edadTope").value);
    let edad = parseInt(document.querySelector("#ingresar_edadE2").value);
    let corroborarEdad = esMayor(tope, edad);
    let resultado = " ";

    if (corroborarEdad == true) {
        resultado = "es mayor"
    } else {
        resultado = "NO es mayor"
    }
    document.querySelector("#resultado_E2").innerHTML = resultado
}
// funcion para confirmar si es verdadero o falso 
function esMayor(tope, edad) {
    let confirmarMayoriaEDad = " ";

    if (edad >= tope) {
        confirmarMayoriaEDad = true;
    } else {
        confirmarMayoriaEDad = false;
    }
    return confirmarMayoriaEDad
}

function corroborAnioBisiesto() {

    let resultado = " ";
    let año = parseInt(document.querySelector("#ingresar_añoE3").value);
    let corroborarBisiesto = esBisiesto(año);

    if (corroborarBisiesto == true) {
        resultado = " Es Bisiesto "
    } else {
        resultado = " No es bisiesto "
    }
    document.querySelector("#resultado_E3").innerHTML = resultado;

}
// funcion para corroborar si un anio es bisiesto
function esBisiesto(año) {
    let verdaderoOfalse = " ";

    if (((año % 4 == 0) && (año % 100 != 0)) || (año % 400 == 0)) {

        verdaderoOfalse = true;
    } else {
        verdaderoOfalse = false;

    }

    return verdaderoOfalse
}

function mostrarAreaTriangulo() {

    let base = parseFloat(document.querySelector("#ingresarBase").value);
    let altura = parseFloat(document.querySelector("#ingresarAltura").value);
    let area = calcularAreaTriangulo(base, altura)
    document.querySelector("#resultado_E4").innerHTML = "El area del triangulo es: " + area;
}
// funcion para corroborar el area de un triangulo
function calcularAreaTriangulo(base, altura) {

    let AreaTriangulo = (base * altura) / 2;
    if (base > 0 && altura > 0) {
        return AreaTriangulo;
    } else {
        return -1
    }

}


function areaRectangulo() {

    let ancho = parseFloat(document.querySelector("#ingresarAncho").value);
    let largo = parseFloat(document.querySelector("#ingresarLargo").value);
    let area = calcularAreaRectangulo(ancho, largo)
    document.querySelector("#resultado_E5").innerHTML = "El area del rectangulo es: " + area;
}
// function para mostrar el area de un triangulo
function calcularAreaRectangulo(base, altura) {

    let superficie = (base * altura);
    if (base > 0 && altura > 0) {
        return superficie;
    } else {
        return -1
    }
}

function convertirAFarenheit() {

    let gradosCelsius = parseFloat(document.querySelector("#ingresarCelsius").value);
    let gradosFarenheit = farenheit(gradosCelsius);
    document.querySelector("#resultado_E6").innerHTML = gradosFarenheit;


}
// funcion para pasar de celsius a farenheit
function farenheit(celsius) {

    gradosconvertidosFarenheit = 1.8 * celsius + 32;

    return gradosconvertidosFarenheit;
}

function convertirMEDIDASAFarenheit() {

    let farenheit = parseFloat(document.querySelector("#ingresarTEMPERATURAfarenh").value);
    let medidaTMP = document.querySelector("#seleccionarMedida").value;
    let converterToFARENHEIT = convert_FARENHEIT(medidaTMP,farenheit);
    document.querySelector("#resultado_E7").innerHTML = converterToFARENHEIT;

}

function convert_FARENHEIT(convertirA,gradosFAR) {

    switch (convertirA) {
        case "Celsius":
            gradosFAR = (gradosFAR - 32) / 1.8;
            break;
        case "Kelvin":
            gradosFAR = (gradosFAR + 459.67) / 1.8;
            break;
        case "Rankine":
            gradosFAR = gradosFAR + 459,67;
            break;
        case "Reaumur":
            gradosFAR = (gradosFAR - 32) / 2.25;
            break;
    }
    return gradosFAR
}

function mostrarNumAlaPotencia(){

    let numeroAlaPotencia = parseInt(document.querySelector("#ingresarNumeroE8").value);
    let potencia = parseInt(document.querySelector("#aLaPotencia").value);
    let resultado = potenciaFunction(numeroAlaPotencia,potencia);
    document.querySelector("#resultado_E8").innerHTML = resultado;

}
// """"""::""""'''''''';;;'''""::::>""""""
function potenciaFunction(numero,potencia){
    let acumulador = 1;
    for (let i = 1 ; i <= potencia ; i++) {
          
          
          acumulador *=  numero ;
        
    }
    return acumulador
}