Inicializar();

function Inicializar() {
    document.querySelector("#btn_largoStrings").addEventListener("click", largodeStrings);
    document.querySelector("#btn_subirAlArray").addEventListener("click", subirNumerosAlARRray);
    document.querySelector("#btn_mostrarMayorNum").addEventListener("click", mostrarMayorNumero);
    document.querySelector("#btn_subirAlArray2").addEventListener("click", subirpalabrasAlARRray);
    document.querySelector("#btn_mostrar_Array").addEventListener("click", pasarContenido);
    document.querySelector("#btn_subirAlArray5").addEventListener("click", subirNumerosalarray5);
    document.querySelector("#btn_mostrar_Array5").addEventListener("click", pasarContenidoejercicio5);
    document.querySelector("#btn_subirAlArray6").addEventListener("click", subirUsuarios);
    document.querySelector("#btn_subirAlArray7").addEventListener("click", subirNombres);
    document.querySelector("#btn_subirAlArray72").addEventListener("click", mostrarPosicion);
    document.querySelector("#btn_subirAlArray73").addEventListener("click", buscarNombre);
    document.querySelector("#btn_subirAlArrayFibonacci").addEventListener("click", fibonucci);
    document.querySelector("#btn_subirAlArrayFibonacci2").addEventListener("click", fibonucci2);
}
let miArray1 = []; // array a llenar con texto
function largodeStrings() {

    let textoIngresado = document.querySelector("#reciboTxtE1").value; //variable para ingresar texto
    console.log(miArray1);
    miArray1.push(textoIngresado); // guardo en la ultima posicion del array
    document.querySelector("#reciboTxtE1").value = ""; // dejo el texto vacio para ingresar nuevo string
    let resultadoLongitudStrings = longitudStrings(miArray1); //variable para recibir el valor de la longitud de cada string
    console.log(resultadoLongitudStrings)
    // let mostrarResultado = funcResultados(miArray1,"#resultado_E1", ", ", ".", true) // muestro resultado 

    // funcion para contar el largo de las strings dentro de un array
    function longitudStrings(arrayOriginal) {
        let arrayResultados = []; // recibo los largos de los strings segun posicion 

        for (let i = 0; i < arrayOriginal.length; i++) {
            let miNuevoArray = arrayOriginal[i];
            let largoMiNuevoArray = miNuevoArray.length;
            arrayResultados[i] = largoMiNuevoArray;
            console.log(largoMiNuevoArray)
        }
        return arrayResultados

    }
}
//ejercicio 2
let miArrayNumerico2 = [];

function subirNumerosAlARRray() {
    let numIngresado = parseInt(document.querySelector("#reciboNumParaArray").value); // ingreso numero
    miArrayNumerico2.push(numIngresado); // guardo en la ultima posicion del array// guardo en la ultima posicion 
    document.querySelector("#reciboNumParaArray").value = ""; // dejo texto vacio para ingresar nuevo numero

}
// funcion para mostrar numero mayor
function mostrarMayorNumero() {
    let numeroMayor = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < miArrayNumerico2.length; i++) {
        let arrayRecibido = miArrayNumerico2[i];
        if (numeroMayor < miArrayNumerico2[i]) {
            numeroMayor = miArrayNumerico2[i]
            console.log(numeroMayor)
        }
    }
    document.querySelector("#resultado_E2").innerHTML = "el numero mayor guardado en el array  es: " + numeroMayor;
}
// ejercicio 3 
let miArrayTxt3 = [];

function subirpalabrasAlARRray() {
    let textoIngresado = document.querySelector("#recibo_Para_Array").value; // ingreso numero
    miArrayTxt3.push(textoIngresado); // guardo en la ultima posicion del array// guardo en la ultima posicion 
    console.log(miArrayTxt3);
    document.querySelector("#recibo_Para_Array").value = ""; // dejo texto vacio para ingresar nuevo numero

}

function pasarContenido() { // con el evento de click 
    mostrarContenidoDeArray(miArrayTxt3, "resultado_E3", ", ", ".", false);
}
// function para mostrar contenido de array
function mostrarContenidoDeArray(arrayParaMostrar, idElementoHTML, separador, caracterFinal, borrarResultadoActual) {
    let resultado = "";

    if (arrayParaMostrar.length == 0) {
        resultado = "El array está vacío."
    } else {
        for (let i = 0; i < arrayParaMostrar.length; i++) {
            let elementoActual = arrayParaMostrar[i];
            resultado += elementoActual;


            if (i < arrayParaMostrar.length - 1) {
                resultado += separador;
            } else {
                resultado += caracterFinal;
            }
        }
    }

    if (borrarResultadoActual) {
        document.querySelector(`#${idElementoHTML}`).innerHTML = resultado;
    } else {
        document.querySelector(`#${idElementoHTML}`).innerHTML += "<br>" + resultado;
    }
}
// ejercicio 5 
let miArray5 = [];

function subirNumerosalarray5() {
    numIngresado5 = document.querySelector("#recibo_Para_Array5").value;
    miArray5.push(numIngresado5)
    document.querySelector("#recibo_Para_Array5").value = "";

}
// function para pasar contenido del array 5
function pasarContenidoejercicio5() {
    let arrayMayores20 = [];
    for (let i = 0; i < miArray5.length; i++) {
        let miNuevoArray = miArray5[i];
        if (miArray5[i] > 20) {
            arrayMayores20.push(miArray5[i])
        }

    }
    console.log(arrayMayores20)
    mostrarContenidoDeArray(arrayMayores20, "resultado_E5", ", ", ".", false);
}
// ejercicio 6 funcion para subir usuario a array
let arrayUsuarios = []; //array para recibir usuario
function subirUsuarios() {
    let usuarioIngresado = document.querySelector("#recibo_Para_ArrayE6").value; // recibo usuario
    let comprobarUsuario = validoUsuario(usuarioIngresado, arrayUsuarios); // crear variable para recibir el return de la funcion validar
    document.querySelector("#resultado_E6").innerHTML = "";
    console.log(comprobarUsuario)
    if (comprobarUsuario == true) { // recibibir ese return 
        arrayUsuarios.push(usuarioIngresado); // si es valido entonces push
        document.querySelector("#recibo_Para_ArrayE6").value = "";
        mostrarContenidoDeArray(arrayUsuarios, "resultado_E6", ", ", ".", false); // mostrar todos los alias 
    } else {
        console.log("entre al segundo else")
        document.querySelector("#resultado_E6").innerHTML = "el nombre del usuario no esta disponible" // sino mensaje de respuesta
    }
}
// validar el usuario ingresado que no se repita
function validoUsuario(usuario, array) {

    let corroborarUsuario = false;
    let i = -1;
    while (i < array.length) { // pararme en el array
        i++;
        console.log("entre")
        if (array[i] != usuario) { // comparar si recorrido = usuario ingresado
            corroborarUsuario = true;
        } else {
            console.log("ELSE")
            corroborarUsuario = false;
            return corroborarUsuario
        }
    }
    return corroborarUsuario // devolver si es verdadero o no
}
//ejercicio 7
let arrayNombres = [];

function subirNombres() {
    let nombreIngresado = document.querySelector("#recibo_Para_ArrayE7").value; // ingreso nombre
    arrayNombres.push(nombreIngresado); // guardo en la ultima posicion del array// guardo en la ultima posicion 
    document.querySelector("#recibo_Para_ArrayE7").value = "";
    mostrarContenidoDeArray(arrayNombres, "resultado_E7", "<br>", ".", true);
    document.querySelector("#resultado_E71").innerHTML = `la cantidad de elementos en este array es: ${arrayNombres.length}`;

}
// funcion para mostrar contenido en una posicion de un array
function mostrarPosicion() {
    let reciboNombres = "";
    let numeroIngresado = parseInt(document.querySelector("#recibo_Para_ArrayE72").value);
    document.querySelector("#resultado_E72").innerHTML = arrayNombres[numeroIngresado];
    document.querySelector("#resultado_E722").innerHTML = arrayNombres[arrayNombres.length - 1];
}
// funcion para buscar nombre y sustituir por el encontrado
function buscarNombre() {
    let nombreBuscado = document.querySelector("#Buscador1").value;
    let nombreNuevo = document.querySelector("#Buscador2").value;
    let verificarMatcheoNombre = buscarMatchNameySustituir(arrayNombres, nombreBuscado, nombreNuevo);
    console.log(verificarMatcheoNombre)
    console.log(arrayNombres)
    if (verificarMatcheoNombre == true) {
        console.log("if de verificacion NO son iguales los arrays")
        mostrarContenidoDeArray(arrayNombres, "resultado_E73", "<br>", ".", true)
    } else {
        document.querySelector("#resultado_E73").innerHTML = "el nombre buscado no se encuentra"
    }

}
let reciboArray = [];

function buscarMatchNameySustituir(array, nombreBuscado, nombreNuevo) {
    let validar = false;

    for (let i = 0; i < array.length; i++) {
        console.log("entre al for")
        let reciboTexto = array[i];

        if (reciboTexto == nombreBuscado) {
            array[i] = nombreNuevo
            validar = true;
            console.log("entre al if")
        }
        reciboArray.push(array[i])
        console.log(array[i])

    }
    return reciboArray, validar
}
arrayFibonucci = [1, 1]
// ejercicio 8
function fibonucci() {

    let i = 0;
    while (i < 19) {

        let reciboValores = arrayFibonucci[i];
        let resultadoValores = reciboValores += arrayFibonucci[(i + 1)];
        arrayFibonucci.push(resultadoValores)
        i++;
        console.log(arrayFibonucci)
    }
   mostrarContenidoDeArray(arrayFibonucci, "resultado_E8", " ", ".", true)
}
// ejercicio 9
function fibonucci2 (){
    let i = 0;
    while (i < 19) {

        let reciboValores = arrayFibonucci[i];
        let resultadoValores = reciboValores += arrayFibonucci[(i + 1)];
        if (resultadoValores < 1000) {
            arrayFibonucci.push(resultadoValores)
        }
        
        i++;
        console.log(arrayFibonucci)
    }
   mostrarContenidoDeArray(arrayFibonucci, "resultado_E9", " ", ".", true);
}