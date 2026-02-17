import { useState } from "react";
import { useNavigate } from "react-router";

function Main() {
  const [userName, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [fetched , setFetched] = useState(null)
  const navigate = useNavigate();
  
// Below function will fetch the userData from the server.
  const fetchData = async (username) => {
    try {
      const response = await fetch(`/search?username=${username}`);
      console.log("fetched");

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      } else {
        const json = await response.json();
        console.log("json retrieved");
        setFetched(true)
        setUserData(json);
      }
    } catch (error) {
      console.log("fetch failed :" + error);
    }
  };

  // Below function handles the event when the user clicks submit/search Button.
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(userName);
    console.log("submitted");
  };

  /* Below function sends information the specific information on the user
   * to the page they are being redirected too.*/
  const handleClick = (userInfo) => {
    navigate("/DisplayUser", { state: { user : userInfo }})

  }

  return (
    <div className='main-body'><h1 className='header'>User Search Page</h1><br/>
    <div className="main-page">
      {/* Below is the form where the user will enter the information of the 
      user they would like to search for. as well as the search button to submit 
      their query */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={userName}
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      
      {/* Below function will print the information retrieved from the Server. */}
      {fetched && userData ? (<div>{ userData.items.length > 0 ? ( <div>
          {userData.items.map((user) => (
            <div className="userCard" key={user.id}>
              <div className="userInfo">
             
              <div className="user_img">
              <img src={user.avatar_url} alt={user.login} />
              </div>
              <div className='content'><h2>{user.login}</h2>
              <h4>id:{user.id}</h4></div>
            </div>
              <button type="button" onClick={() =>{handleClick(user)}} className='view-button'>
                View Profile
                </button>

            </div>
          )
          )}
        </div>): (<div className='search-error'><h2>Sorry!! Their are No users with that Username.</h2></div>)}</div>) : (<div></div>) 
      
        }


    </div> 
    </div>
  );
}

export default Main;

/*Resources
 * Co-pilot
 * debugging and creating a loading icon 
 * using if else in jsx.
 * redirecting a sending information to the next page.
 * getting util for jest()
 * 
 * Stack overflow  for help with running the snapshot
 * https://stackoverflow.com/questions/79256904/cannot-detect-installed-react-router-dom-package-when-running-unit-tests
 * 
 * loading icon image from Pixabay user fe_silva_loading git
 * https://pixabay.com/gifs/loading-animation-spin-highlights-7528/
 * 
 * 
 * */