Inicializar();

function Inicializar() {

    document.querySelector("#btn_invertirTxt").addEventListener("click", invertirTexto);
    document.querySelector("#btn_vocalesTxt2").addEventListener("click", indicarVocales);
    document.querySelector("#btn_contarLetra").addEventListener("click", indicarCantidadLetra);
    document.querySelector("#btn_aMinusculaTxt").addEventListener("click", mostrarTxtenminuscula);
    document.querySelector("#btn_aMayusculaTxt").addEventListener("click", mostrarTxtenMayuscula);
    //document.querySelector("#btn_subcadenaTxt").addEventListener("click", comprobarSiEsSubcadena);
    document.querySelector("#btn_contarPalabras").addEventListener("click", comprobarCuantasPalabrAS);
    document.querySelector("#btn_CompararPrincipioYFin").addEventListener("click", compararPrimerYUltimaLetra);
    document.querySelector("#btn_sustituirLetra").addEventListener("click", sustituirLetraPorRosquete);
    document.querySelector("#btn_Matriculas").addEventListener("click", IdentificarMatriculas);
    document.querySelector("#btn_espacioENblanco").addEventListener("click", identificarLetras);
    document.querySelector("#btn_paliendro").addEventListener("click", identificarPalindromos);
}



function invertirTexto() {

    let textoIngresado = document.querySelector("#ingresarTxtE1").value;
    let textoReverse = leerTextoAlReves(textoIngresado)
    document.querySelector("#imprimir_E1").innerHTML = textoReverse
}
// funcion para devolver textoalreves
function leerTextoAlReves(texto) {

    let cantidadDeCaracteres = texto.length;
    let palabraAlReves = "";

    for (let i = cantidadDeCaracteres - 1; i >= 0; i--) {
        palabraAlReves += texto[i];

    }
    return palabraAlReves
}

function indicarVocales() {

    let textoIngresado = document.querySelector("#ingresarTxtE2").value;
    let cantidadVocales = vocales(textoIngresado);
    document.querySelector("#imprimir_E2").innerHTML = cantidadVocales;

}
// funcion para contar vocales
function vocales(texto) {

    let reciboTexto = texto;
    reciboTexto = reciboTexto.toLowerCase();
    let encuentraVocales = texto.length - 1;
    let cuentaVocales = 0;
    let j = encuentraVocales;
    while (j >= 0) {

        let letraActual = reciboTexto[j];

        if (letraActual == "a" || letraActual == "e" || letraActual == "i" || letraActual == "o" || letraActual == "u") {
            cuentaVocales++;

        }
        j--;
    }
    return cuentaVocales

}

function indicarCantidadLetra() {

    let letraIngresada = document.querySelector("#ingresarLetraE2").value;
    let textoIngresado = document.querySelector("#ingresarTxtE22").value;
    let letraRepetida = contarLetra(letraIngresada, textoIngresado);
    document.querySelector("#imprimir_2ejer").innerHTML = letraRepetida;

}
// funcion para contar una letra determinada
function contarLetra(letra, texto) {

    letra = letra.toLowerCase();
    texto = texto.toLowerCase();
    let sumaLetra = 0;
    let cantidadDeTexto = texto.length - 1;

    for (let jz = cantidadDeTexto; jz >= 0; jz--) {
        let textoActual = texto[jz];
        if (textoActual == letra) {
            sumaLetra++;
        }

    }
    return sumaLetra
}

function mostrarTxtenminuscula() {

    let textoIngresado = document.querySelector("#ingresarTxtE4").value;
    let textoEnMinuscula = pasarTextoAMinuscula(textoIngresado);
    document.querySelector("#imprimir_E4").innerHTML = textoEnMinuscula;
}
// funcion para pasar texto a minuscula
function pasarTextoAMinuscula(texto) {

    texto = texto.toLowerCase();
    return texto
}


function mostrarTxtenMayuscula() {

    let textoIngresado = document.querySelector("#ingresarTxtE5").value;
    let textoEnMayuscula = pasarTextoAMayuscula(textoIngresado);
    document.querySelector("#imprimir_E5").innerHTML = textoEnMayuscula;
}
// funcion para pasar texto a mayuscula
function pasarTextoAMayuscula(texto) {

    texto = texto.toUpperCase();
    return texto
}

//function comprobarSiEsSubcadena() {

//   let textoIngresado1 = document.querySelector("#ingresarTxtE61").value;
// let textoIngresado2 = document.querySelector("#ingresarTxtE62").value;
//let comprobarSubcadena = compararCadenasdeTexto(textoIngresado1, textoIngresado2);
//document.querySelector("#imprimir_E6").innerHTML = comprobarSubcadena;

//}//
// funcion para comparar cadenas de texto
//compararCadenasdeTexto(cadena1, cadena2) {



//}

function comprobarCuantasPalabrAS() {

    let textoIngresado = document.querySelector("#ingresarTxtE7").value;
    let cantidadDePalabras = palabras(textoIngresado);
    document.querySelector("#imprimir_E7").innerHTML = cantidadDePalabras;

}
// function para contar palabras
function palabras(texto) {

    let encuentraPalabra = texto.length - 1; //cantidad de letras
    let cuentaPalabra = 0; // contador de palabras
    let j = encuentraPalabra; //cantidad de letras para el for innecesario?

    for (let z = 0; z < j; z++) {
        let textoActual = texto[z];
        if ((textoActual == " ")) {
            cuentaPalabra++;
        }
    }
    return (cuentaPalabra + 1)


}

function compararPrimerYUltimaLetra() {

    let palabraIngresada1 = document.querySelector("#ingresarTxtE81").value;
    let palabraIngresada2 = document.querySelector("#ingresarTxtE82").value;
    let primerYUltima = comparoPrincipioYfin(palabraIngresada1, palabraIngresada2);
    document.querySelector("#imprimir_E8").innerHTML = primerYUltima;

}
// funcion para comparar primer y ultima letra de dos palabras
function comparoPrincipioYfin(palabra1, palabra2) {
    palabra1 = palabra1.toLowerCase(); // pasar palabra 1 a minuscula
    palabra2 = palabra2.toLowerCase(); // pasaar palabra 2 a minuscula


    let comparacion = " ";

    for (let i = 0; i < palabra1.length; i++) { // quedarme con los valor 0 y length -1
        let palabra1nueva = palabra1[0] + palabra1[palabra1.length - 1]; // pararme en la palabra 1 y recorrela 


        for (let j = 0; j < palabra2.length; j++) { // pararme en palabra2 y recorrerla

            let palabra2nueva = palabra2[0] + palabra2[palabra2.length - 1]; // quedarme con los valor o y lenght - 1


            if (palabra2nueva == palabra1nueva) { //comparar si son iguales o no los resultados obtenidos
                comparacion = "las palabras empiezan y terminan con las mismas letras"
            } else {
                comparacion = "las palabras NO empiezan o no terminan con la misma letra"
            }
        }
    }
    return comparacion

}

function sustituirLetraPorRosquete() {

    let letraIngresada = document.querySelector("#ingresarLetraE10").value;
    let textoIngresado = document.querySelector("#ingresarTxtE10").value;
    let letraSustituida = sustituirPorAsterisco(letraIngresada, textoIngresado);
    document.querySelector("#imprimir_10ejer").innerHTML = letraSustituida;

}
// funcion para sustituir letra indicada por asterisco
function sustituirPorAsterisco(letra, texto) {

    letra = letra.toLowerCase(); // paso letra a minuscula

    texto = texto.toLowerCase(); // paso texto a minuscula
    let nuevoTexto = " "; // variable para recibir texto
    let iz = texto.length; // cantidad de letras

    for (let i = 0; i < iz; i++) { //me paro entexto //recorro texto



        if (texto[i] == letra) { // condicion si letra es igual al recorrido de i

            nuevoTexto += "*"; //  cambio letra por rosquete

        } else {
            nuevoTexto += texto[i];
        }

    }

    return nuevoTexto
}

function IdentificarMatriculas() {

    let matriculaIngresada = document.querySelector("#ingresarTxtE9").value;
    let pertenceDepartamento = identificarDepartamento(matriculaIngresada);
    document.querySelector("#imprimir_E9").innerHTML = pertenceDepartamento;

}
// funcion para identificar departamento
function identificarDepartamento(matricula) {

    matricula = matricula.toUpperCase() //pasar matricula a mayuscula
    let primerletra = matricula[0];

    switch (primerletra) {
        case "A":
            primerletra = "Canelones"
            break;
        case "B":
            primerletra = "MALDONADO"
            break;
        case "C":
            primerletra = "ROCHA"
            break;
        case "D":
            primerletra = "TREINTA Y TRES"
            break;
        case "E":
            primerletra = "CERRO LARGO"
            break;
        case "F":
            primerletra = "RIVERA"
            break;
        case "G":
            primerletra = "ARTIGAS"
            break;
        case "H":
            primerletra = "SALTO"
            break;
        case "I":
            primerletra = "PAYSANDU"
            break;
        case "J":
            primerletra = "RIONEGRO"
            break;
        case "K":
            primerletra = "SORIANO"
            break;
        case "L":
            primerletra = "COLONIA"
            break;
        case "M":
            primerletra = "SAN JOSE"
            break;
        case "N":
            primerletra = "FLORES"
            break;
        case "O":
            primerletra = "FLORIDA"
            break;
        case "P":
            primerletra = "LAVALLEJA"
            break;
        case "Q":
            primerletra = "DURAZNO"
            break;
        case "R":
            primerletra = "TACUAREMBO"
            break;
        case "S":
            primerletra = "MONTEVIDEO"
            break;


    }
    //tomar la primer letra 
    //comparar con un switch
    //devolver valor
    return primerletra
}

function identificarLetras() {

    let textoIngresado = document.querySelector("#ingresarTxtE12").value;
    let sacarEspacios = eliminarEspaciosEnBlanco(textoIngresado);
    let cantidadDeMayusculas = cuentaMayusculas(sacarEspacios);
    let cantidadMinusculas = cuentaMinusculas(sacarEspacios)

    document.querySelector("#imprimir_E12").innerHTML = "la cantidad de mayusculas es: " +
        cantidadDeMayusculas + "<br>" +
        "la cantidad de minusculas es: " +
        cantidadMinusculas;

}
// funcion para eliminar espacios
function eliminarEspaciosEnBlanco(texto) {
    let textoSinEspacios = ""; // acumulador de nuevo texto

    for (let i = 0; i < texto.length; i++) { // me paro en array 0 y recorro

        if (texto[i] == " ") { // condicional para espacio que no quiero acumular
            textoSinEspacios
        } else {
            textoSinEspacios += texto[i]; // acumulo letras sin espacio
        }

    }
    return textoSinEspacios
}
// funcion para contar mayusculas
function cuentaMayusculas(texto) {
    contadorMayus = 0;
    for (let i = 0; i < texto.length; i++) {
        let textoNuevo = texto[i];
        if (texto[i] == texto[i].toUpperCase()) {
            contadorMayus++;
        }

    }
    return contadorMayus - 1
}
// funcion para contar minusculas
function cuentaMinusculas(texto) {
    contadorMinus = 0;
    for (let i = 0; i < texto.length; i++) {
        let textoNuevo = texto[i];
        if (texto[i] == texto[i].toLowerCase()) {
            contadorMinus++;
        }

    }
    return contadorMinus - 1
}

function identificarPalindromos() {

    let textoIngresado = document.querySelector("#ingresarTxtE13").value;// ingreso el texto 
    console.log(textoIngresado)//texto ingresado en la cosola
    let textoSinEspacios = eliminarEspaciosEnBlanco(textoIngresado) // invoco a la fun que elimina espacios le doy textoIngresado como valor
    console.log(textoSinEspacios);//texto limpio en cosola
    let textoProcesado = verificadorPalindromos(textoSinEspacios); // invoco la funcion para verificar si es o no palindromos le doy textoSinEspacis como valor
    document.querySelector("#imprimir_E13").innerHTML = textoProcesado// muestra valor de funcion para verificar palindromos

}
// funcion para identificar palindromos
function verificadorPalindromos(textolimpioSinEspacios) {// recibe texto limpioSinEspacios
    console.log(textolimpioSinEspacios);//calor recibido en consola
    let devuelvoTexto = "";    // lo que voy a retornar 
    let textoalreves = leerTextoAlReves(textolimpioSinEspacios); // invoco la funcion texto al reves y le doy valor texto limpio
    console.log(textoalreves);//valor devuelto en consola
    if (textoalreves == textolimpioSinEspacios) { // condicional comparo el valor que me devuelve la funcion leerTextoAlreves con el valor que recibe verificdordePlindromos
        devuelvoTexto = "Es palindromo"
        console.log("entre al if")
    } else {
        devuelvoTexto = "Es NO es palindromo"
        console.log("entre al else")
    }
    
    return devuelvoTexto

}