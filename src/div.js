import {getOdds, getEvens} from "./utils";

function divValues(values) {
    let div = null;
    values.forEach(value => {
        if(div == null) {
            div = value;
            return;
        }

        if(value == 0){
            throw new Error("Can't divide by zero!")
        }
        div /= value;
    });

    return div;
}

export function div(args) {
    let values = args._.slice(1);
    let div;

    if(args.o || args.odd){
        values = getOdds(values);
        div = divValues(values);
    }

    if (args.e ||args.even) {
        values = getEvens(values);
        div = divValues(values);
    }
    div = divValues(values)

    return [values, div]
    
}