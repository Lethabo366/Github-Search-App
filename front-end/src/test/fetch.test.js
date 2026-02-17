// Below the function is calling the api to get the users.
const fetchData = async () => {
  try {
    const response = await fetch(`
  https://api.github.com/search/users?q=Lethabo366
      `);
      const json = await response.json();
      console.log(json)
      return json;
    
  } catch (error) {
    console.log("fetch failed :" + error);
  }
};

// Below the function is calling the api to get the users repositories.
const fetchRepoData = async () => {
  try {  
    const response = await fetch(`
      https://api.github.com/users/Lethabo366/repos
      `);

      const json = await response.json();
      return json;
    
  } catch (error) {
    console.log("Repo fetch failed :" + error);
  }
};

// Below function is calling the api to get the commits for the repository.
const fetchRepoCommits = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/Lethabo366/Hangman-Game/commits`,
    );

      const json = await response.json();
      return json;
    
  } catch (error) {
    console.log("Commit fetch Error :" + error);
  }
};

// Below the test is testing whether the api is getting the users details correctly.
test("testing User Data fetch", async () => {
  const data = await fetchData();
  expect(data.items[0].login).toBe("Lethabo366");
});

// Below the test is testing whether the api is retrieving the repos correctly
test("testing User Repoositories fetch", async () => {
  const data = await fetchRepoData();
  expect(data).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: "Hangman-Game" })]),
  );
});

// Below the test is testing whether the api is retrieving the commits correctly.
test("testing Repository commits fetch", async () => {
  const data = await fetchRepoCommits();
  expect(data[4].commit.message).toBe("Initial commit");
});
