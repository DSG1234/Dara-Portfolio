$("#button").click(function() {
    var user = $("#user").val();
    
    if (user === 83){
        $("p").html("Correct! Nice Job!");
    }
    
    if (user > 83){
        $("p").html("Too high! Try Again!");
    }
    
    if (user < 83){
        $("p").html("Too low! Keep going!");
    }
    if (80 < user < 90){
        $("p").html("You're so close! Almost there!");
    }
});
