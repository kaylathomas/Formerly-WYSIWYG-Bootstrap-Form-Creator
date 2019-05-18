//--------------------------------------------
//          DELETE A SINGLE FORM FIELD
//--------------------------------------------
$(".delete-button").click(function(event){
    event.preventDefault()
    $(this).parent().parent().remove()
})

//--------------------------------------------
//          DELETE A DUAL FORM FIELD
//--------------------------------------------
$(".dual-times").click(function(event){
    event.preventDefault()
    $(this).parent().parent().parent().parent().remove()
})
