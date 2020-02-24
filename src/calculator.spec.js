test("given an empty string returns zero", () => {
  expect(add("")).toBe(0);
  expect(add(" ")).toBe(0);
});

test("given a number returns the number", () => {
  expect(add("5")).toBe(5);
});

test("given two numbers returns their sum", () => {
  expect(add("7,2")).toBe(9);
});

test("given multiple numbers returns their sum", () => {
  expect(add("1,3,5,2")).toBe(11);
});

function add(items) {
  if (isEmpty(items)) return 0;
  return calculateSum(extractNumbers(items));
}

function calculateSum(numbers) {
  const initialValue = 0;
  return numbers.reduce((accumulatedSum, nextItem) => accumulatedSum + nextItem, initialValue);
}

function extractNumbers(items) {
  return items.split(",").map(e => parseInt(e));
}

function isEmpty(item) {
  return item.trim() === "";
}
