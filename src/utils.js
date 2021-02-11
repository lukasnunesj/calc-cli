export function getOdds(values) {
    return values.filter((v) => v % 2 > 0);
}

export function getEvens(values) {
    return values.filter((v) => v % 2 == 0);
}
