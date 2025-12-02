const test = require('node:test');
const assert = require('node:assert/strict');

function suma(a, b) {
  return a + b;
}

test('suma 2 + 3 = 5', () => {
  assert.equal(suma(2, 3), 5);
});
