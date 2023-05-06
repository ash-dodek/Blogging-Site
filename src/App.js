import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import './css/home.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './Components/Login';
import CreateBlog from './Components/BlogItems/CreateBlog';
import BasicStates from './Context/BasicStates';

function App() {
  return (<>

  <Router>
    <BasicStates>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route exact path='/login' element={<Login heading="Login to your account" type='login'/>}/>
      <Route exact path='/signup' element={<Login heading="Register account" type='signup'/>}/>
      <Route exact path='/create' element={<CreateBlog/>}/>
      </Routes>
    </BasicStates>
  </Router>

  </>);
}

export default App;
