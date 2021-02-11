# calc-cli
Simple calculator CLI made with Node and Minimist
The idea for this cli was taken from <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Calculator-CLI.md">App Ideas Repository </a>

## Install instructions
```bash
# in root folder of the project
$ npm link 
```
## Usage

```bash
$ calc-cli -h
Usage:
    $ calc-cli [command] [flag] <values>
Commands:
    add         # Returns the sum of the given values
    div         # Returns the division between the given values
    help        # Show this help message and quit
    mul         # Returns the multiplication between the given values
    sub         # Returns the subtraction of the given values
    version     # Show version of the cli
Flags:
    -e, --even  # Uses only the even among the given values
    -o, --odd   # Uses only the odd among the given values

```
