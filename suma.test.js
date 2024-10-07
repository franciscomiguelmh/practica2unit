// suma.test.js
const sumar = require('./suma');

test('sumar 2 + 2 es igual a 4', () => {
    expect(sumar(2, 2)).toBe(4);
});
