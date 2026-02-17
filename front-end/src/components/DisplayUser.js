import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";

function DisplayUser() {
  const [repoData, setRepoData] = useState([]);
  const [fetched, setFetched] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};

 /*Below function will fetch the specifc user's repos Data using their username 
  to be printed. */
  const fetchRepoData = async (username) => {
    try {
      const response = await fetch(`/search/repos?username=${username}`);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);

      } else {
        const json = await response.json();
        setRepoData(json);
        setFetched(true);
  
      }
    } catch (error) {
      console.log("Repo fetch failed :" + error);
    }
  };

  // Below Use Effect will run the fetchRepoData function when the page loads.
  useEffect(() => {
    fetchRepoData(user.login);
  
  }, []);

  // Below function will send the repo information to the page the user is redirected to.
  const handleClick = (repoInfo) => {
    navigate("/DisplayUserRepos", {
      state: {
        user: user,
        repo: repoInfo,
      },
    });
  };

  return (
    <div className="display_user_page">
      {/* Below the specific users information will is printed */}
      <img
        src={user.avatar_url}
        className="display_user_image"
        alt="User Profile Picture"
      />
      <h2 className="display_user_header">User Information</h2>
      <ul>
        <li className="user_info_li">
          <span className="sub-description">Username</span> : {user.login}
        </li>
        <li className="user_info_li">
          <span className="sub-description">User Id </span>: {user.id}
        </li>
        <li className="user_info_li">
          <span className="sub-description">Followers Url </span>:{" "}
          <a href={user.followers_url}>{user.followers_url}</a>{" "}
        </li>
        <li className="user_info_li">
          <span className="sub-description">Github Repos Link </span>:{" "}
          <a href={user.repos_url} className="external_link">
            {user.repos_url}
          </a>
        </li>

        <h2 className="sub-headings">User Repos :</h2>
        <ul>
          {/* Below the Users Repositories will be printed as links  */}
          {
            !fetched ?(<div><LoadingIcon/></div>):
            repoData && repoData.length > 0 ? (<div> {
                repoData.map((repo,index)=>(

                 <li key={index} className="repo_link_li"><a href="" className="repo_links" onClick={()=>{handleClick(repo)}}>{repo.name}</a></li>

                   ))}</div>):repoData && repoData.length === 0 ? (<div>This user has no Repos</div>):(<div><LoadingIcon/></div>)
          }
        </ul>
      </ul>
      {/* Below is a button that will redirect to the main github profile */}
      <a href={user.html_url}>
        <button type="button" className="github_link_button">
          View Github Profile
        </button>
      </a>
    </div>
  );
}

export default DisplayUser;
