import chalk from "chalk";
import minimist from "minimist";
import registeredComands from "./commandlist"
import { help } from "./help";
import { version } from "./version";

export function cli(argsArray) {
    const args = minimist(argsArray.slice(2), {boolean: ['e', 'o', 'even', 'odd', 'h', 'help']})
    
    let cmd = args._[0] || 'help';

    if (args.version || args.v) {
        version();
        return;
    }

    if (args.help || args.h || cmd == 'help') {
        help();
        return;
    }

    if ((Object.keys(registeredComands)).indexOf(cmd) < 0) {
        console.error(`"${cmd}" is not a valid command!`);
        return;
    }
    const selectedCommand = registeredComands[cmd];

    const [valuesArray, result] = selectedCommand(args);

    console.log(`The result for values [${valuesArray.join(', ')}] is: ${chalk.bold(result)}`)

}