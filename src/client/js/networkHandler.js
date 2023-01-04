export function analyseUrl(inputURL) {
  const urlParams = new URLSearchParams({
    analysisUrl: inputURL,
  });

  return fetch("http://localhost:8080/api/nlp?" + urlParams).then((res) =>
    res.json()
  );
}

export function displayResults(textAnalysis) {
  const resultList = document.getElementById("results");
  const result = document.createElement("li");
  const wrapper = document.createElement("div");

  const subjectivity = document.createElement("span");
  const score = document.createElement("span");
  const irony = document.createElement("span");
  const confidence = document.createElement("span");
  const originalText = document.createElement("span");

  wrapper.classList.add("result-wrapper");

  score.innerHTML = `Score: ${textAnalysis.score_tag}`;
  subjectivity.innerHTML = `Subjectivity: ${textAnalysis.subjectivity}`;
  irony.innerHTML = `Irony: ${textAnalysis.irony}`;
  confidence.innerHTML = `Confidence: ${textAnalysis.confidence}`;
  originalText.innerHTML = `Original Text: ${textAnalysis.sentence_list[0].text}...`;

  wrapper.appendChild(score);
  wrapper.appendChild(subjectivity);
  wrapper.appendChild(irony);
  wrapper.appendChild(confidence);
  wrapper.appendChild(originalText);
  result.appendChild(wrapper);
  resultList.appendChild(result);
}
