export function handleSubmit(event) {
  event.preventDefault();

  const inputURL = document.getElementById("input-text");

  // Validation
  if (!validateURL(inputURL.value)) return switchInvalidUrl(true);

  Client.analyseUrl(inputURL.value).then(Client.displayResults);
  switchInvalidUrl(false);

  inputURL.value = "";
}

export function validateURL(url) {
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
