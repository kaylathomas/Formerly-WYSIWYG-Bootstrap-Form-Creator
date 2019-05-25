let formCount = 4

//-----------------------------------------
//          ADD A FORM FIELD
//-----------------------------------------

function changeFieldNumber() {
    let fieldNumberInput = document.getElementById("inputFieldNumber").value
    document.getElementById("inputFieldRange").value = fieldNumberInput
}

function changeFieldRange() {
    let fieldNumberRange = document.getElementById("inputFieldRange").value
    document.getElementById("inputFieldNumber").value = fieldNumberRange
}

$("#addField").on("click", function(){
    formCount++

    //ADD ONE FIELD
    function addOneField() {
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
    }

    //ADD TWO FIELDS
    function addTwoFields() {
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
        }
    
    //ADD THREE FIELDS
    function addThreeFields() {
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
        }
    
    //INPUT CONTROL FLOW
    if ($("#inputFieldNumber").val() == 1) {
        addOneField()
    } else if ($("#inputFieldNumber").val() == 2){
        addTwoFields()
    } else if ($("#inputFieldNumber").val() == 3){
        addThreeFields()
    }
})
   
//-----------------------------------------
//              ADD A CHECKBOX
//-----------------------------------------

function changeCheckboxNumber() {
    let checkboxNumberInput = document.getElementById("inputCheckboxNumber").value
    document.getElementById("inputCheckboxRange").value = checkboxNumberInput
}

function changeCheckboxRange() {
    let checkboxNumberRange = document.getElementById("inputCheckboxRange").value
    document.getElementById("inputCheckboxNumber").value = checkboxNumberRange
}

$("#addCheckbox").on("click", function(){
    formCount++

    //ADD ONE CHECKBOX
    function addOneCheckbox(){
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
    }

    //ADD TWO CHECKBOXES
    function addTwoCheckboxes(){
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
    }

    //ADD THREE CHECKBOXES
    function addThreeCheckboxes(){
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
    }

    //CHECKBOX CONTROL FLOW
    if ($("#inputCheckboxNumber").val() == 1) {
        addOneCheckbox()
    } else if ($("#inputCheckboxNumber").val() == 2){
        addTwoCheckboxes()
    } else if ($("#inputCheckboxNumber").val() == 3){
        addThreeCheckboxes()
    }
})


//-----------------------------------------------
//              ADD A RADIO BUTTON
//-----------------------------------------------

function changeRadioNumber() {
    let radioNumberInput = document.getElementById("inputRadioNumber").value
    document.getElementById("inputRadioRange").value = radioNumberInput
}

function changeRadioRange() {
    let radioNumberRange = document.getElementById("inputRadioRange").value
    document.getElementById("inputRadioNumber").value = radioNumberRange
}

$("#addRadio").on("click", function(){
    formCount++

    //ADD ONE RADIO BUTTON
    function addOneRadio(){
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
    }

    //ADD TWO RADIO BUTTONS
    function addTwoRadios(){
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
    }

    //ADD THREE RADIO BUTTONS
    function addThreeRadios(){
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
    }

    //CHECKBOX CONTROL FLOW
    if ($("#inputRadioNumber").val() == 1) {
        addOneRadio()
    } else if ($("#inputRadioNumber").val() == 2){
        addTwoRadios()
    } else if ($("#inputRadioNumber").val() == 3){
        addThreeRadios()
    }
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
