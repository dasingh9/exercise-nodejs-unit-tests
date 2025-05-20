import { expect } from "chai";
import { add, divide } from "../calculator.js";

// Test cases for addition
describe('add()', () => {

    it('should return 30 when adding 10 and 20', () => {
        const actualOutcome = add(10, 20);
        expect(actualOutcome).to.equal(30);
    });

    it('should return 30 when adding string "10" and number 20', () => {
        const actualOutcome = add("10", 20);
        expect(actualOutcome).to.equal(30);
    });

    it('should return 30 when adding string "10" and string "20"', () => {
        const actualOutcome = add("10", "20");
        expect(actualOutcome).to.equal(30);
    });

});

// Test cases for division
describe('divide()', () => {

    it('should return 0.5 when dividing 10 by 20', () => {
        const actualOutcome = divide(10, 20);
        expect(actualOutcome).to.equal(0.5);
    });

    it('should throw an error when dividing by zero', () => {
        const divideFunction = () => divide(10, 0);
        expect(divideFunction).to.throw(Error, 'Division by zero');
    });

});