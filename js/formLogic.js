$( document ).ready(function() {

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
                    <button class="input-group-append btn btn-danger">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
             </div>
        `)

        //-----------------------------------------
        //          DELETE A FORM FIELD
        //-----------------------------------------
        $(".btn-danger").click(function(event){
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
            $("#liveCode").val($("#hiddenDiv").html())
            $("#hiddenDiv").empty()
        })
    })
    // for(var i = 0; i < rooms.results.length; i++){
});
