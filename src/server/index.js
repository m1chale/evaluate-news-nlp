/**
 * ****************************************************
 * Define dependencies
 */
var path = require("path");
const express = require("express");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");

/**
 * ****************************************************
 * Dotenv configuration
 */
dotenv.config();

/**
 * ****************************************************
 * Define environment
 */
const port = process.env.PORT || 8080;
const apiKey = process.env.API_KEY;

/**
 * ****************************************************
 * Server configuration
 */

const app = express();

app.use(express.static("dist"));
app.use(cors());

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

/**
 * ****************************************************
 * Route handling
 */

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/api/nlp", (request, response) => {
  fetchNlp(request.query.analysisUrl).then((textAnalysis) => {
    response.send(textAnalysis);
  });
});

/**
 * ****************************************************
 * Functions
 */

async function fetchNlp(text) {
  const url = "https://api.meaningcloud.com/sentiment-2.1?";

  const urlParams = new URLSearchParams({
    key: apiKey,
    url: text,
    lang: "auto",
  });

  try {
    const apiRes = await fetch(url + urlParams);

    if (apiRes?.ok) {
      const textAnalysis = await apiRes.json();
      if (textAnalysis) return textAnalysis;
    } else throw new Error(`HTTP Code: ${apiRes?.status}`);
  } catch (error) {
    console.log("There was an error", error);
  }
}
