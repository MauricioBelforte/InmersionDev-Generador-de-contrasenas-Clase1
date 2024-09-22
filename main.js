
/// Generador de contraseñas


//- Utilizamos el objeto document, esto representa toda la estructura de la pagina

// Traemos el elemento que esta en el input con id cantidad
let cantidad = document.getElementById("cantidad")

// Traemos el elemento que esta en el boton con id generar
let boton = document.getElementById("generar")

// Traemos el elemento que esta en el input con id contrasena
let inputContrasena = document.getElementById("contrasena")

// Traemos el elemento que esta en el boton con id limpiar
let botonLimpiar = document.getElementById("limpiar")

let textoFuerza = document.getElementById("textoFuerza")

let textoSugerencias = document.getElementById("sugerencia")

const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';



function generar() {

    // Pasamos el valor cantidad.value que es de tipo string a un numerico
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 6) {
        //- Vamos a validar que el maximo de caracteres sea 6
        alert("La cantidad de caracteres de la contraseña debe ser mayor a 5")
    } else {

        // Creamos una variable vacia para ir concatenando los caracteres
        let contrasena = ''
        for (let i = 0; i < numeroDigitado; i++) {

            //- Necesitamos una operacion que genere un caracter aleatorio
            //- Math.random() genera un numero entre 0 y 1
            //- Lo multiplicamos por la longitud de la cadena para que el numero sea entero, pero ademas para que ese numero aleatorio no sobrepase la longitud de la cadena de caracteres
            //- Math.floor() para redondear el numero a un entero
            //- Ponemos todo dentro de cadenaDeCaracteres[], ya que es la posicion para obtener un caracter

            let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];

            contrasena = contrasena + caracterAleatorio;
            // Para ver los caracteres en la consola
            console.log(caracterAleatorio);

        }
        // Para ver la contraseña completa en la consola
        console.log("Contraseña generada", contrasena);


        //- Lo colocamos dentro del input de la contraseña
        inputContrasena.value = contrasena;

        let resultado = validarContrasena(contrasena);

        textoFuerza.innerHTML = `<p>${resultado.fuerza}</p>`;
        if (resultado.sugerencias.length > 0) {

            textoSugerencias.innerHTML = `<p>Sugerencias para mejorar la contraseña:</p>`;
            resultado.sugerencias.forEach(sugerencia => {
                textoSugerencias.innerHTML = textoSugerencias.innerHTML + `<p>- ${sugerencia}</p>`

            });
        } else {
            textoSugerencias.innerHTML = '';
        }
    }


}

function limpiar() {

    cantidad.value = '';
    inputContrasena.value = '';
    textoFuerza.innerHTML = '';
    textoSugerencias.innerHTML = '';

}






function contieneMayuscula(contrasena) {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const arrayDeMayusculas = mayusculas.split('');


    const tieneMayuscula = arrayDeMayusculas.some(caracter => contrasena.includes(caracter))

    console.log(tieneMayuscula);
    return tieneMayuscula;
}

function contieneMinuscula(contrasena) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const arrayDeMinusculas = minusculas.split('');


    const tieneMinuscula = arrayDeMinusculas.some(caracter => contrasena.includes(caracter))

    console.log(tieneMinuscula);
    return tieneMinuscula;
}

function contieneUnNumero(contrasena) {
    const numeros = "0123456789";
    const arrayDeNumeros = numeros.split('');


    const tieneNumeros = arrayDeNumeros.some(caracter => contrasena.includes(caracter))

    console.log(tieneNumeros);
    return tieneNumeros;
}

function contieneUnSimbolo(contrasena) {
    const simbolos = "!@#$%^&*(),.?\":{}|<>";
    const arrayDeSimbolos = simbolos.split('');


    const tieneSimbolos = arrayDeSimbolos.some(caracter => contrasena.includes(caracter))

    console.log(tieneSimbolos);
    return tieneSimbolos;
}














function validarContrasena(contrasena) {
    let fuerza = 0;
    let sugerencias = [];

    if (contieneMinuscula(contrasena)) {

        fuerza++;
    } else {
        sugerencias.push("Agregar al menos una letra minúscula.");
    }

    if (contieneMayuscula(contrasena)) {

        fuerza++;
    } else {
        sugerencias.push("Agregar al menos una letra mayúscula.");
    }

    if (contieneUnNumero(contrasena)) {

        fuerza++;
    } else {
        sugerencias.push("Agregar al menos un número.");
    }

    if (contieneUnSimbolo(contrasena)) {

        fuerza++;
    } else {
        sugerencias.push("Agregar al menos un símbolo.");
    }

    if (contrasena.length >= 12) {
        fuerza++;
    } else {
        sugerencias.push("Puede mejorar la fortaleza con 12 caracteres o más");
    }

    let etiquetaFuerza;
    if (fuerza === 1) {
        etiquetaFuerza = "La contraseña es: Muy débil 🟥⬜️⬜️⬜️⬜️";
    } else if (fuerza === 2) {
        etiquetaFuerza = "La contraseña es: Débil 🟧🟧⬜️⬜️⬜️";
    } else if (fuerza === 3) {
        etiquetaFuerza = "La contraseña es: Moderada 🟨🟨🟨⬜️⬜️";
    } else if (fuerza === 4) {
        etiquetaFuerza = "La contraseña es: Fuerte 🟩🟩🟩🟩⬜️";
    } else if (fuerza === 5 && contrasena.length >= 12) {
        etiquetaFuerza = "La contraseña es: Muy fuerte 🟩🟩🟩🟩🟩";
    } else {
        etiquetaFuerza = "Debe colocar una cantidad mayor a 5";
    }

    return {
        fuerza: etiquetaFuerza,
        sugerencias: sugerencias
    };
}

// Ejemplo de uso

/* let resultado = validarContrasena(contrasena); */


