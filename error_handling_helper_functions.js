//Function to validate an input

const userInput = prompt("Enter a message");

function inputValidation(userInput) {
    try {
        if (!userInput || userInput.length < 6 ) {
            throw new Error("Input must be at least 6 characters long.");
        }
        alert("Input is valid");
    } catch (error) {
        alert(error.message);
    }
}

inputValidation(userInput);

// Function to demonstrate multiple error types
function demonstrateErrors() {
    try {
        console.log(undefinedVariable);
    } catch (error) {
        console.error("Caught a ReferenceError:", error.message);
    }

    try {
        null.toString();
    } catch (error) {
        console.error("Caught a TypeError:", error.message);
    }

    try {
        throw new Error("This is a custom error.");
    } catch (error) {
        console.error("Caught a custom error:", error.message);
    }
}

// Helper functions for string manipulation
const stringHelpers = {
    toUpperCase: (string) => {
        if (typeof string !== 'string') throw new TypeError("Input must be a string.");
        return string.toUpperCase();
    },
    reverseString: (string) => {
        if (typeof string !== 'string') throw new TypeError("Input must be a string.");
        return string.split('').reverse( ).join('');
    },
    toLowerCase: (string) => {
        if (typeof string !== 'string') throw new TypeError("Input must be a string.");
        return string.toLowerCase();
    },
};


// Helper functions for array operations
const arrayHelpers = {
    findMax: (arr) => {
        if (!Array.isArray(arr)) throw new TypeError("Input must be an array.");
        return Math.max(...arr);
    },
    findMin: (arr) => {
        if (!Array.isArray(arr)) throw new TypeError("Input must be an array.");
        return Math.min(...arr);
    },
    sumArray: (arr) => {
        if (!Array.isArray(arr)) throw new TypeError("Input must be an array.");
        return arr.reduce((sum, num) => sum + num, 0);
    },
};