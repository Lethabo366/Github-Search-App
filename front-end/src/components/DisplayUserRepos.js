import { useLocation } from "react-router";
import { useState, useEffect } from "react"
import LoadingIcon from "./LoadingIcon";


function DisplayUserRepos() {
  const location = useLocation();
  const { repo } = location.state || {};
  const { user } = location.state || {};
  const [commitData, setCommitData] = useState([]);
  const [fetched,setFetched] = useState();

  // Below useEffect will run the fetchRepoCommits function when the page loads
  useEffect(() => {
    fetchRepoCommits(user.login, repo.name);
    console.log("useEffect has run");
  }, []);

  // Below function will fetch the commits for the this repository
  const fetchRepoCommits = async (username, repoName) => {
    console.log("fetch has run");
    try {
      const response = await fetch(
        `/search/repos/commits?username=${username}&repoName=${repoName}`,
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      } else {
        const json = await response.json();
        setCommitData(json);
        setFetched(true)

      }
    } catch (error) {
      console.log("Commit fetch Error :" + error);
    }
  };

// Below function will take isoDate information and return just the date.
  const convertDate = (rawDate) => {
    const date = new Date(rawDate);
    return date.toLocaleDateString();
  };

// Below function will take isoDate information and return just the time.
   const convertTime = (rawDate) => {
    const date = new Date(rawDate);
    return date.toLocaleTimeString();
  };

  // Below function will convert true or false input to yes or no
  const convertTrueOrFalse = (trueOrFalse) => {
    if (trueOrFalse == false) {
      return "No";
    } else if (trueOrFalse == true) {
      return "Yes";
    } 
  };

  return (
    <div className="display_user_repo_page">
      <h1 className="repo-header">{repo.name}</h1>
    {/* Below the Repo Details will be printed */}
      <h2 className="sub-headings">Repo Details:</h2>
      <ul className="repo-details">
        <li><span className='sub-description'>ID</span> : {repo.id}</li>
        <li><span className='sub-description'>Node ID</span> : {repo.node_id}</li>
        <li><span className='sub-description'>Full Name</span> : {repo.full_name}</li>
        <li><span className='sub-description'>Private</span> : {convertTrueOrFalse(repo.private)}</li>
        <li><span className='sub-description'>Description</span> : {repo.description}</li>
        <li><span className='sub-description'>Creation Date</span> : {convertDate(repo.created_at)}</li>
        <li><span className='sub-description'>Updated Date</span> : {convertDate(repo.updated_at)}</li>
        <li></li>

      </ul>

      {/* Below the last 5 commits for this repository will be printed */}
      {!fetched ?(<LoadingIcon/>):commitData && commitData.length > 0 ? (<div className="commit-section">
          {" "}
          <h2 className="sub-headings">Commits(Last 5)</h2>
          {commitData.slice(0, 5).map((c, index) => (
            <ul key={index} className="commit-info">
              <li ><span className='sub-description'>Commit Author</span> : {c.commit.author.name} </li>
              <li> <span className='sub-description'>Commit Message</span> : {c.commit.message} </li>
              <li> <span className='sub-description'>Commit Date</span> : {convertDate(c.commit.author.date)
               }</li>
               <li><span className='sub-description'>Commit Time</span> : {convertTime(c.commit.author.date)}</li>

            </ul>
          ))}</div>): (<div>This repository has no Commits yet</div>)
    
      }
      {/* Below is a button when clicked will redirect to github repo page*/}
      <a href={repo.html_url}>
        <button type="button" className="github_link_button">View Github Repo </button>
      </a>
    </div>
  );
}

export default DisplayUserRepos;
