import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import AddPosts from './Pages/AddPosts';
import Dashboard from './Pages/Dashboard';
import Landingpage from './Pages/Landingpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import SinglePostPage from './Pages/SinglePostPage';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
     <Routes >
      <Route path = '/' element = {<Landingpage />}/>
      <Route path = '/signup' element = {<Signup/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = 'posts/:postId' element = {<SinglePostPage/>}/>
      <Route path = '/posts/post' element = {<AddPosts/>}/>
      <Route path = '/user/dashboard' element = {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;