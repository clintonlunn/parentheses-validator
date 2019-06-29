const validateLisp = require('./index');
const {
    longExample,
    example1,
    invalidExample,
    commentingExample
} = require('./exampleLisps');
console.log({
    commentingExample: console.log(validateLisp('()')),
    example1
});

test('test a valid lisp', () => {
    expect(validateLisp(example1)).toBe('valid lisp');
});

test('test a not valid lisp', () => {
    expect(validateLisp(invalidExample)).not.toBe('valid lisp');
});

test('test edge case lisp', () => {
    expect(validateLisp(example1 + '(')).toBe('valid lisp');
    expect(validateLisp(example1 + ')')).not.toBe('valid lisp');
    expect(validateLisp('(' + example1)).not.toBe('valid lisp');
    expect(validateLisp(')' + example1 + '(')).not.toBe('valid lisp');
    expect(validateLisp('(' + example1 + ')')).toBe('valid lisp');
});


test('test edge case lisp', () => {
    expect(validateLisp(example1 + '(')).toBe('valid lisp');
})
test('test big valid lisp', () => {
    expect(validateLisp(`
    (setf x (make-array '(3 3):initial-contents'((1 2 3)(4 5 6)(7 8 9))))
    (write x)
  `).toBe('valid lisp'));
});

// test('test a valid lisp', () => {
//     expect(validateLisp).toBe(2);
// });