import {mul} from '../mul'

describe('Mul Command', () => {
    const args = {
        _ : ['mul', 1, 2, 3, 4],
        e: false,
        o: false,
        odd: false,
        even: false
    };
    
    it('should return the multiplication of all numbers when no flags is provided', () => {
        const [arrayValue, result] = mul(args);

        expect(result).toBe(24);
        expect(arrayValue).toEqual([1, 2, 3, 4]);

    });

    it('should return the multiplication of odd numbers when flag -o or --odd is provided', () => {

        args.o = true;
        let [arrayValue, result] = mul(args);

        expect(result).toBe(3);
        expect(arrayValue).toEqual([1, 3]);
        args.o = false;

        args.odd = true;
        [arrayValue, result] = mul(args);

        expect(result).toBe(3);
        expect(arrayValue).toEqual([1, 3]);
        args.odd = false;
    });

    it('should return the multiplication of even numbers when flag -e or --e is provided', () => {
        args.e = true;
        let [arrayValue, result] = mul(args);

        expect(result).toBe(8);
        expect(arrayValue).toEqual([2, 4]);
        args.e = false;

        args.even = true;
        [arrayValue, result] = mul(args);

        expect(result).toBe(8);
        expect(arrayValue).toEqual([2, 4]);
        args.even = false;
    });
});