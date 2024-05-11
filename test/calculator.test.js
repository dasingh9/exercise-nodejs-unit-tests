import { expect } from "chai";
import { add, multiply } from "../calculator.js"

it("should add two valid numbers", ()=> {
    const result = add(10, 20);
    expect(result).to.be.equal(30);
});

it("should multiply two valid numbers", ()=> {
    const result = multiply(10, 20);
    expect(result).to.be.equal(200);
});

