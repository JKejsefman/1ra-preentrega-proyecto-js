
for (var habitacion of sinStock) {
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
