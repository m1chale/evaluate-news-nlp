const formHandler = require("../src/client/js/formHandler.js");

describe("Validate function", () => {
  test("it should return false by a invalid (url)", () => {
    const input = "abcdef";
    const output = false;
    expect(formHandler.validateURL(input)).toEqual(output);
  });

  test("it should return true by a invalid (url)", () => {
    const input = "https://www.google.com/";
    const output = true;
    expect(formHandler.validateURL(input)).toEqual(output);
  });
});
