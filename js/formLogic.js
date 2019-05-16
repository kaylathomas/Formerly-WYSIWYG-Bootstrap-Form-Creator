$( document ).ready(function() {

    let formCount = 2

//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------
    $("#addField").click(function() {
        formCount++
        $("#thisForm").append(`
        <div id="formInput${formCount}">
            <div class="form-group">
                <input type="text" class="form-control form-control-border" id="InputLabel${formCount}" value="Form Label ${formCount}">
            </div>
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
            formCount--
            $(this).parent().parent().remove()
        })
    })
});
