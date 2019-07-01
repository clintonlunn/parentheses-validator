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

test('commenting example', () => {
    expect(validateLisp(commentingExample)).toBe('valid lisp');
});

test('test a not valid lisp', () => {
    expect(validateLisp(invalidExample)).not.toBe('valid lisp');
});

test('test edge case lisp', () => {
    expect(validateLisp(example1 + '(')).toBe('invalid lisp');
    expect(validateLisp(example1 + ')')).not.toBe('valid lisp');
    expect(validateLisp('(' + example1)).not.toBe('valid lisp');
    expect(validateLisp(')' + example1 + '(')).not.toBe('valid lisp');
    expect(validateLisp('(' + example1 + ')')).toBe('valid lisp');
});