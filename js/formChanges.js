//-----------------------------------------
//          FORMAT LIVE VIEW
//-----------------------------------------

$("#getHTML").on("click", function (event) {
    event.preventDefault(event)
//Removes all delete buttons and contenteditable functionality
    $("#hiddenDiv").append($("#yourForm").html())
    $("#hiddenDiv button").remove()
    $("#hiddenDiv label").removeAttr("contenteditable")
    $("#hiddenDiv h3").removeAttr("contenteditable")
    $("#hiddenDiv small").remove()
    $("#hiddenDiv br").remove()
    $("#hiddenDiv .fa-pen").remove()
    $("#hiddenDiv .input-group").addClass("mb-2")
    $("#hiddenDiv .formInput").removeClass("my-2")
    $("#hiddenDiv .move-button").remove()
//Adds a submit button to the end of the form.
//Button color depends on color selected for form.
    if ($("#buttonPrimary").hasClass("active") || $("#buttonSecondary").hasClass("active") || $("#buttonSuccess").hasClass("active") || $("#buttonDanger").hasClass("active") || $("#buttonWarning").hasClass("active") || $("#buttonInfo").hasClass("active") || $("#buttonDark").hasClass("active")) {
        $("#hiddenDiv #thisForm").append('<button type="button" class="btn btn-outline-light float-right">Submit</button>')
    } else {
        $("#hiddenDiv #thisForm").append('<button type="button" class="btn btn-outline-dark float-right">Submit</button>')
    }
    $("#liveCode").val($("#hiddenDiv").html())
//Regex to delete all blank lines
    let liveCodeValue = $('#liveCode').val();
    let newVal = liveCodeValue.replace(/^\s*[\r\n]/gm, '');
    $('#liveCode').val(newVal)
    $('.preview-container').html(newVal)
    //Clears the hidden div
    $("#hiddenDiv").empty()
})


//-----------------------------------------
//              LABELS UTILITY
//-----------------------------------------
//-----------------------
//      FONT WEIGHT
//-----------------------
    $("#fontWeightLightBtn").click(function(){
        $(".font-weight-button").removeClass("active")
        $(this).addClass("active")
        $("label").removeClass("font-weight-bold")
        $("label").addClass("font-weight-light")
    })

    $("#fontWeightNormalBtn").click(function(){
        $(".font-weight-button").removeClass("active")
        $(this).addClass("active")
        $("label").removeClass("font-weight-bold")
        $("label").removeClass("font-weight-light")
    })

    $("#fontWeightBoldBtn").click(function(){
        $(".font-weight-button").removeClass("active")
        $(this).addClass("active")
        $("label").addClass("font-weight-bold")
        $("label").removeClass("font-weight-light")
    })

//-----------------------
//      TEXT ALIGN
//-----------------------
    
$("#textAlignLeftBtn").click(function(){
    $(".text-align-button").removeClass("active")
    $(this).addClass("active")
    // $("label").removeClass("mx-auto")
    $("label").removeClass("float-right")
    $("label").addClass("float-left")
})

// $("#textAlignCenterBtn").click(function(){
//     $(".text-align-button").removeClass("active")
//     $(this).addClass("active")
//     $("label").removeClass("float-left")
//     $("label").removeClass("float-right")
//     $("label").addClass("mx-auto")
// })

$("#textAlignRightBtn").click(function(){
    $(".text-align-button").removeClass("active")
    $(this).addClass("active")
    $("label").removeClass("float-left")
    // $("label").removeClass("mx-auto")
    $("label").addClass("float-right")
})

//-----------------------------------------
//            CHANGE FORM COLOR
//-----------------------------------------
//------------------
//  DEFAULT BUTTON
//------------------
$("#buttonDefault").click(function(event){
    //Make any other selected color classes inactive
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-primary bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    $("#buttonDefault").addClass("active")
})

//------------------
//  PRIMARY BUTTON
//------------------
$("#buttonPrimary").click(function(event){
    //Make any other selected color classes inactive
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-primary")
    $("#cardBody").addClass("text-white")
    $("#buttonPrimary").addClass("active")
})

//------------------
// SECONDARY BUTTON
//------------------
$("#buttonSecondary").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-secondary")
    $("#cardBody").addClass("text-white")
    $("#buttonSecondary").addClass("active")
})

//------------------
//  SUCCESS BUTTON
//------------------
$("#buttonSuccess").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-success")
    $("#cardBody").addClass("text-white")
    $("#buttonSuccess").addClass("active")
})

//-------------------
//   DANGER BUTTON
//-------------------
$("#buttonDanger").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-danger")
    $("#cardBody").addClass("text-white")
    $("#buttonDanger").addClass("active")
})

//------------------
// WARNINING BUTTON
//------------------
$("#buttonWarning").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-warning")
    $("#cardBody").addClass("text-white")
    $("#buttonWarning").addClass("active")
})

//-------------------
//    INFO BUTTON
//-------------------
$("#buttonInfo").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-info")
    $("#cardBody").addClass("text-white")
    $("#buttonInfo").addClass("active")
})

//------------------
//   LIGHT BUTTON
//------------------
$("#buttonLight").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").addClass("bg-light")
    $("#buttonLight").addClass("active")
})

//-------------------
//    DARK BUTTON
//-------------------
$("#buttonDark").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
    $("#cardBody").addClass("bg-dark")
    $("#cardBody").addClass("text-white")
    $("#buttonDark").addClass("active")
})

//CUSTOM FORM COLOR CHANGE:
// $("#customFormBackground").change(function(){
//     var colorValue = $(this).val();
//     $("thisForm").css("background-color", `${colorValue}`);
// });



