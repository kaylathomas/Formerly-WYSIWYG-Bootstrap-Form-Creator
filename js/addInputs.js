let formCount = 4


//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------
    $("#addField").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput">
                <span>
                    <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="emptyFormInput${formCount}">
                        <button type="button" class="input-group-append btn delete-button">
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
$("#addDual").on("click", function(){
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-row">
                    <div class="col">
                        <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}">
                        </div>
                    </div>
                    <div class="col">
                        <label for="emptyFormInput${formCount}" contenteditable="true" class="font-weight-bold">Form Label ${formCount}</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}">
                            <button type="button" class="input-group-append btn delete-button">
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
$("#addCheckbox").on("click", function(){
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
                            </label> <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
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
$("#dualCheckboxes").on("click", function(){
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
                            </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
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
$("#tripleCheckboxes").on("click", function(){
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
                            </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
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
$("#addRadio").on("click", function(){
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
                            </label> <button type="button" class="btn delete-button"><i class="fas fa-times"></i></button>
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
$("#dualRadio").on("click", function(){
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
                            </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
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
$("#tripleRadio").on("click", function(){
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
                            </label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
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

$("#selectField").on("click", function(){
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-group">
                    <label for="exampleFormControlSelect${formCount}" contenteditable="true" class="font-weight-bold">Example select ${formCount}</label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
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

$("#multipleSelectField").on("click", function(){
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-group">
                    <label for="exampleFormControlSelect${formCount}" contenteditable="true" class="font-weight-bold">Example multiple select ${formCount}</label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
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

$("#addTextArea").on("click", function(){
    formCount++
    $("#thisForm").append(`
        <div class="formInput">
            <span>
                <div class="form-group">
                    <label for="exampleFormControlTextarea${formCount}" contenteditable="true" class="font-weight-bold">Example textarea ${formCount}</label><button type="button" class="btn delete-button float-right"><i class="fas fa-times"></i></button>
                    <textarea class="form-control" id="exampleFormControlTextarea${formCount}" rows="3"></textarea>
                </div>
            </span>
        </div>
    `)
})

//----------------------------------
//          DELETE BUTTON
//----------------------------------

$("body").delegate('.delete-button','click', function(event){
    event.preventDefault();
    $(this).closest('.formInput').remove();
});
