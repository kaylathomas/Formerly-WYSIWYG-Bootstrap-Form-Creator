let formCount = 4

//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------
    $("#addField").click(function() {
        formCount++
        $("#thisForm").append(`
            <div id="formInput">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="emptyFormInput${formCount}">
                        <button class="input-group-append btn delete-button">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </span>
             </div>
        `)
    })

//-----------------------------------------
//          ADD A DUAL FORM FIELD
//-----------------------------------------
$("#addDual").click(function() {
    formCount++
    $("#thisForm").append(`
        <div id="formInput">
            <span>
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
            </span>
        </div>
    `)
})

//-----------------------------------------
//              ADD A CHECKBOX
//-----------------------------------------
$("#addCheckbox").click(function() {
    formCount++
    $("#thisForm").append(`
        <div id="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label> <button class="btn delete-button"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    `)
})

//-----------------------------------------
//          ADD A DUAL CHECKBOX
//-----------------------------------------
$("#dualCheckboxes").click(function() {
    formCount++
    $("#thisForm").append(`
        <div id="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label><button class="btn dual-times float-right"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    `)
})

//-----------------------------------------
//          ADD A TRIPLE CHECKBOX
//-----------------------------------------
$("#tripleCheckboxes").click(function() {
    formCount++
    $("#thisForm").append(`
        <div id="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label><button class="btn delete-multi float-right"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    `)
})



// $("#addDual").click(function() {
//     formCount++
//     $("#thisForm").append(`
    
//     `)
// })