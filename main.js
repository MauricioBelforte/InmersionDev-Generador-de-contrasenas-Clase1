
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
    }




}

function limpiar() {

    cantidad.value = '';
    inputContrasena.value = '';

}









