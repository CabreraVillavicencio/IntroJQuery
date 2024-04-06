/* Funciones JQuery*/
$(document).ready(function(){
    /*evento click*/
    $(".boton").click(function(){
        $(".cuadro").animate({top:"500px"})
        $(".cuadro").animate({left:"1200px"})
        $(".cuadro").animate({top:"0"})
        $(".cuadro").animate({left:"0"})
    })
    /*efecto Toggle*/
})
$(".most").click(function(){
    $(".cuadro").toggle()
})