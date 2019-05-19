//-----------------------------------------------------
//          DELETE SINGLE FORMS, CHECKBOXES, & RADIOS
//-----------------------------------------------------
$(".delete-button").click(function(event){
    event.preventDefault()
    $(this).parent().parent().remove()
})

//-----------------------------------------------------
//          DELETE DUAL FORMS, CHECKBOXES, & RADIOS
//-----------------------------------------------------
$(".dual-times").click(function(event){
    event.preventDefault()
    $(this).parent().parent().parent().parent().remove()
})

//-------------------------------------------------------
//          DELETE TRIPLE CHECKBOXES, & RADIOS
//-------------------------------------------------------
$(".delete-multi").click(function(event){
    event.preventDefault()
    $(this).parent().parent().parent().parent().remove()
})
