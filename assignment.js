
 /*  ..................Feet To Mile Converter................ */

 function feetToMile (value){
    var Mile = value * 0.000189394;
    return Mile;
    
}




/*............... Wood Calculator.......... */
function woodCalculator (chair, table, bed){
    var chairWood = chair * 3;
    var tableWood = table * 5;
    var bedWood = bed * 7;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var woodResult = woodCalculator(10,4,16);
console.log(woodResult+ "cubic");




/**.................. Brick Calculator......1to 10 15feet, 11 to 20 12feet........... */
    function brickCalculator(floorCount){
        var oneFeet = 1000;
        var tenFeet = oneFeet * 10;
        var twelveFeet = oneFeet * 12;
        var fifteenFeet = oneFeet * 15;
        if(floorCount <= 10){
            return fifteenFeet;
        }
        else if (floorCount > 10 && floorCount <= 20){
            return twelveFeet;
        }
        else {
            return tenFeet;
        }
    }



/*...............Tiny Friend Finder............... */

function tinyFriend(names){
    var tinyName = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < tinyName.length){
            tinyName = currentName;
        }
    }
    return tinyName;
}


var result = tinyFriend(["Rita" , "Pihu" ,"Sanam" , "Max" , "Tm" , "Johora"])
console.log(result);
