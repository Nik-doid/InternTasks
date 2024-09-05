function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log(divideNumbers(10, 0));
} catch (error) {
    console.error("Operational Error:", error.message);
}
