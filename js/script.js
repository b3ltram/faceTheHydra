// cartas contendra las cartas con el formato NumeroPalo
// 10o -> 10 de oros
// 3c  -> 3 de copas
let cartas=new Array();
// palos es un array clave:valor que contiene los palos
const palos={"b":"bastos", "e":"espadas", "o":"oros", "c":"copas"}
 
// generamos la baraja de los 4 palos, y 10 cartas en cada palo
// guardamos en el array cartas el numero y palo (10o, 3c, ...)
Object.keys(palos).forEach(function(value) {
	for(var i=1;i<=10;i++)
	{
		cartas.push(i+value);
	}
});
 
// mezclamos las cartas moviendo cada una de ellas a una posición aleatoria
for (i=0;i<40;i++)
{
	posicion1=parseInt(Math.random()*40);
	tmp=cartas[i];
	cartas[i]=cartas[posicion1];
	cartas[posicion1]=tmp;
}
 
// mostramos las cartas
let listado=document.getElementById("listado");
carta="<div class='fila'>";
i=0;
cartas.forEach(function(value){
	if(i++==10)
	{
		carta=carta+"</div><div class='fila'>";
		i=1;
	}
	carta=carta+"<div>";
		carta=carta+value.substring(0,value.length-1)+"<br>";
		carta=carta+"<span>"+palos[value.substring(value.length-1,value.length)]+"</span>";
	carta=carta+"</div>";
});
listado.innerHTML=listado.innerHTML+carta+"</div>";