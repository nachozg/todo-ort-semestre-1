Inicializar();

function Inicializar() {
    document.querySelector("#imprimir").addEventListener("click", imprimir1a1000);
    document.querySelector("#imprimir2").addEventListener("click", imprimirEnterosmenos100a10);
    document.querySelector("#imprimir3").addEventListener("click", imprimirEnteros40al10);
    document.querySelector("#imprimir4").addEventListener("click", imprimirEnterosdel20amenos30);
    document.querySelector("#imprimir5").addEventListener("click", imprimirmultiplosde5hasta450);
    document.querySelector("#imprimir6").addEventListener("click", imprimirMultde4demenos33a230);
    document.querySelector("#imprimir6w").addEventListener("click", imprimirMultde4demenos33a230conwhile);
    document.querySelector("#imprimir7").addEventListener("click", ingresarNumIgualAGregarGuion);
    document.querySelector("#imprimir8").addEventListener("click", ingresarNumerosyMostrarLosDelMedio);
    document.querySelector("#imprimir11").addEventListener("click", ing3NumyMostrarlosdelMedioMultiplosdelTercero);
    document.querySelector("#imprimir9").addEventListener("click", ingresar2NumyMostrarProductoSoloRepetitivas);
    document.querySelector("#imprimir10").addEventListener("click", ingresar2NumyMostrarProductosDeNumerosdelMedio);
    document.querySelector("#imprimir12").addEventListener("click", ingresarNumyMOstrarFactorial);
    document.querySelector("#imprimir13").addEventListener("click", ingresarAltoyAnchoderectangulo);
    document.querySelector("#imprimir14").addEventListener("click", mostrarDigitos);
    document.querySelector("#imprimir15").addEventListener("click", dividirEntre20yMostrarMenor100);
    document.querySelector("#imprimir16").addEventListener("click", numeroyMOstrarPrimerMultEntre6y4);
    document.querySelector("#imprimir17").addEventListener("click", hacerDivisionConRestasyRepetitivas);
}

// ejercicio 1.
function imprimir1a1000() {
    let resultado = "";

    let i = 0;
    while (i < 1001) {
        resultado += i + " <br>";
        i++;


    }
    document.querySelector("#resultado_E1").innerHTML = resultado
}

// ejercicio 2.
function imprimirEnterosmenos100a10() {
    let resultado = " ";

    let i = -100;
    while (i < 11) {
        resultado += i + " ";
        i++;


    }
    document.querySelector("#resultado_E2").innerHTML = resultado
}


// ejercicio 3.
function imprimirEnteros40al10() {
    let resultado = "";

    let i = 40;
    while (i > 9) {
        resultado += i + " ";
        i--;


    }
    document.querySelector("#resultado_E3").innerHTML = resultado
}

// ejercicio 4
function imprimirEnterosdel20amenos30() {

    let resultado = "";

    for (let i = 20; i >= -30; i--) {
        resultado += i + " ";
    }



    document.querySelector("#resultado_E4").innerHTML = resultado;
}

// ejercicio 5
function imprimirmultiplosde5hasta450() {

    let resultado = "";

    for (let i = 0; i <= 450; i++) {

        if (i % 5 == 0) {
            resultado += i + " ";
            document.querySelector("#resultado_E5").innerHTML = resultado;
        }
    }
    document.querySelector("#resultado_E5").innerHTML = resultado;
}

// Ejercicio 6
function imprimirMultde4demenos33a230() {

    let resultado = "";

    for (let i = -33; i <= 230; i++) {

        if (i % 4 == 0) {
            resultado += i + " ";
            document.querySelector("#resultado_E6").innerHTML = resultado;
        }
    }
    document.querySelector("#resultado_E6").innerHTML = resultado;
}

// Ejercicio 6 con while
function imprimirMultde4demenos33a230conwhile() {

    let resultado = " ";
    let i = -33
    while (i < 231) {

        i++;
        if (i % 4 == 0) {
            resultado += i + " ";
            document.querySelector("#resultado_E6w").innerHTML = resultado
        }

    }

}

function ingresarNumIgualAGregarGuion() {

    let resultado = " ";
    let n = parseInt(document.querySelector("#ingresarNUM_E7").value);

    for (let i = 0; i < n; i++) {

        if (n >= 2 && n <= 50) {

            resultado += "-";

        } else {
            resultado = "debe ingresar un numero del 2 al 50"
        }
        document.querySelector("#resultado_E7").innerHTML = resultado

    }

}

function ingresarNumerosyMostrarLosDelMedio() {

    let resultado = "  ";
    let i = parseInt(document.querySelector("#ingresarNUM1_E8").value);
    let n = parseInt(document.querySelector("#ingresarNUM2_E8").value);

    if (i >= n) {
        while (i >= n) {

            resultado += i + " ";
            i--;
            document.querySelector("#resultado_E8").innerHTML = resultado;
        }

    } else {
        while (i <= n) {

            resultado += i + " ";
            i++;
            document.querySelector("#resultado_E8").innerHTML = resultado;
        }
    }
}

function ing3NumyMostrarlosdelMedioMultiplosdelTercero() {

    let resultado = "";
    let i = parseInt(document.querySelector("#ingresarNUM1_E11").value);
    let n = parseInt(document.querySelector("#ingresarNUM2_E11").value);
    let z = parseInt(document.querySelector("#ingresarNUM3_E11").value);


    if (i > n) {
        while (i > n) {



            if (i % z == 0) {
                resultado += i + " ";

            }
            i--;
        }
        document.querySelector("#resultado_E11").innerHTML = resultado;
    } else {
        while (i < n) {
            if (i % z == 0) {
                resultado += i + " ";

            }
            i++;

        }
        document.querySelector("#resultado_E11").innerHTML = resultado;
    }
}

// ejercicio 9
function ingresar2NumyMostrarProductoSoloRepetitivas() {

    let resultado = 0;
    let num1 = parseInt(document.querySelector("#ingresarNUM1_E9").value);
    let num2 = parseInt(document.querySelector("#ingresarNUM2_E9").value);

    for (let i = 1; i <= num2; i++) {
        resultado += num1;

    }
    document.querySelector("#resultado_E9").innerHTML = resultado;
}

// 
function ingresar2NumyMostrarProductosDeNumerosdelMedio() {


    let num1 = parseInt(document.querySelector("#ingresarNUM1_E10").value);
    let num2 = parseInt(document.querySelector("#ingresarNUM2_E10").value);
    let resultado = 1;

    for (let i = num1; i <= num2; i++) {

        resultado *= i;

    }
    document.querySelector("#resultado_E10").innerHTML = resultado;
}

// mostrar area de un rectangulo
function ingresarAltoyAnchoderectangulo() {

    let resultado = " ";
    let largo = parseInt(document.querySelector("#ingresarNUM1_E13").value);
    let ancho = parseInt(document.querySelector("#ingresarNUM2_E13").value);
    let i = 0;
    let fila = " ";
    while (i < largo) {



        fila += "x";


        i++;
    }

    for (let j = 0; j < ancho; j++) {

        resultado += fila + "<br>";
    }
    document.querySelector("#resultado_E13").innerHTML = resultado;
}
// funcion para encontrar el factorial de un numero
function ingresarNumyMOstrarFactorial() {

    let numero = parseInt(document.querySelector("#ingresarNUM_E12").value);
    let resultado = 1;

    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    document.querySelector("#resultado_E12").innerHTML = resultado;

}
// cuantos digitos tiene un numero
function mostrarDigitos() {

    let numero = parseInt(document.querySelector("#ingresarNUM_E14").value);
    let resultado = 0;
    let i = 0;
    while (i < numero) {
        numero = numero / 10;
        resultado++;
        i++;
    }
    document.querySelector("#resultado_E14").innerHTML = resultado;
}
// dividir entre 20 hasta que sea numero menor que 100
function dividirEntre20yMostrarMenor100() {

    let numero = parseInt(document.querySelector("#ingresarNUM_E15").value);

    if (numero >= 2000) {


        while (100 < numero) {
            numero = numero / 20;
        }


        document.querySelector("#resultado_E15").innerHTML = numero;
    } else {

        document.querySelector("#resultado_E15").innerHTML = "Debe ingresar un numero mayor o igual a 2000";
    }
}
// multiplo de 6 y 4 
function numeroyMOstrarPrimerMultEntre6y4() {

    let numero1 = parseInt(document.querySelector("#ingresarNUM1_E16").value);
    let numero2 = parseInt(document.querySelector("#ingresarNUM2_E16").value);
    let resultado = " ";
    let valorMenor = numero1;
    let valorMayor = numero2;
    if (valorMenor >= valorMayor) {
        valorMenor = numero2;
        valorMayor = numero1;

    } 

    for (i = valorMenor ;  !(i % 6 == 0 && i % 4 == 0) ; i ++){

        resultado = i + 1;
    }

    document.querySelector("#resultado_E16").innerHTML = resultado;

}
// hacer division con restas
function hacerDivisionConRestasyRepetitivas() {

    let numero = parseFloat(document.querySelector("#ingresarNUM1_E17").value);
    let numeroResta = parseFloat(document.querySelector("#ingresarNUM2_E17").value);
    let resultado = 1 ;

    while (numero > numeroResta) {
        numero = numero - numeroResta;
         resultado ++; 
    }

    
    document.querySelector("#resultado_E17").innerHTML = resultado + ". " + numero  ;
}