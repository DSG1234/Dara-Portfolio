var thor= 0;
var hulk= 0;
var cap= 0;
var widow= 0;
var iron= 0;
var hawk= 0;
$(".a").click(function(){
    thor++ ;
});

$(".b").click(function(){
    
    hulk++;
});

$(".c").click(function(){

    cap++;
});

$(".d").click(function(){


    widow++;
});

$(".e").click(function(){

    iron++;
});

$(".f").click(function(){

    hawk++;
});

var result = "invalid";


$("#submit").click(function(){
    if ((thor > hulk)  && (thor > cap) && (thor > widow) && (thor > iron) && (thor > hawk)){
    result = " You are Thor, God of Thunder, Defender of the Nine Realms!";
}

else if (hulk > thor && hulk > cap && hulk < widow && hulk < iron && hulk < hawk){
    result = " You are the Incredible Hulk AKA Bruce Banner";
}
else if (cap > thor && cap > hulk && cap > widow && cap > iron && cap > hawk){
    result = " You are Captain America AKA Steve Rogers!";
}

else if (widow > thor && widow > cap && widow > hulk && widow > iron && widow > hawk){
    result = " You are Black Widow AKA Natasha Romanoff!";
}

else if (iron > thor && iron > cap && iron > widow && iron > hulk && iron > hawk){
    result = " You are Iron Man AKA Tony Stark!";
}

else if (hawk > thor && hawk > cap  && hawk > widow && hawk > iron && hawk > hulk){
    result = " You are Hawkeye AKA Clint Barton!";
}
    alert(result);
});
