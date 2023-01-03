export function analyseUrl(inputURL) {
  const urlParams = new URLSearchParams({
    analysisUrl: inputURL,
  });

  return fetch("http://localhost:8080/api/nlp?" + urlParams).then((res) =>
    res.json()
  );
}
