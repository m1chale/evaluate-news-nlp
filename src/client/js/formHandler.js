export function handleSubmit(event) {
  event.preventDefault();

  const inputURL = document.getElementById("input-text");

  // Validation
  if (!validateURL(inputURL.value)) return switchInvalidUrl(true);

  Client.analyseUrl(inputURL.value).then(displayResults);
  switchInvalidUrl(false);

  inputURL.value = "";
}

function validateURL(url) {
  if (
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(
      url
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function switchInvalidUrl(show) {
  const targetElement = document.querySelector(".error-message");
  if (show) targetElement.classList.remove("hidden");
  else targetElement.classList.add("hidden");
}

function displayResults(textAnalysis) {
  const resultList = document.getElementById("results");
  const result = document.createElement("li");
  const wrapper = document.createElement("div");

  const subjectivity = document.createElement("span");
  const score = document.createElement("span");
  const irony = document.createElement("span");
  const confidence = document.createElement("span");
  const originalText = document.createElement("span");

  wrapper.classList.add("result-wrapper");

  score.innerText = `Score: ${textAnalysis.score_tag}`;
  subjectivity.innerText = `Subjectivity: ${textAnalysis.subjectivity}`;
  irony.innerText = `Irony: ${textAnalysis.irony}`;
  confidence.innerText = `Confidence: ${textAnalysis.confidence}`;
  originalText.innerText = `Original Text: ${textAnalysis.sentence_list[0].text}...`;

  wrapper.appendChild(score);
  wrapper.appendChild(subjectivity);
  wrapper.appendChild(irony);
  wrapper.appendChild(confidence);
  wrapper.appendChild(originalText);
  result.appendChild(wrapper);
  resultList.appendChild(result);
  console.dir(textAnalysis);
}
