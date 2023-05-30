const escribirTexto = document.querySelector(".escribirTexto")
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".botonCopiar")
copia.style.display = "none"

function validarTexto(){
    const espacio = " "
    let escribirTexto = document.querySelector(".escribirTexto").value;
    let sinAcentos = escribirTexto.match(/^[a-z][espacio, ","]*$/);

    if(!sinAcentos || sinAcentos === 0) {
        alert("No utilizar mayúsculas ni acentos")
        location.reload();
        return true;
    }
}

function botonEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(escribirTexto.value)
        mensaje.value = textoEncriptado
        escribirTexto.value = "";
        mensaje.style.backgroundImage = "none"
        copia.style.display = "block"
    }
}    

function encriptar(stringEncriptado){
    let letrasCambiadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();/*Convertir las letras a minúsculas*/
    

    for(let i = 0; i < letrasCambiadas.length; i++){
        if (stringEncriptado.includes(letrasCambiadas[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(letrasCambiadas[i][0], letrasCambiadas[i][1])
        }
    }
    return stringEncriptado
}



function desencriptar(stringDesencriptado){
    let letrasCambiadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();/*Convertir las letras a minúsculas*/
    

    for(let i = 0; i < letrasCambiadas.length; i++){
        if (stringDesencriptado.includes(letrasCambiadas[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(letrasCambiadas[i][1], letrasCambiadas[i][0])
        }
    }
    return stringDesencriptado 
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(escribirTexto.value)
    mensaje.value = textoEncriptado;
    textoEncriptado.value = "";
}

function botonCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

