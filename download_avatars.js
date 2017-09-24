var request = require("request");
var fs = require("fs");
var GITHUB_USER = "andy-park";
var GITHUB_TOKEN = "8220f2e7b132073a3ef7545f6efa7b10c2b4b864";
var repoOwner = "jquery";
var repoName = "jquery";
var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: requestURL,
    headers: {
      "User-Agent": "Github Avatar Downloader"
    }
  };
  request(options, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      var info = JSON.parse(body);
      cb (info);
    }
  });
}

function findAvatar(response) {
    for (var i = 0; i < response.length; i++) {
      let gitHub = response[i];
    downloadImageByURL (gitHub.avatar_url, "avatars/" + gitHub.login + ".jpg");
    }
  };

function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath))
    console.log("Downloading image..." + url);
  }
  if (!process.argv[2] || !process.argv[3]) {
    console.log("Please enter owner and repo information");
  } else {
    getRepoContributors(process.argv[2], process.argv[3], findAvatar);
  }