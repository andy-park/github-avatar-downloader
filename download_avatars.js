var request = require("request");
console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "andy-park";
var GITHUB_TOKEN = "8220f2e7b132073a3ef7545f6efa7b10c2b4b864";
var repoOwner = "jquery";
var repoName = "jquery";
var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";


function getRepoContributors(repoOwner, repoName, cb) {
  request.get(requestURL)
    .on("response", function (response) {
      console.log("body: ", response);
    })

};
console.log(requestURL);

getRepoContributors("jquery", "jquery", function (err, results) {
  console.log("Errors: ", err);
});