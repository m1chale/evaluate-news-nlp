/**
 * @jest-environment jsdom
 */

const formHandler = require("../src/client/js/formHandler.js");
const networkHandler = require("../src/client/js/networkHandler.js");

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

describe("DisplayResults funtion", () => {
  test("html tags should be created and filled with input data", () => {
    document.body.innerHTML = `
    <section>
        <strong>Form Results:</strong>
        <div>
            <ul id="results"></ul>
        </div>
    </section>`;

    const input = {
      score_tag: "N",
      subjectivity: "OBJECTIVE",
      irony: "IRONIC",
      confidence: 95,
      sentence_list: [{ text: "abcdef" }],
    };

    const output =
      '<li><div class="result-wrapper"><span>Score: N</span><span>Subjectivity: OBJECTIVE</span><span>Irony: IRONIC</span><span>Confidence: 95</span><span>Original Text: abcdef...</span></div></li>';

    networkHandler.displayResults(input);

    expect(document.getElementById("results").innerHTML).toEqual(output);
  });
});
