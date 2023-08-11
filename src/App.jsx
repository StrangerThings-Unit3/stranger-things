import GetAllPosts from './components/GetAllPosts';
import { Route, Routes } from 'react-router';
import Register from './components/Register';
import './Style.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<GetAllPosts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
  // <h1> Welcome to Stranger Things! Let's get to work!</h1>;
}

export default App;
