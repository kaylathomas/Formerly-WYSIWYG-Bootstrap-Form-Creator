//-----------------------------------------
//          FORMAT LIVE VIEW
//-----------------------------------------
$("#getHTML").click(function(event){ 
    $("#hiddenDiv").append($("#yourForm").html())
    $("#hiddenDiv button").remove()
    $("#hiddenDiv label").removeAttr("contenteditable")
    $("#hiddenDiv h3").removeAttr("contenteditable")
    $('div .formInput').each(function(){ // For each element
        if( $(this).text().trim() === '' )
            $(this).remove(); // if it is empty, it removes it
    });
//Adds a submit button to the end of the form.
//Button color depends on color selected for form.
    if ($("#buttonPrimary").hasClass("active") || $("#buttonSecondary").hasClass("active") || $("#buttonSuccess").hasClass("active") || $("#buttonDanger").hasClass("active") || $("#buttonWarning").hasClass("active") || $("#buttonInfo").hasClass("active") || $("#buttonDark").hasClass("active")) {
        $("#hiddenDiv #thisForm").append('<button type="button" class="btn btn-outline-light float-right">Submit</button>')
    } else {
        $("#hiddenDiv #thisForm").append('<button type="button" class="btn btn-outline-dark float-right">Submit</button>')
    }
    $("#liveCode").val($("#hiddenDiv").html())
//Clears the hidden div
    $("#hiddenDiv").empty()
})

//-----------------------------------------
//            CHANGE FORM COLOR
//-----------------------------------------
$("#buttonPrimary").click(function(event){
    $("#cardBody").toggleClass("bg-primary")
    $("#cardBody").toggleClass("text-white")
    $("#buttonPrimary").toggleClass("active")
})

$("#buttonSecondary").click(function(event){
    $("#cardBody").toggleClass("bg-secondary")
    $("#cardBody").toggleClass("text-white")
    $("#buttonSecondary").toggleClass("active")
})

$("#buttonSuccess").click(function(event){
    $("#cardBody").toggleClass("bg-success")
    $("#cardBody").toggleClass("text-white")
    $("#buttonSuccess").toggleClass("active")
})

$("#buttonDanger").click(function(event){
    $("#cardBody").toggleClass("bg-danger")
    $("#cardBody").toggleClass("text-white")
    $("#buttonDanger").toggleClass("active")
})

$("#buttonWarning").click(function(event){
    $("#cardBody").toggleClass("bg-warning")
    $("#cardBody").toggleClass("text-white")
    $("#buttonWarning").toggleClass("active")
})

$("#buttonInfo").click(function(event){
    $("#cardBody").toggleClass("bg-info")
    $("#cardBody").toggleClass("text-white")
    $("#buttonInfo").toggleClass("active")
})
$("#buttonLight").click(function(event){
    $("#cardBody").toggleClass("bg-light")
    $("#buttonLight").toggleClass("active")
})

$("#buttonDark").click(function(event){
    $("#cardBody").toggleClass("bg-dark")
    $("#cardBody").toggleClass("text-white")
    $("#buttonDark").toggleClass("active")
})