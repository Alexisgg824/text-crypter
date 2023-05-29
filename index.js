function encrypt() {
    let text = document.getElementById ("text").value;
    let empty = document.getElementById ("empty");
    let specify = document.getElementById ("specify");
    let doll = document.getElementById ("doll");

    let textCrypt = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (text.length != 0)  {
        document.getElementById ("text").value = textCrypt;
        empty.textContent = "Texto Encriptado con éxito";
        specify.textContent = "";
        doll.src = "images/success.png"; 
    }
    else { 
        empty.textContent = "Ningún mensaje fue encontrado";
        specify.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        doll.src = "images/fail.png";
    }
}

function decrypt() {
    let text = document.getElementById ("text").value;
    let empty = document.getElementById ("empty");
    let specify = document.getElementById ("specify");
    let doll = document.getElementById ("doll");

    let textCrypt = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (text.length != 0)  {
        document.getElementById ("text").value = textCrypt;
        empty.textContent = "Texto Desencriptado con éxito";
        specify.textContent = "";
        doll.src = "images/success.png"; 
    }
    else { 
        empty.textContent = "Ningún mensaje fue encontrado";
        specify.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        doll.src = "images/fail.png";
    }
}
