
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


/* alert("estoy conectado"); */


$("#btn").click(function(){
    alert("Correo Enviado correctamente")
});

$(".hover").hover(
    function(){ $(this).css("background-color", "yellow") },
    function(){ $(this).css("background-color", "") },
)

/*
$('btntoggle').click(fuction(){
    $('#contenido').toggle()
})

/*
$('h2').dbclick(function){
    $(this).css('color', 'red');
}
    */