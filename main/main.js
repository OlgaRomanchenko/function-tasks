
function calculateVolumeAndArea(num){
    let v_square = Math.pow(num,3);
    let s_square = 6 * Math.pow(num,2);
    if (typeof num === "string"){
        return  (`При вычислении произошла ошибка`);
    }
    if (num < 0){
        return  (`При вычислении произошла ошибка`);
    }
    else{
        return (`Объем куба: ${v_square}, площадь всей поверхности: ${s_square}`);
    }
}


console.log(calculateVolumeAndArea('44'));