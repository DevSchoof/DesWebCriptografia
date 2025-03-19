
 const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", 
    "z", "0", "1", "2", "3", "4", "5", "6", "7" ,"8" ,"9"
];


function criptografar(texto) {
    const deslocamento = 5;
    let criptografado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase();
        let indice = alfabeto.indexOf(char);

        if(indice >= 0) {
            let novoIndice = (indice + deslocamento) % alfabeto.length;
            criptografado += alfabeto[novoIndice];
        } 
        else {
            criptografado += texto[i];
        }
    }
    return criptografado
}


function descriptografar(texto) {
    const deslocamento = -5;
    let descriptografado = "";

    for (let i = 0; i <texto.length; i++) {
        let char = texto[i].toLowerCase();
        let indice = alfabeto.indexOf(char);

        if(indice >= 0) {
            let novoIndice = (indice + deslocamento + alfabeto.length) % alfabeto.length;
            descriptografado += alfabeto[novoIndice];
        }
        else {
            descriptografado += texto[i];
        }
    }
    return descriptografado
}


const frm = document.querySelector("form")
const entrada = document.getElementsByName("entrada")[0];
const textoCriptografado = document.getElementById("textoCriptografado");
const btnDescriptografar = document.getElementById("btnDescriptografar");
const textoDescriptografadoDiv = document.getElementById("TextoDescriptografado");

let textoCriptografadoResultado = "";

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const textoEntrada = entrada.value;
    textoCriptografadoResultado = criptografar(textoEntrada);

    textoCriptografado.textContent = "Texto Criptografado: " + textoCriptografadoResultado;
});

btnDescriptografar.addEventListener("click", () => {

    const textoDescriptografadoResultado = descriptografar(textoCriptografadoResultado);
    
    textoDescriptografadoDiv.querySelector("p").textContent = "Texto Descriptografado: " + textoDescriptografadoResultado;
});