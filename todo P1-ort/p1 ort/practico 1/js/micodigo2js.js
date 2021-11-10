inicializar();

function inicializar() {

    document.querySelector("#btnMostrarformateado").addEventListener("click", mostrarMensaje);
    document.querySelector("#btnSumaE2").addEventListener("click", sumaNumeros);
    document.querySelector("#btnSumaE3").addEventListener("click", sumaNumeros2);
    document.querySelector("#btnSumaE4").addEventListener("click", sumaNumeros3);
    document.querySelector("#btnMts2").addEventListener("click", alapotencia);
    document.querySelector("#btndolares").addEventListener("click", tipodecambio);
    document.querySelector("#btndivision").addEventListener("click", resultadorestodivision);
    document.querySelector("#btnresultsumasumarest").addEventListener("click", sumasumaresta);
    document.querySelector("#btnalcuadradomenosuma").addEventListener("click", alcuadradomenosN);
    document.querySelector("#btnporcentaje").addEventListener("click", tipodeintereses);
    document.querySelector("#btncalculariva").addEventListener("click", montoivaincluido);
    document.querySelector("#btnIMC").addEventListener("click", calcularIMC);
    document.querySelector("#botonNumber13").addEventListener("click", cliquesmas1);
    document.querySelector("#btnclick3").addEventListener("click", cliquesmas3);


}


function mostrarMensaje() { // funcion ejercicio 1 trocar nombre apellido.

    let Nombre = document.querySelector("#txtNombre").value
    let Apellido = document.querySelector("#txtApellido").value
    let Resultado = Apellido + ", " + Nombre
    document.querySelector("#divResultado").innerHTML = Resultado
}

function sumaNumeros() { // funcion ejercicio 2 sumar 2 numeros.

    let numingresado1 = parseInt(document.querySelector("#txtNum1").value)
    let numingresado2 = parseInt(document.querySelector("#txtNum2").value)
    let resultado = numingresado1 + numingresado2;
    document.querySelector("#res_ej_2").innerHTML = resultado
}

function sumaNumeros2() { // funcion ejercicio 3 sumar 3 numeros.
    let numingresado1 = parseInt(document.querySelector("#txtNum4").value)
    let numingresado2 = parseInt(document.querySelector("#txtNum5").value)
    let numingresado3 = parseInt(document.querySelector("#txtNum6").value)
    let resultado = numingresado1 + numingresado2 + numingresado3;
    document.querySelector("#res_ej_3").innerHTML = resultado
}

function sumaNumeros3() { // funcion ejercicio 4
    let numingresado1 = parseInt(document.querySelector("#txtNum7").value)
    let numingresado2 = parseInt(document.querySelector("#txtNum8").value)
    let resultado = numingresado1 + numingresado2;
    document.querySelector("#res_sum_4").innerHTML = "resultado suma " + resultado
    let resultado2 = numingresado1 * numingresado2;
    document.querySelector("#res_mult_4").innerHTML = "resultado multiplicacion " + resultado2

}

function alapotencia() { // funcion ejercicio dos calcular metros cuadrados del cuadrado.

    let numingresado1 = parseInt(document.querySelector("#txtNum9").value)
    let resultado = numingresado1 * numingresado1;
    document.querySelector("#res_alcuadrado").innerHTML = "equivale a mts2 " + resultado

}

function tipodecambio() { // funcion para calcular tipo de cambio

    let numingresado1 = parseInt(document.querySelector("#ingresardolares").value)
    let resultado = numingresado1 * 42;
    document.querySelector("#res_pesos").innerHTML = "$ " + resultado

}

function resultadorestodivision() { // funcion para calcular resto de una division

    let numingresado1 = parseInt(document.querySelector("#valordiv1").value)
    let numingresado2 = parseInt(document.querySelector("#valordiv2").value)
    let resultado = numingresado1 % numingresado2;
    document.querySelector("#res_resto_de_la_div").innerHTML = "el resto de la division es: " + resultado

}

function sumasumaresta(){ // codigo para sumar sumar restar

    let numingresado1 = parseInt(document.querySelector("#numerosuma1").value)
    let numingresado2 = parseInt(document.querySelector("#numerosuma2").value)
    let numingresado3 = parseInt(document.querySelector("#numeroresta").value)
    let resultado = numingresado1 + numingresado2 - numingresado3;
    document.querySelector("#res_ej_8").innerHTML = resultado

}

function alcuadradomenosN(){ // funcion para numero al cuadrado menos resta de dos enteros

    let numingresado1 = parseInt(document.querySelector("#numeroalcuadrado").value)
    let numingresado2 = parseInt(document.querySelector("#numerosumaresta").value)
    let numingresado3 = parseInt(document.querySelector("#numerosumaresta2").value)
    let resultado = numingresado1 * numingresado1 - ( numingresado2 + numingresado3 );
    document.querySelector("#res_ej_9").innerHTML = resultado

}


function tipodeintereses() { // funcion para calcular tipo de cambio

    let numingresado1 = parseInt(document.querySelector("#ingresarmonto").value)
    let resultado = numingresado1  /10 + numingresado1;
    document.querySelector("#res_intereses").innerHTML = "$ " + resultado

}

function montoivaincluido(){ // funcion para calcular monto mas iva

    let numingresado1 = parseInt(document.querySelector("#ingresarmonto2").value)
    let resultado = numingresado1 * 1.22;
    document.querySelector("#res_total").innerHTML = "$ iva inc. " + resultado

}

function calcularIMC(){ // funcion para calcular imc
    
    let numingresado1 = parseInt(document.querySelector("#pesoenkilos").value)
    let numingresado2 = parseFloat(document.querySelector("#altura").value)
    let resultado = numingresado1 / ( numingresado2 * numingresado2 );
    document.querySelector("#res_IMC").innerHTML = "Su IMC es " + resultado

}

let cuentacliques = 0;

function cliquesmas1() { // funcion de contar cliques.
    cuentacliques = cuentacliques + 1;
    document.querySelector("#Resultado14").innerHTML = cuentacliques;
    
}


let cuentacliques3 = 0;

function cliquesmas3() { // funcion de x3 cliques.
    cuentacliques3 = cuentacliques3 + 3;
    document.querySelector("#resultadomas3").innerHTML = cuentacliques3;
    
}

