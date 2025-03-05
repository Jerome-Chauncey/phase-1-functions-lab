const scuberHeadquarters=42
function distanceFromHqInBlocks(distance) {
    if(distance>scuberHeadquarters){
        return distance-scuberHeadquarters
    }else{
        return scuberHeadquarters-distance
    }
    
}


function distanceFromHqInFeet(distance) {
const manhattan=264
const blocks = distanceFromHqInBlocks(distance);
    return manhattan * blocks
    
}



function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400) {
        return 0;
    }else if(distance > 400 && distance <=2000) {
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <=2500){
        return 25;
    }else {
        return "cannot travel that far";
    }
}
