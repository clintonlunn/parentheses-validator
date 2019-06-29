// import {
//     ModuleMap
// } from "jest-haste-map";

// Coding exercise: You are tasked to write a checker
// that validates the parentheses of a LISP code. Write a program
// (in Java or JavaScript) which takes in a string as an input and
// returns true if all the parentheses in the string are properly closed and nested.

const sampleLisp = `
    ((lambda (arg) (* arg 2)) 10)
`

function validateLisp(string) {
    // what we will hold parens in
    let stack = [];
    const failMsg = 'invalid lisp';
    const successMsg = 'valid lisp';

    for (i in string) {
        // hold the openers
        // if opener
        if (string[i] === '(') {
            stack.push('(')
        }

        // if closer
        if (string[i] === ')') {
            // the previous parentheses should be an opener
            // so let's look at the previous parenthesis

            const prevParen = stack[stack.length - 1];

            if (prevParen === '(' && stack.length !== 0) {
                // remove matching opener paren
                stack.pop();

            } else {
                return console.log(failMsg);

            }
        }
    }

    // then check if stck is empty after the loop
    if (stack.length === 0) {
        // then we have matched all of the parentheses
        return console.log(successMsg);


    } else {
        return console.log(failMsg);

    }
}

// validateLisp(example2);
module.exports = validateLisp