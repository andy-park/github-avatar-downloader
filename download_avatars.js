var request = require("request");
var GITHUB_USER = "andy-park";
var GITHUB_TOKEN = "118d5440418efdbd6334c720dc2d6a6bb2ac7a63";
console.log("Welcome to the GitHub Avatar Downloader!");

var repoOwner = "jquery";
var repoName = "jquery";

  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  console.log(requestURL);

  request.get("api.github.com/repos/jquery/jquery/contributors");

// function getRepoContributors(repoOwner, repoName, cb) {
  // request.get(host.avatar_url)

//   var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

//   request.get("api.github.com/repos/jquery/jquery/contributors")
//     .on("error", function (err) {
//       throw err;
//     })
//   }
// getRepoContributors()