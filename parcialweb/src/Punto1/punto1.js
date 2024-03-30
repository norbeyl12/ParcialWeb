function obtenerNumeros() {
    const numerosTexto = document.getElementById("numeros").value;
    const arrayNumeros = numerosTexto.split(",").map(num => parseInt(num.trim()));
    if (arrayNumeros.some(isNaN)) {
        document.getElementById("resultado").innerText = "Por favor, ingrese números válidos separados por comas.";
        return;
    }

    sumarCuadros(arrayNumeros);
}

function sumarCuadros(arrayNumeros) {
   
    let SumaArray="";
  
    for (let i = 0; i < arrayNumeros.length; i++) {
      
        SumaArray += "+ " + "-".repeat(arrayNumeros[i].toString().length) + " +<br>";
       
        SumaArray += "| " + arrayNumeros[i] + " |<br>";
       
        SumaArray += "+ " + "-".repeat(arrayNumeros[i].toString().length) + " +<br>";
    }

    const sumaTotal = arrayNumeros.reduce((a, b) => a + b, 0);
    SumaArray += "+ " + "=".repeat(sumaTotal.toString().length) + " +<br>";
    SumaArray += "| " + sumaTotal + " |<br>";
    SumaArray += "+ " + "=".repeat(sumaTotal.toString().length ) + " +";

    
    document.getElementById("resultado").innerHTML = SumaArray;
}