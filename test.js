const Lazy = require('./index');

const timesTwo = (a) => a * 2;
const plus = (a, b) => a + b;

test('Test the Lazy class', () => {
  const computation = new Lazy();
  computation.add(timesTwo);
  computation.add(plus, 1);
  expect(computation.evaluate([1, 2, 3])).toEqual([3, 5, 7]);
});
