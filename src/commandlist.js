import { add } from "./add";
import { sub } from "./sub";
import { mul } from "./mul";
import { div } from "./div";

const registeredComands = {
    add: add,
    sub: sub,
    mul: mul,
    div: div
}
export default registeredComands;