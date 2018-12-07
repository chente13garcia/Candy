$(document).ready(function(){
  $("#btn-rei").click(function(){
    $(this).text("Esperando");
    inicio();
  });
  for (var f=0;f<=7; f++){
    for (var i=0;i<=7;i++){
      num=Math.floor((Math.random()*4)+1);
      $(".col-"+i).append("<img class='elemento' src='image/"+num+".png'>");
    }
  }
  mueveDulces();
  eliminar();
});

//funcion para cambiar dulces drag and drop
function mueveDulces() {
    var dulce1
    var dulce2
    var dulceSrc1
    var dulceSrc2
    var movTotal = 0
    $("img").draggable({
      revert: "valid",
      containment: ".panel-tablero",
      start: function (event, ui){
        dulce1 = this
        dulceSrc1 = $(this).attr("src")
      }
    })
    $("img").droppable({
      drop: function (event, ui){
        dulce2 = this
        dulceSrc2 = $(this).attr("src")
        $(dulce2).attr("src",dulceSrc1)
        $(dulce1).attr("src",dulceSrc2)
        movTotal = movTotal + 1
        $("#movimientos-text").html(movTotal)
      }
    })
}
//funcion de busqueda horizontal de dulces
function horizontal(){
  var bh=0;
  for(var j=1;j<8;j++){
    for(var k=1;k<6;k++){
      var res1=$(".col-"+k).children("img:nth-last-child("+j+")").attr("src")
      var res2=$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("src")
      var res3=$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("src")
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null))
      {
        $(".col-"+k).children("img:nth-last-child("+(j)+")").attr("class","elemento activo")
        $(".col-"+(k+1)).children("img:nth-last-child("+(j)+")").attr("class","elemento activo")
        $(".col-"+(k+2)).children("img:nth-last-child("+(j)+")").attr("class","elemento activo")
        bh=1;
      }
    }
  }
  return bh;
}
//Funcion de busqueda vertical de dulces
function vertical(){
  var bv=0;
  for(var l=1;l<6;l++){
    for(var k=1;k<8;k++){
      var res1=$(".col-"+k).children("img:nth-child("+l+")").attr("src")
      var res2=$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("src")
      var res3=$(".col-"+k).children("img:nth-child("+(l+2)+")").attr("src")
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null))
      {
        $(".col-"+k).children("img:nth-child("+(l)+")").attr("class","elemento activo")
        $(".col-"+k).children("img:nth-child("+(l+1)+")").attr("class","elemento activo")
        $(".col-"+k).children("img:nth-child("+(l+2)+")").attr("class","elemento activo")
        bv=1;
      }
    }
  }
  return bv;
}

function eliminar(){
  var h= horizontal();
  var v= vertical();
  $(h,v).remove();
}
