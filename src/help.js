import chalk from "chalk";

export function help() {
    const text = `${chalk.bold("Usage:")}
    ${chalk.greenBright.bold("$ calc-cli [command] [flag] <values>")}
${chalk.bold("Commands:")}
    ${chalk.greenBright.bold("add")}         ${chalk.white("# Returns the sum of the given values")}
    ${chalk.greenBright.bold("div")}         ${chalk.white("# Returns the division between the given values")}
    ${chalk.greenBright.bold("help")}        ${chalk.white("# Show this help message and quit")}
    ${chalk.greenBright.bold("mul")}         ${chalk.white("# Returns the multiplication between the given values")}
    ${chalk.greenBright.bold("sub")}         ${chalk.white("# Returns the subtraction of the given values")}
    ${chalk.greenBright.bold("version")}     ${chalk.white("# Show version of the cli")}
${chalk.bold("Flags:")}
    ${chalk.greenBright.bold("-e, --even")}  ${chalk.white("# Uses only the even among the given values")}
    ${chalk.greenBright.bold("-o, --odd")}   ${chalk.white("# Uses only the odd among the given values")}
`;
    console.log(text);
}