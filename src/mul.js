import {getOdds, getEvens} from "./utils";

function mulValues(values) {
    let mul = null;

    values.forEach(value => {
        if(mul == null) {
            mul = value;
            return;
        }
        mul *= value;
    });

    return mul;
}

export function mul(args) {
    let values = args._.slice(1);
    let mul = mulValues(values);

    if(args.o || args.odd){
        values = getOdds(values);
        mul = mulValues(values);
    }
    
    if (args.e ||args.even) {
        values = getEvens(values);
        mul = mulValues(values);
    }

    return [values, mul];
}