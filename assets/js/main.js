alert('estoy conectado');

$('#btn').click(function(){
    alert('Correo Enviado correctamente')
});

$('.hover').hover(
    function(){ $(this).css('background-color', 'yellow') },
    function(){ $(this).css('background-color', '') },
)

$('h2').dbclick(function){
    $(this).css('color', 'red');
}