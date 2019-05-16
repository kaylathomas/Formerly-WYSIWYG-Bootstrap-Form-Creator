$( document ).ready(function() {

    let formCount = 2

//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------
    $("#addField").click(function() {
        formCount++
        $("#thisForm").append(`
            <div class="form-group">
                <label for="formInput${formCount}" id="inputLabel${formCount}" contenteditable="true">Form Label ${formCount}</label> <i class="fa fa-trash mx-2" aria-hidden="true" id="trashcan"></i>
                <input type="text" class="form-control" id="formInput${formCount}">
            </div>
        `)
        
        //-----------------------------------------
        //          DELETE A FORM FIELD
        //-----------------------------------------
        $(".fa-trash").click(function(event){
            event.preventDefault()
            formCount--
            $(this).parent().remove()
        })
    })
});
