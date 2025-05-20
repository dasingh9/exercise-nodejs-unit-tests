export function add(a, b) {
    return Number(a) + Number(b);
}

export function divide(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);

    if(num2==0) {
        throw new Error("Division by zero");
    }
    return num1/num2;
}

export function subtract(a, b) {

}

export function multiply(a, b) {

}