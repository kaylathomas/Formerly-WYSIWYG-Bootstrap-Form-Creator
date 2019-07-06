//-----------------------------
//       EDIT-ATTRIBUTES
//-----------------------------
$(".edit-attributes").click(function(){
    //-----------------------------
    //  CLEAR ALL EXISTING INPUTS
    //-----------------------------
    $("#requiredCheck").removeAttr("checked")
    $("#inputID").val("")
    $("#inputPlaceholder").val("")
    $("#inputPreFilled").val("")
    $("#inputMaxLength").val("")
    $("#inputType").val("Select...")
})


//-----------------------------
//        FIELD INPUTS
//-----------------------------]
$(".edit-attributes-field").click(function(){
    //-----------------------------
    //        INPUT PREVIEW
    //-----------------------------
    $(".edit-attributes-preview small").remove()
    $(".edit-attributes-preview button").remove()
    $(".edit-attributes-preview i").remove()
    $(".edit-attributes-preview label").removeAttr("contenteditable")
    $(".edit-attributes-preview label").removeAttr("id")
    $(".edit-attributes-preview label").removeAttr("for")
    $(".edit-attributes-preview input").removeAttr("id")
    $(".edit-attributes-preview textarea").removeAttr("id")
})


//-----------------------------
//  RADIO AND CHECKBOX INPUTS
//-----------------------------
$(".edit-attributes-option").click(function(){
    //-----------------------------
    //        INPUT PREVIEW
    //-----------------------------    
    $(".edit-attributes-preview small").remove()
    $(".edit-attributes-preview button").remove()
    $(".edit-attributes-preview i").remove()
    $(".edit-attributes-preview label").removeAttr("contenteditable")
    $(".edit-attributes-preview label").removeAttr("id")
    $(".edit-attributes-preview label").removeAttr("for")
    $(".edit-attributes-preview input").removeAttr("id")
    $(".edit-attributes-preview textarea").removeAttr("id")
})



    
