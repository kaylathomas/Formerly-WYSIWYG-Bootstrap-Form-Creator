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
                        <i class="fa fa-trash mx-2" aria-hidden="true"></i>
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
            let formContent = $("yourForm").html()
            $("#hiddenDiv").append(formContent)
            $("#liveCode").val($("#yourForm").html())
            $()
        })
    })
    // for(var i = 0; i < rooms.results.length; i++){
});
