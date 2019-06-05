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
$("#buttonPrimary").click(function(event){
    //Make any other selected color classes inactive
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-primary")
    $("#cardBody").toggleClass("text-white")
    $("#buttonPrimary").toggleClass("active")
})

$("#buttonSecondary").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-secondary")
    $("#cardBody").toggleClass("text-white")
    $("#buttonSecondary").toggleClass("active")
})

$("#buttonSuccess").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-success")
    $("#cardBody").toggleClass("text-white")
    $("#buttonSuccess").toggleClass("active")
})

$("#buttonDanger").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-danger")
    $("#cardBody").toggleClass("text-white")
    $("#buttonDanger").toggleClass("active")
})

$("#buttonWarning").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-warning")
    $("#cardBody").toggleClass("text-white")
    $("#buttonWarning").toggleClass("active")
})

$("#buttonInfo").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-info")
    $("#cardBody").toggleClass("text-white")
    $("#buttonInfo").toggleClass("active")
})

$("#buttonLight").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")

    $("#cardBody").toggleClass("bg-light")
    $("#buttonLight").toggleClass("active")
})

$("#buttonDark").click(function(event){
    $(".color-button").removeClass("active")
    $("#cardBody").removeClass("bg-secondary bg-success bg-danger bg-warning bg-info bg-light bg-dark text-white")
    
    $("#cardBody").toggleClass("bg-dark")
    $("#cardBody").toggleClass("text-white")
    $("#buttonDark").toggleClass("active")
})

//CUSTOM FORM COLOR CHANGE:
$("#customFormBackground").change(function(){
    var colorValue = $(this).val();
    $("thisForm").css("background-color", `${colorValue}`);
});

//-----------------------------------------
//          DRAG & DROP FEATURE
//-----------------------------------------

