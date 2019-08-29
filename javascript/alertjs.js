/*se utiliza un alert antes de dirigirse al vinculo*/
function leerMas(){
	alert("Aceptar para poder dirigirse a un articulo de cuidado de mascotas")
}


/*al momento de hacer clic en el titulo se cambia los colores del titulo y su parrafo*/
document.getElementById("titulo1").onclick = function() {cambiaColor()};
document.getElementById("parrafo1").onclick = function() {cambiaColor()};

function cambiaColor(){
	document.getElementById("titulo1").style.color = "#1bb483"
	document.getElementById("parrafo1").style.color = "#1d96ac"
}

/*se utilizo el console para poder mostrar en consola cuando el usuario da un click
sobre el footer*/

document.getElementById("pie").onclick = function() {consola()};

function consola(){
	console.log("El usario esta en el footer");
}


/*esta funcion de javaScript muestra un cuadro al momento de hacer click sobre una mascota,
esto permite que el usuario pueda modificar el nombre de la mascota que se muestra en pantalla*/

function nombre1(){
	var mascota = prompt("Ingrese nombre para mascota:", "...nombre...");
  		if (mascota != null) {
    		document.getElementById("nombre1").innerHTML = mascota;
  		}
}

function nombre2(){
	var mascota = prompt("Ingrese nombre para mascota:", "...nombre...");
  		if (mascota != null) {
    		document.getElementById("nombre2").innerHTML = mascota;
  		}
}

function nombre3(){
	var mascota = prompt("Ingrese nombre para mascota:", "...nombre...");
  		if (mascota != null) {
    		document.getElementById("nombre3").innerHTML = mascota;
  		}
}

function nombre4(){
	var mascota = prompt("Ingrese nombre para mascota:", "...nombre...");
  		if (mascota != null) {
    		document.getElementById("nombre4").innerHTML = mascota;
  		}
}