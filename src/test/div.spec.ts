import { div } from "../div";

describe("Div Command", () => {
    const args = {
        _: ["div", 1, 2, 3, 4],
        e: false,
        o: false,
        odd: false,
        even: false,
    };

    it("should return the division of all numbers when no flags is provided", () => {
        const [arrayValue, result] = div(args);

        expect(result).toBe(1 / 2 / 3 / 4);
        expect(arrayValue).toEqual([1, 2, 3, 4]);
    });

    it("should throw an error when try to divide by zero", () => {
        let args = {
            _: ["div", 1, 2, 0, 4],
            e: false,
            o: false,
            odd: false,
            even: false,
        };

        expect(() => div(args)).toThrowError("Can't divide by zero!");

    });

    it("should return the division of odd numbers when flag -o or --odd is provided", () => {
        args.o = true;
        let [arrayValue, result] = div(args);

        expect(result).toBe(1 / 3);
        expect(arrayValue).toEqual([1, 3]);
        args.o = false;

        args.odd = true;
        [arrayValue, result] = div(args);

        expect(result).toBe(1 / 3);
        expect(arrayValue).toEqual([1, 3]);
        args.odd = false;
    });

    it("should return the division of even numbers when flag -e or --e is provided", () => {
        args.e = true;
        let [arrayValue, result] = div(args);

        expect(result).toBe(0.5);
        expect(arrayValue).toEqual([2, 4]);
        args.e = false;

        args.even = true;
        [arrayValue, result] = div(args);

        expect(result).toBe(0.5);
        expect(arrayValue).toEqual([2, 4]);
        args.even = false;
    });
});
