import { expect } from "chai";
import { add, subtract, multiply, divide } from "../calculator.js"

it("should add two valid integer numbers", ()=> {
    const result = add(10, 20);
    expect(result).to.be.equal(30);
});

it("should subtract two valid integer numbers", ()=> {
    const result = subtract(100, 20);
    expect(result).to.be.equal(80);
});

it("should multiply two valid integer numbers", ()=> {
    const result = multiply(1111, 1111);
    expect(result).to.be.equal(1234321);
});

it("should divide two valid integer numbers", ()=> {
    const result = divide(100, 25);
    expect(result).to.be.equal(4);
});

