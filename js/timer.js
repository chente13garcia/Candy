var segundos = 0;
var minutos = 0;
var control;
function inicio () {
	control = setInterval(cronometro,1000);

}
function parar () {
	clearInterval(control);
	window.alert("Tiempo agotado, juego terminado");
        $(".panel-score").animate(
        {
         width: "98%"
        },1000
        );
        $("#btn-rei").text("Reiniciar");

	      var tmp = $(".panel-tablero").detach();
        if ($("#btn-rei").text()=="Reiniciar"){
            $("#btn-rei").click(function(){
              location.reload();
						});
        }
}
function reinicio () {
	clearInterval(control);
	segundos = 0;
	minutos = 0;
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = "00";
}
function cronometro () {
	segundos ++;
	Segundos.innerHTML = ":0"+segundos;
	if ((segundos%2)==0){
		$(".main-titulo").css("color","#E8CA06");
	}
	else {
		$(".main-titulo").css("color","#0ebaff");
	}
		if (segundos < 10) {
		segundos = "0"+segundos
	}
/*	if ((segundos == 10)&&(segundos < 20)){
		$(".main-titulo").css("color","#E8CA06");
	}
	if ((segundos == 20)&&(segundos < 30)){
		$(".main-titulo").css("color","#0ebaff");
	}
	if ((segundos == 30)&&(segundos < 40)){
		$(".main-titulo").css("color","#E8CA06");
	}
	if ((segundos == 40)&&(segundos < 50)){
		$(".main-titulo").css("color","#0ebaff");
	}
	if ((segundos == 50)&&(segundos < 59)){
		$(".main-titulo").css("color","#E8CA06");
	}*/
	Segundos.innerHTML = ":"+ segundos;
	if (segundos == 59) {
		segundos = -1;
	}
	if ( segundos == 0 ) {
		minutos++;
		Minutos.innerHTML = "0"+ minutos;
	}
	if ((segundos==00)&&(minutos==02)) {
		parar();
	}
}
