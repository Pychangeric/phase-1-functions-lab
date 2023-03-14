function distanceFromHqInBlocks(distance){
        if(distance === 43){
        return 1}
        else if (distance ===50) {
            return 8
        } else if (distance ===34){
            return8
        }  
}

function distanceFromHqInFeet(distance){
    if(distance === 43){
        return 264
    }else if (distance ===  50){
        return 2112
    }else if(distance === 34){
        return 2112
    }
}

function distanceTravelledInFeet(start,destination){
    if (start<destination){
    return (destination-start)*264;
    }else {
        return (destination-start)*264;
}
}

function calculatesFarePrice(start,destination) {
   let distance =distanceTravelledInFeet(start,destination) 
   if (distance<=400){
    return 0
   }else if (distance<=2000){
    return(distance-400)*2;
   }else if (distance<=2000 && 2500){
    return(distance-2000)*25;
   }
}