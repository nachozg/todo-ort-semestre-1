Inicializar();

function Inicializar() {
    document.querySelector("#btn_subirtexto").addEventListener("click", reciboTExtoMuestroSinVocales);
    document.querySelector("#btn_subirtexto2").addEventListener("click", subirTextoParaArray)
    document.querySelector("#btn_subirtexto22").addEventListener("click", devolverArraySinVocales)
}

function reciboTExtoMuestroSinVocales() {
    let reciboTexto2 = document.querySelector("#recibo_texto").value;
    let reciboTExtoMuestroSinVocales = devolverTextoSinvocales(reciboTexto2);
    document.querySelector("#resultado_Simulacro").innerHTML = reciboTExtoMuestroSinVocales;
}
// funcion para devolver texto sin vocales
function devolverTextoSinvocales(Texto) {

    let recTexto = Texto.toLowerCase();
    let textoSinVocales = ""; // acumulador de nuevo texto

    for (let i = 0; i < recTexto.length; i++) { // me paro en array 0 y recorro

        if (recTexto[i] == "a" || recTexto[i] == "e" || recTexto[i] == "i" || recTexto[i] == "o" || recTexto[i] == "u") { // condicional para espacio que no quiero acumular
            recTexto
        } else {
            textoSinVocales += recTexto[i]; // acumulo letras sin vocales
        }

    }


    return textoSinVocales
}
miArraySimulacro = [];

function subirTextoParaArray() {

    let reciboTexto = document.querySelector("#recibo_texto2").value;
    miArraySimulacro.push(reciboTexto);
    document.querySelector("#recibo_texto2").value = "";
    console.log(miArraySimulacro)
}

function devolverArraySinVocales(){
    let textoDeMiArray = "";
    for (let i = 0; i < miArraySimulacro.length; i++) {
         textoDeMiArray += miArraySimulacro[i] + " ";
        
    }
    let reciboSInVocales = devolverTextoSinvocales(textoDeMiArray);
    console.log(reciboSInVocales)
    document.querySelector("#resultado_Simulacro2").innerHTML = reciboSInVocales

}