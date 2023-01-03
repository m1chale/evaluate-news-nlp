export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let analyseText = document.getElementById("input-text").value;

  //Client.checkForName(formText);

  const urlParams = new URLSearchParams({
    text: analyseText,
  });

  fetch("http://localhost:8080/api/nlp/" + urlParams)
    .then((res) => res.json())
    .then(function (textAnalysis) {
      console.dir(textAnalysis);
      document.getElementById("results").innerHTML = textAnalysis;
    });
}
