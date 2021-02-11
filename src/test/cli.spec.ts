import chalk from "chalk";
import {cli} from "../cli";
import * as helpModule from "../help";
import * as versionModule from "../version";

describe('CLI Interface', () => {
    
    it('should call a method with given values', () => {

        const spyLog = jest.spyOn(console, 'log');
        cli([...process.argv, 'add', '1', '2', '3', '4']);
        
        expect(spyLog).toHaveBeenCalledWith(`The result for values [1, 2, 3, 4] is: ${chalk.bold(10)}`)
    });

    it('should call a method with given values and given flag', () => {

        const spyLog = jest.spyOn(console, 'log');
        cli([...process.argv, 'add', '1', '2', '3', '4', '-e']);
        
        expect(spyLog).toHaveBeenCalledWith(`The result for values [2, 4] is: ${chalk.bold(6)}`)
    });

    it('should return help method when no other method is provided', () => {
        const spyHelp = jest.spyOn(helpModule, 'help');
        cli([...process.argv]);
        
        expect(spyHelp).toHaveBeenCalled()
    });

    it('should return verion method when -v flag is provided', () => {
        const spyVersion = jest.spyOn(versionModule, 'version');
        cli([...process.argv, '-v']);

        const spyLog = jest.spyOn(console, 'log');
        expect(spyVersion).toHaveBeenCalled()
        expect(spyLog).toHaveBeenCalledWith(require('../../package.json').version)
    });

    it('should return error when no valid command is provided', () => {

        const spyLog = jest.spyOn(console, 'log');
        cli([...process.argv, 'test']);
        
        expect(spyLog).toHaveBeenCalledWith(`"test" is not a valid command!`)
    });
});