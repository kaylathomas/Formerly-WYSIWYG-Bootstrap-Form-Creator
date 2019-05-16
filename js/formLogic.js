$( document ).ready(function() {

    let formCount = 2

    $("#addField").click(function() {
        formCount++
        $("#thisForm").append(`
            <div class="form-group">
                <label for="formInput${formCount}">Form Label ${formCount}</label>
                <input type="text" class="form-control" id="formInput${formCount}">
            </div>
        `)
    })
});
