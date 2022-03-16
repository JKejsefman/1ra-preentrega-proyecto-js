class habitacion
	constructor(nombre, importe, detalle, cantidad){	
		this.nombre = nombre;
		this.importe= importe;
		this.detalle;
		this.cantidad;
	}

sumarUtilidad() {
	return this.importe * 1.40;
	}

var arrayHabitacion = [];

do {
	var comprobacion = promp("Ingrese Tipo Habitacion o Fin para Terminar");
	if comprobacion==="fin" ||  comprobacion==="FIN" ){
		break;
	}else{
		nombreP = comprobacion;
		var importeP = prompt ("Ingrese el importe del habitacion : ");
		var detalleP = prompt ("Ingrese el Detalle  del habitacion : ");
		var cantidadP = prompt ("Ingrese la Cantidad de plazas habitacion : ");
		arrayHabitacion.push(new habitacion(nombreP, importeP, detalleP, cantidadP));
		}
	}
while (comprobacion !="fin" ||  comprobacion !="FIN" );
	
console.log(arrayHabitacion);

for (var habitacion of arrayhabitacion) {
	document.write("nombre: " + habitacion.nombre);
	document.write("Detalle: " + habitacion.detalle);
	document.write("Cantidad: " + habitacion.cantidad);
    	document.write("importe: " + habitacion.importe);
   	document.write("importe con utilidad     : " + habitacion.sumarUtilidad);

    	console.log("nombre: " + habitacion.nombre);
    	console.log("Detalle: " + habitacion.detalle);
    	console.log("Cantidad: " + habitacion.cantidad);
    	console.log("importe con utilidad     : " + habitacion.sumarUtilidad());
}
// HABITACION CON POCA DISPONIBILIDAD
var pocoDisponibilidad = arrayHabitacion.filter(habitacion => habitacion.cantidad <= 2);
console.log("habitacion con poca Disponibilidad");
console.log(pocoDisponibilidad);
document.write("lista de habitacion con poca Disponibilidad" );

for (var habitacion of pocoDisponibilidad) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
	}

//HABITACION SIN DISPONIBILIDAD
var sinDisponibilidad = arrayHabitacion.filter(habitacion => habitacion.cantidad == 0 );
	console.log(sinDisponibilidad);
	document.write("lista de habitacion sin Disponibilidad");

for (var habitacion of sinDisponibilidad) {
		document.write("nombre: " + habitacion.nombre);
		document.write("Detalle: " + habitacion.detalle);
		document.write("Cantidad: " + habitacion.cantidad);
}        

// BUSQUEDA DE HABITACION
var ingresado = prompt("ingrese habitacion a buscar");
var habIngresado = arrayHabitacion.filter(habitacion => habitacion.nombre.includes(ingresado));
console.log(habIngresado);
document.write("lista de habitacion Buscado" );

for (var habitacion of sinDisponibilidad) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}     

//ODENAMIENTO HABITACION
var ordenadosCant = [];
ordenadosCant = arrayHabitacion.map(elemento => elemento);
ordenadosCant.sort(function(a,b){
    return a.cantidad- b.cantidad;
    });
console.log("Ordenados de forma desendente");
console.log(ordenadosCant);
document.write("lista de habitacion ordenados por cantidad");

for (var habitacion of ordenadosCant) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}     

//ODENADOS POR PRECIO
var ordenadosImporte = [];
ordenadosImporte = arrayHabitacion.map(elemento => elemento);
var ordenadosImporte = arrayHabitacion;

ordenadosImporte.sort(function(a,b){
    return a.importe - b.importe;
    });
console.log("Ordenados de forma ascendente");
console.log(ordenadosImporte);
document.write("lista de habitacion ordenados por importe")

for (var habitacion of ordenadosImporte) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}     
