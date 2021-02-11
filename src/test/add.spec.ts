import {add} from '../add'

describe('Add Command', () => {
    const args = {
        _ : ['add', 1, 2, 3, 4],
        e: false,
        o: false,
        odd: false,
        even: false
    };
    
    it('should return the sum of all numbers when no flags is provided', () => {
        const [values, sum] = add(args);

        expect(sum).toBe(10);
        expect(values).toEqual([1, 2, 3, 4]);

    });

    it('should return the sum of odd numbers when flag -o or --odd is provided', () => {

        args.o = true;
        let [values, sum] = add(args);

        expect(sum).toBe(4);
        expect(values).toEqual([1, 3]);
        args.o = false;

        args.odd = true;
        [values, sum] = add(args);

        expect(sum).toBe(4);
        expect(values).toEqual([1, 3]);
        args.odd = false;
    });

    it('should return the sum of even numbers when flag -e or --e is provided', () => {
        args.e = true;
        let [values, sum] = add(args);

        expect(sum).toBe(6);
        expect(values).toEqual([2, 4]);
        args.e = false;

        args.even = true;
        [values, sum] = add(args);

        expect(sum).toBe(6);
        expect(values).toEqual([2, 4]);
        args.even = false;
    });
});