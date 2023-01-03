export function handleSubmit(event) {
  event.preventDefault();

  let inputText = document.getElementById("input-text").value;

  //Client.checkForName(formText);

  const urlParams = new URLSearchParams({
    text: inputText,
  });

  fetch("http://localhost:8080/api/nlp/" + urlParams)
    .then((res) => res.json())
    .then((textAnalysis) => displayResults(inputText, textAnalysis));
}

function displayResults(inputText, textAnalysis) {
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
  originalText.innerText = `Original Text: ${inputText.slice(0, 15)}...`;

  wrapper.appendChild(score);
  wrapper.appendChild(subjectivity);
  wrapper.appendChild(irony);
  wrapper.appendChild(confidence);
  wrapper.appendChild(originalText);
  result.appendChild(wrapper);
  resultList.appendChild(result);
}
