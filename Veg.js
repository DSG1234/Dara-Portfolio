$("#button").click(function() { 
    var user_input = $("#input").val();

    if( user_input === "yes" ){
        $("p").html ("You can have dessert!");
    }
    else if ( user_input === "no" ){
        $("p").html ("You cannot have dessert!");
    }
    else{
        $("p").html ("please type yes or no");
    
    }   
});
