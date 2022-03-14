clase habitacion
	constructor(nombre, importe, detalle, cantidad){	
		this.nombre = nombre;
		this.importe= importe;
		this.detalle;
		this.cantidad;
		this.disponible.true;
	}

sumarUtilidad() {
	return this.importe * 1.21;
	}

var arrayhabitacion = [];
do {
	var comprobacion = promp("Ingrese Tipo Habitacion o Fin para Terminar");
	if comprobacion==="fin" ||  comprobacion==="FIN" ){
		break;
	}else{
	nombreP = comprobacion;
	var importeP = prompt ("Ingrese el importe del habitacion : ");
	var detalleP = prompt ("Ingrese el Detalle  del habitacion : ");
	var cantidadP = prompt ("Ingrese el Cantidad del habitacion : ");
	arrayhabitacion.push(new habitacion(nombreP, importeP, detalleP, cantidadP));
	}
}
while (comprobacion !="fin" ||  comprobacion !="FIN" )

console.log(arrayhabitacion);

for (var habitacion of arrayhabitacion) {
	document.write("nombre: " + habitacion.nombre);
	document.write("Detalle: " + habitacion.detalle);
	document.write("Cantidad: " + habitacion.cantidad);
    document.write("importe: " + habitacion.importe);
    document.write("importe con utilidad     : " + habitacion.sumarUtilidad);
    console.log("nombre: " + habitacion.nombre);
    console.log"Detalle: " + habitacion.detalle);
    console.log("Cantidad: " + habitacion.cantidad);
    console.log("importe con utilidad     : " + habitacion.sumarUtilidad());
}

var pocodisponibilidad = arrayhabitacion.filter(habitacion => habitacion.cantidad <= 2);
console.log("habitacion con poca Disponibilidad");
console.log(pocodisponibilidad)
document.write("lista de habitacion con poca Disponibilidad" );

for (var habitacion of pocoDisponibilidad) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}

var sinDisponibilidad = arrayhabitacion.filter(habitacion => habitacion.cantidad == 0 );
	console.log(sinDisponibilidad);
	document.write("lista de habitacion sin Disponibilidad( cantidad = 0 disponible );

for (var habitacion of sinDisponibilidad) {
		document.write("nombre: " + habitacion.nombre);
		document.write("Detalle: " + habitacion.detalle);
		document.write("Cantidad: " + habitacion.cantidad);
}        

var ingresado = prompt("ingrese habitacion a buscar");
var habIngresado = arrayhabitacion.filter(habitacion => habitacion.nombre.includes(ingresado));
console.log(habIngresado)
document.write("lista de habitacion Buscado" );

for (var habitacion of sinDisponibilidad) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}     


var ordenadosCant = [];
ordenadosCant = arrayhabitacion.map(elemento => elemento);
ordenadosCant.sort(function(a,b){
    return a.cantidad- b.cantidad;
    });
console.log("Ordenados de forma desendente");
console.log(ordenadosCant);
document.write("lista de habitacion ordenados por cantidad")

for (var habitacion of ordenadosCant) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}     

var ordenadosimporte = [];
ordenadosimporte = arrayhabitacion.map(elemento => elemento);
var ordenadosimporte = arrayhabitacion

ordenadosimporte.sort(function(a,b){
    return a.importe - b.importe;
    });
console.log("Ordenados de forma ascendente");
console.log(ordenadosimporte);
document.write("lista de habitacion ordenados por importe")

for (var habitacion of ordenadosimporte) {
    document.write("nombre: " + habitacion.nombre);
    document.write("Detalle: " + habitacion.detalle);
    document.write("Cantidad: " + habitacion.cantidad);
}     
