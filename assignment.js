function feetToMile(feet) {
    if (feet != feet / 1) {
        return "warning : feet must be a number";
    }
    if (feet < 0) {
        return "warning : feet must be a positive number";
    }
    let mile = feet * 0.000189394;
    return mile;
}



function woodCalculator(chair, table, bed) {
    if (chair != chair / 1 || table != table / 1 || bed != bed / 1) {
        return "warning : floor quantity must be a number";
    }
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let bedWood = bed * 5;

    let totalWood = chairWood + tableWood + bedWood

    return totalWood;
}


function brickCalculator(floor) {

    if (floor != floor / 1) {
        return "warning : floor quantity must be a number";
    }
    let size;
    let totalBrick = 0;

    for (let i = 1; i <= floor; i++) {
        if (i <= 10) {
            size = 15
        } else if (i <= 20) {
            size = 12
        } else {
            size = 10
        }
        totalBrick = totalBrick + size * 1000;
    }
    return totalBrick;
}


function tinyFriend(names) {
    let names_length = names.length;
    if (names_length == 0) {
        return "warning : array can't be empty"
    }
    let tinyName = names[0];
    for (let i = 1; i < names_length; i++) {

        if (tinyName.length > names[i].length) {
            tinyName = names[i];
        }
    }
    return tinyName;
}