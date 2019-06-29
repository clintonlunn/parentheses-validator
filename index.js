// Coding exercise: You are tasked to write a checker
// that validates the parentheses of a LISP code. Write a program
// (in Java or JavaScript) which takes in a string as an input and
// returns true if all the parentheses in the string are properly closed and nested.


const sampleLisp = `
(defun negate (X)
  "Negate the value of X."  ; This is a documentation string.
  (- X))  
`

function validateLisp (string) {
    for (i in string) {
        console.log(string[i]);     
    }
}

validateLisp();