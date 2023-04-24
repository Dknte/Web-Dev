

dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla) /* parseInt es una funcion que transforma string en numero */

if(dineroCofla >= 0.6 && dineroCofla < 1.6 ){
	alert("comprate el helado de agua")
}

else if(dineroCofla >= 1 && dineroCofla < 1.6){
	alert("comprate el helado de crema")
}

else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("comprate el helado de crema")
}

else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert("comprate el helado de crema")
}

else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert("comprate el helado de crema")
}

else {

	alert("lo siento cofla, no tienes dinero")
}

