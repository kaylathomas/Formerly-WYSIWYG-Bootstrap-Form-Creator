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
    })

//-----------------------------------------
//          ADD A DUAL FORM FIELD
//-----------------------------------------
$("#addDual").click(function() {
    formCount++
    $("#thisForm").append(`
        <div id="formInput${formCount}">
            <div class="form-row">
                <div class="col">
                    <label for="emptyFormInput${formCount}" contenteditable="true">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="emptyFormInput${formCount}">
                    </div>
                </div>
                <div class="col">
                    <label for="emptyFormInput${formCount}" contenteditable="true">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="emptyFormInput${formCount}">
                        <button class="input-group-append btn dual-times">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div><!-- END OF FORM INPUT -->
    `)
})