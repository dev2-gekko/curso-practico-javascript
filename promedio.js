function onClickCalcularMedia() {
    
    // Se captura los datos del html y se guardan los valores dentro de una variable
    const inputLista = document.getElementById("inputListaMedia");

    // Al ser un String los valores capturados, se procede a convertir el formato a Number 
    const inputListaValue = inputLista.value;

    //se transforma el formato a array
    let arrayMedia = Array.from(inputListaValue.split(","), Number);

    //Usando el metodo reduce enseñado:
    const sumaLista = arrayMedia.reduce((counter = 0, item) => counter + item);
    
    //sinonimo de lo anterior, pero mas largo es: 
    //const sumalista = arrayMedia.reduce(
    //    function (counter=0, item) {
    //         return counter + item;

    const media = sumaLista/arrayMedia.length;

    const resultadoMedia = document.getElementById("resultadoMedia")
    resultadoMedia.innerText = 'la media es ' + media;
}