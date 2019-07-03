const validateLisp = require('./index');
const {
    longExample,
    example1,
    invalidExample,
    commentingExample
} = require('./exampleLisps');

test('test a valid lisp', () => {
    expect(validateLisp(example1)).toBe(true);
});

test('commenting example', () => {
    expect(validateLisp(commentingExample)).toBe(true);
});

test('test a not valid lisp', () => {
    expect(validateLisp(invalidExample)).not.toBe(true);
});

test('test edge case lisp', () => {
    expect(validateLisp(example1 + '(')).toBe(false);
    expect(validateLisp(example1 + ')')).not.toBe(true);
    expect(validateLisp('(' + example1)).not.toBe(true);
    expect(validateLisp(')' + example1 + '(')).not.toBe(true);
    expect(validateLisp('(' + example1 + ')')).toBe(true);
});