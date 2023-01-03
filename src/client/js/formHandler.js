export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  const urlParams = new URLSearchParams({
    text: formText,
  });

  fetch("http://localhost:8080/api/nlp/" + urlParams)
    .then((res) => res.json())
    .then(function (textAnalysis) {
      console.dir(textAnalysis);
      document.getElementById("results").innerHTML = textAnalysis;
    });
}
