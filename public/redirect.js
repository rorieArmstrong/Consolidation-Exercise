$(document).on('load', function(){
    $("#home").on('click', function(){
        console.log("click")
        $(location).attr('href', 'http://localhost:808/create');
        window.location.replace("http://localhost:808/create")
    })
})