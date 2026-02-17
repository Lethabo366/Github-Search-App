
import Main from './components/Main';
import DisplayUser from './components/DisplayUser';
import DisplayUserRepos from './components/DisplayUserRepos';
import {Routes,Route} from 'react-router';

function App() {
  return (
  //  Below the routes for each component is created
      <Routes>
       <Route path="/" element={<Main />} />
        <Route path="/DisplayUser" element={<DisplayUser />} />
        <Route path="/DisplayUserRepos" element={<DisplayUserRepos/>}/>
      </Routes>
  );
}

export default App;
