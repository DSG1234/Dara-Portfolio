$("#button").click(function() {
    var input = $("#in").val();
    
    if (input === "orange"){ 
    $("p").html("Correct!");
    }
    
    else {
        $("p").html("Wrong. Try again!");
    }
});
