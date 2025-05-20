import { expect } from "chai";
import { add, divide, subtract, multiply } from "../calculator.js";

describe('add()', () => {
    it('should return 30 when adding 10 and 20', () => {
        expect(add(10, 20)).to.equal(30);
    });

    it('should return 30 when adding string "10" and number 20', () => {
        expect(add("10", 20)).to.equal(30);
    });

    it('should return 30 when adding string "10" and string "20"', () => {
        expect(add("10", "20")).to.equal(30);
    });

    it('should return correct result with negative numbers', () => {
        expect(add(-10, -5)).to.equal(-15);
    });

    it('should return correct result with decimal numbers', () => {
        expect(add(2.5, 3.5)).to.equal(6.0);
    });

    it('should throw error when input is invalid', () => {
        expect(() => add("abc", 5)).to.throw(Error, 'Invalid input');
    });
});

describe('divide()', () => {
    it('should return 0.5 when dividing 10 by 20', () => {
        expect(divide(10, 20)).to.equal(0.5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).to.throw(Error, 'Division by zero');
    });

    it('should return correct result with string inputs', () => {
        expect(divide("100", "25")).to.equal(4);
    });

    it('should return correct result with decimal division', () => {
        expect(divide(5.5, 2.2)).to.be.closeTo(2.5, 0.0001);
    });

    it('should throw error on invalid input', () => {
        expect(() => divide("abc", 2)).to.throw(Error, 'Invalid input');
    });
});

describe('subtract()', () => {
    it('should return 5 when subtracting 5 from 10', () => {
        expect(subtract(10, 5)).to.equal(5);
    });

    it('should return 0 when subtracting equal numbers', () => {
        expect(subtract(10, 10)).to.equal(0);
    });

    it('should handle negative result correctly', () => {
        expect(subtract(5, 10)).to.equal(-5);
    });

    it('should return correct result with decimal values', () => {
        expect(subtract(5.5, 2.2)).to.be.closeTo(3.3, 0.0001);
    });

    it('should support numeric strings', () => {
        expect(subtract("20", "5")).to.equal(15);
    });

    it('should throw error on invalid input', () => {
        expect(() => subtract("abc", 5)).to.throw(Error, 'Invalid input');
    });
});

describe('multiply()', () => {
    it('should return 20 when multiplying 4 by 5', () => {
        expect(multiply(4, 5)).to.equal(20);
    });

    it('should return 0 when multiplying by zero', () => {
        expect(multiply(999, 0)).to.equal(0);
    });

    it('should return negative when one operand is negative', () => {
        expect(multiply(-4, 5)).to.equal(-20);
    });

    it('should return correct result with decimals', () => {
        expect(multiply(2.5, 4)).to.equal(10);
    });

    it('should support numeric strings', () => {
        expect(multiply("3", "7")).to.equal(21);
    });

    it('should throw error on invalid input', () => {
        expect(() => multiply("abc", 2)).to.throw(Error, 'Invalid input');
    });
});
