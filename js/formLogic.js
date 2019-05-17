let formCount = 2

//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------
    $("#addField").click(function() {
        formCount++
        $("#thisForm").append(`
            <div id="formInput${formCount}">
                <label for="emptyFormInput${formCount}" contenteditable="true">Form Label ${formCount}</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="emptyFormInput${formCount}">
                    <button class="input-group-append btn delete-button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
             </div>
        `)

        //-----------------------------------------
        //          DELETE A FORM FIELD
        //-----------------------------------------
        $(".delete-button").click(function(event){
            event.preventDefault()
            $(this).parent().parent().remove()
        })
        


//-----------------------------------------
//          FORMAT LIVE VIEW
//-----------------------------------------
        $("#getHTML").click(function(event){ 
            $("#hiddenDiv").append($("#yourForm").html())
            $("#hiddenDiv button").remove()
            $("#hiddenDiv label").removeAttr("contenteditable")
            $("#hiddenDiv h3").removeAttr("contenteditable")
        //Adds a submit button to the end of the form.
            $("#hiddenDiv #thisForm").append('<button type="submit" class="btn btn-primary float-right">Submit</button>')
            $("#liveCode").val($("#hiddenDiv").html())
        //Clears the hidden div
            $("#hiddenDiv").empty()
        })
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
