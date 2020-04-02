$(document).on('load', function(){
    var text = window.location.hash.substring(1).split("_")
    const Name = text[0];
    const Description = text[1];
    const Value = text[2];
    if(typeof Name != "undefined"){
        console.log(Name)
        $('#name').val(Name)
    }
    if(typeof Description != "undefined"){
        $('#description').val(Description)
    }
    if(typeof Value != "undefined"){
        $('#value').val(Value)
    }
})