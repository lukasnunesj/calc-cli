import {sub} from '../sub'

describe('Sub Command', () => {
    const args = {
        _ : ['sub', 1, 2, 3, 6],
        e: false,
        o: false,
        odd: false,
        even: false
    };
    
    it('should return the subtraction of all numbers when no flags is provided', () => {
        const [arrayValue, result] = sub(args);

        expect(result).toBe(-10);
        expect(arrayValue).toEqual([1, 2, 3, 6]);

    });

    it('should return the subtraction of odd numbers when flag -o or --odd is provided', () => {

        args.o = true;
        let [arrayValue, result] = sub(args);

        expect(result).toBe(-2);
        expect(arrayValue).toEqual([1, 3]);
        args.o = false;

        args.odd = true;
        [arrayValue, result] = sub(args);

        expect(result).toBe(-2);
        expect(arrayValue).toEqual([1, 3]);
        args.odd = false;
    });

    it('should return the subtraction of even numbers when flag -e or --e is provided', () => {
        args.e = true;
        let [arrayValue, result] = sub(args);

        expect(result).toBe(-4);
        expect(arrayValue).toEqual([2, 6]);
        args.e = false;

        args.even = true;
        [arrayValue, result] = sub(args);

        expect(result).toBe(-4);
        expect(arrayValue).toEqual([2, 6]);
        args.even = false;
    });
});