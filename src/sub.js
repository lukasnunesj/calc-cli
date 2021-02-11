import {getOdds, getEvens} from "./utils";

function subValues(values){
    let sub = null;

    values.forEach(value => {
        if(sub == null) {
            sub = value;
            return;
        }
        sub -= value;
    });

    return sub;
}

export function sub(args) {
    let values = args._.slice(1);
    let sub = subValues(values);

    if(args.o || args.odd){
        values = getOdds(values);
        sub = subValues(values);
    }

    if (args.e ||args.even) {
        values = getEvens(values);
        sub = subValues(values);
    }

    return [values, sub]
}