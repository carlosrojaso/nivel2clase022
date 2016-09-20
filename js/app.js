/*
- Debera poder ingresar un dia de la semana
- Debera poder compararlo con todos los dias de la semana
- Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
- En caso de cnontrar el dia utilizar la sentencia break y terminar el for
*/

var dia = prompt("Ingresa un dia de la semana", "Lunes").toLowerCase();
var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(i in semana){
  
if( dia == "lunes"){
	document.write("dia habil");
       break;
}
else if(dia == "martes"){
	document.write("dia habil");
       break;
}
else if(dia == "miercoles"){
	document.write("dia habil");
       break;

}
else if(dia == "jueves"){
	document.write("dia habil");
       break;
}
else if(dia == "viernes"){
	document.write("dia habil");
       break;
}
else if(dia == "sabado"){
	document.write("es un dia de fin de semana");
       break;
}
else if(dia == "domingo"){
	document.write("es un dia de fin de semana");
       break;
}	
console.log(semana[i]);
}