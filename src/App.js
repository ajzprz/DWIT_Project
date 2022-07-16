import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import AddPosts from './Pages/AddPosts';
import Dashboard from './Pages/Users/Dashboard';
import Landingpage from './Pages/Landingpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import SinglePostPage from './Pages/SinglePostPage';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Box pt='50px' bgColor='gray.100'>
     <Routes >
      <Route path = '/' element = {<Landingpage />}/>
      <Route path = '/signup' element = {<Signup/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = 'posts/:postId' element = {<SinglePostPage/>}/>
      <Route path = '/posts/addpost' element = {<AddPosts/>}/>
      <Route path = '/user/dashboard' element = {<Dashboard/>}/>
    </Routes>
    </Box>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;