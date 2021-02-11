import {getOdds, getEvens} from "./utils";

function sumValues(values) {
    let sum = 0;
    values.forEach(value => {
        sum += value;
    });

    return sum;
}

export function add(args) {
    let values = args._.slice(1);
    let sum = sumValues(values)
    
    if(args.o || args.odd){
        values = getOdds(values);
        sum = sumValues(values);
    }
    
    if (args.e ||args.even) {
        values = getEvens(values);
        sum = sumValues(values);
    }

    return [values, sum]
}