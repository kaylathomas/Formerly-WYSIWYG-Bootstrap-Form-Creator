let formCount = 4


//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------
    $("#addField").click(function() {
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable= class="font-weight-bold">Form Label ${formCount}</label>
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
        <div class="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <label for="emptyFormInput${formCount}" contenteditable= class="font-weight-bold">Form Label ${formCount}</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}">
                        </div>
                    </div>
                    <div class="col">
                        <label for="emptyFormInput${formCount}" contenteditable= class="font-weight-bold">Form Label ${formCount}</label>
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
        <div class="formInput">
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
        <div class="formInput">
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
        <div class="formInput">
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

//-----------------------------------------------
//              ADD A RADIO BUTTON
//-----------------------------------------------
$("#addRadio").click(function() {
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label> <button class="btn delete-button"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    `)
})

//-------------------------------------------------
//              ADD DUAL RADIO BUTTONS
//-------------------------------------------------
$("#dualRadio").click(function() {
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label><button class="btn dual-times float-right"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    `)
})

//---------------------------------------------
//          ADD TRIPLE RADIO BUTTONS
//---------------------------------------------
$("#tripleRadio").click(function() {
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label><button class="btn delete-multi float-right"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    `)
})

//------------------------------------
//          ADD SELECT FIELD
//------------------------------------

$("#selectField").click(function() {
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-group">
                    <label for="exampleFormControlSelect${formCount}" contenteditable="true" class="font-weight-bold">Example select ${formCount}</label><button class="btn dual-times float-right"><i class="fas fa-times"></i></button>
                        <select class="form-control" id="exampleFormControlSelect${formCount}">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                </div>
            </span>
        </div>
    `)
})

//---------------------------------------------
//          ADD MULTIPLE SELECT FIELD
//---------------------------------------------

$("#multipleSelectField").click(function() {
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-group">
                    <label for="exampleFormControlSelect${formCount}" contenteditable="true" class="font-weight-bold">Example multiple select ${formCount}</label><button class="btn dual-times float-right"><i class="fas fa-times"></i></button>
                        <select multiple class="form-control" id="exampleFormControlSelect${formCount}">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                </div>
            </span>
        </div>
    `)
})

//---------------------------------
//          ADD TEXTAREA
//---------------------------------

$("#addTextArea").click(function() {
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-group">
                    <label for="exampleFormControlTextarea${formCount}" contenteditable="true" class="font-weight-bold">Example textarea ${formCount}</label><button class="btn dual-times float-right"><i class="fas fa-times"></i></button>
                    <textarea class="form-control" id="exampleFormControlTextarea${formCount}" rows="3"></textarea>
                </div>
            </span>
        </div>
    `)
})