inicializar();

function inicializar() {

    document.querySelector("#btn_prueba").addEventListener("click", mostrarMotivoyGasto);


}

let montoTotal = 0;
let montoGastoBajo = Number.POSITIVE_INFINITY;

function mostrarMotivoyGasto() {


    let motivo = document.querySelector("#registrar_Motivo").value;
    let gasto = parseFloat(document.querySelector("#monto_gasto").value);


    if (gasto > 0 && !isNaN(gasto)) {
        let acumuladorGasto = montoTotal += gasto;
        let resultado = acumuladorGasto;
        document.querySelector("#result_prueba").innerHTML = "el monto total es: " + resultado;
    }
     if (gasto < montoGastoBajo && gasto > 0) {
        montoGastoBajo = gasto;
        document.querySelector("#montoMinimoingresado").innerHTML = "el monto minimo es: " + montoGastoBajo;
    }
     if (gasto < 0 ) {
        document.querySelector("#result_prueba").innerHTML = "debe ingresar un numero mayor a 0 ";
         
     }
    
    
}