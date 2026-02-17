const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const helmet = require("helmet");

app.use(helmet());
app.use(express.json());

// Below the information will be retrieved about a user from the github page
async function fetchUserData(username) {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("fetch Error" + error);
    throw error;
  }
}

/* Below the information will be retrieved about a repository's 
commits using the username and repository name*/
async function fetchRepoCommits(username, repoName) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/commits`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("fetch Error" + error);
    throw error;
  }
}

// Below a users repositories will be retrieved from github using their username.
async function fetchUserRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("fetch Repo Error" + error);
    throw error;
  }
}

/*The get below  will retrieve the username through the url then.
 * use it to get information from github then. return as JSON*/

app.get("/search", async (req, resp) => {
  try {
    const userName = req.query.username;
    const userData = await fetchUserData(userName);

    resp.json(userData);
  } catch (error) {
    console.log("fetch Error" + error);
    throw error;
  }
});

/*The get below  will retrieve the username through the url then.
 * use it to get information on the repositories from github then. 
 * return it as JSON*/
app.get("/search/repos", async (req, resp) => {
  try {
    const userName = req.query.username;
    const userData = await fetchUserRepos(userName);

    resp.json(userData);
  } catch (error) {
    console.log("fetch getting repo Error" + error);
    throw error;
  }
});

/* The get below  will retrieve the username and repoName through the url then.
 * use it to get commit information on the Repositroy from github then. 
 * return it as JSON*/
app.get("/search/repos/commits", async (req, resp) => {
  try {
    const username = req.query.username;
    const repoName = req.query.repoName;

    const commits = await fetchRepoCommits(username, repoName);

    resp.json(commits);
  } catch (error) {}
});

/* Below listen will run the site on port 8080.
 * and print a message when running.*/
app.listen(port, async () => {
    console.log("Site Running");
});
