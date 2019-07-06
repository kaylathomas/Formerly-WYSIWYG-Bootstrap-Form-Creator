//= require jquery

let formCount = 4

//----------------------------------
//          DELETE BUTTON
//----------------------------------

$("body").delegate('.delete-button','click', function(event){
    event.preventDefault()
    $(this).closest('.formInput').remove()
    // $(`.${$(this).closest('small').attr("id")}`).remove()
});

//----------------------------------
//        NEW INPUT PRESETS
//----------------------------------
function editAttributesVisible() {
    //Makes "Edit Attributes" visible upon input creation
    // if Developer Mode is active.
    if ($("#simpleEditor").hasClass("active") == true){
        $("#yourForm .edit-attributes").addClass("d-none")
    } else {
        $("#yourForm .edit-attributes").removeClass("d-none")
    }
}

function fontWeightConsistency() {
    //Newly created inputs have same font weight as current inputs
    if ($("#fontWeightLightBtn").hasClass("active") == true){
        $("#yourForm label").addClass("font-weight-light")
    } else if ($("#fontWeightNormalBtn").hasClass("active") == true) {
        $("#yourForm label").addClass("font-weight-normal")
    } else if ($("#fontWeightBoldBtn").hasClass("active") == true){
        $("#yourForm label").addClass("font-weight-bold")
    }
}

//-----------------------------------------
//             ADD A FORM FIELD
//-----------------------------------------

function changeFieldNumber() {
    let fieldNumberInput = document.getElementById("inputFieldNumber").value
    document.getElementById("inputFieldRange").value = fieldNumberInput
}

function changeFieldRange() {
    let fieldNumberRange = document.getElementById("inputFieldRange").value
    document.getElementById("inputFieldNumber").value = fieldNumberRange
}

$("body").delegate('#addField','click', function(event){
// $("#addField").on("click", function(){
    event.preventDefault(event)
    formCount++

    //ADD ONE FIELD
    function addOneField() {
        $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left mr-2"></i> 
                <label for="emptyFormInput${formCount}" contenteditable="true">Form Label ${formCount}</label>
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="emptyFormInput${formCount}">
                    <button type="button" class="input-group-append btn delete-button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>               
            </span>
        </div>
        `)

        editAttributesVisible()
        fontWeightConsistency()

    }

    //ADD TWO FIELDS
    function addTwoFields() {
        $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
                <div class="form-row">
                    <div class="col">
                    <i class="fas fa-arrows-alt move-button float-left mr-2"></i>
                        <label for="emptyFormInput${formCount}a" contenteditable="true">Form Label ${formCount}a</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}a">
                        </div>
                        <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>                       
                    </div>
                    <div class="col">
                        <label for="emptyFormInput${formCount}b" contenteditable="true">Form Label ${formCount}b</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}b">
                            <button type="button" class="input-group-append btn delete-button">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>                       
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()
    }
    
    //ADD THREE FIELDS
    function addThreeFields() {
        $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
                <div class="form-row">
                    <div class="col">
                        <i class="fas fa-arrows-alt move-button float-left mr-2"></i>
                        <label for="emptyFormInput${formCount}a" contenteditable="true">Form Label ${formCount}</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}a">
                        </div>
                        <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <label for="emptyFormInput${formCount}b" contenteditable="true">Form Label ${formCount}</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}b">
                        </div>
                        <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <label for="emptyFormInput${formCount}c" contenteditable="true">Form Label ${formCount}</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="emptyFormInput${formCount}c">
                            <button type="button" class="input-group-append btn delete-button">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

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
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left"></i> 
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}">
                            <label class="form-check-label" for="defaultCheck${formCount}" contenteditable="true">
                                Default checkbox ${formCount}
                            </label>
                            <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

    }

    //ADD TWO CHECKBOXES
    function addTwoCheckboxes(){
    $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left"></i> 
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}a">
                            <label class="form-check-label" for="defaultCheck${formCount}a" contenteditable="true">
                                Default checkbox ${formCount}a
                            </label>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}b">
                            <label class="form-check-label" for="defaultCheck${formCount}b" contenteditable="true">
                                Default checkbox ${formCount}b
                            </label>
                            <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

    }

    //ADD THREE CHECKBOXES
    function addThreeCheckboxes(){
    $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left"></i> 
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}a">
                            <label class="form-check-label" for="defaultCheck${formCount}a" contenteditable="true">
                                Default checkbox ${formCount}a
                            </label>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}b">
                            <label class="form-check-label" for="defaultCheck${formCount}b" contenteditable="true">
                                Default checkbox ${formCount}b
                            </label>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck${formCount}c">
                            <label class="form-check-label" for="defaultCheck${formCount}c" contenteditable="true">
                                Default checkbox ${formCount}c
                            </label>
                            <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

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
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left"></i> 
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}">
                                Default Radio ${formCount}
                            </label>
                            <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

    }

    //ADD TWO RADIO BUTTONS
    function addTwoRadios(){
    $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left"></i> 
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}a" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}a">
                                Default Radio ${formCount}a
                            </label>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}b" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}b">
                                Default Radio ${formCount}b
                            </label>
                            <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

    }

    //ADD THREE RADIO BUTTONS
    function addThreeRadios(){
    $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left"></i> 
                <div class="form-row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}a" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}a">
                                Default Radio ${formCount}a
                            </label>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}b" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}b">
                                Default Radio ${formCount}b
                            </label>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>   
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${formCount}c" value="option2">
                            <label class="form-check-label" for="exampleRadios${formCount}c">
                                Default Radio ${formCount}c
                            </label>
                            <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        </div>
                        <small class="d-none edit-attributes edit-attributes-option form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>
                    </div>
                </div>
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

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
        <div class="formInput my-2">
            <span>
                <i class="fas fa-arrows-alt move-button float-left mr-2"></i> 
                <div class="form-group">
                    <label for="exampleFormControlSelect${formCount}" contenteditable="true">Example select ${formCount}</label>
                    <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                    <select class="form-control" id="exampleFormControlSelect${formCount}">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>            
            </span>
        </div>
    `)

    editAttributesVisible()
    fontWeightConsistency()

})

//---------------------------------------------
//          ADD MULTIPLE SELECT FIELD
//---------------------------------------------

$("#multipleSelectField").on("click", function(){
    formCount++
    $("#thisForm").append(`
        <div class="formInput my-2">
            <span>
            <i class="fas fa-arrows-alt move-button float-left mr-2"></i> 
                <div class="form-group">
                    <label for="exampleFormControlSelect${formCount}" contenteditable="true">Example multiple select ${formCount}</label>
                    <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                    <select multiple class="form-control" id="exampleFormControlSelect${formCount}">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>            
            </span>
        </div>
    `)
    
    editAttributesVisible()
    fontWeightConsistency()

    })

//---------------------------------
//          ADD TEXTAREA
//---------------------------------

    $("#addTextArea").on("click", function(){
        formCount++
        $("#thisForm").append(`
            <div class="formInput my-2">
                <span>
                <i class="fas fa-arrows-alt move-button float-left mr-2"></i> 
                    <div class="form-group">
                        <label for="exampleFormControlTextarea${formCount}" contenteditable="true">Example textarea ${formCount}</label>
                        <button type="button" class="input-group-append btn delete-button float-right"><i class="fas fa-times"></i></button>
                        <textarea class="form-control" id="exampleFormControlTextarea${formCount}" rows="5"></textarea>
                    </div>
                    <small class="d-none edit-attributes edit-attributes-field form-text mb-1" data-toggle="modal" data-target="#editingModal">Edit Attributes</small>                
                </span>
            </div>
        `)
        
        editAttributesVisible()
        fontWeightConsistency()
    })