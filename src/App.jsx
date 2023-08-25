import { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { getAllPosts, fetchUserData } from './api';
import Home from './components/Home';
import AccountForm from './components/AccountForm';
import Posts from './components/Posts';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import UpdatePost from './components/UpdatePost';
import './Style.css';

function App() {
  // Declare variables
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(
    window.localStorage.getItem('token') || null
  );
  const navigate = useNavigate();

  // Fetch all posts with useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getAllPosts(token);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  // Store JSON web token with useEffect
  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token);
    } else {
      window.localStorage.removeItem('token');
    }
  }, [token]);

  // Store user data with useEffect
  useEffect(() => {
    if (token) {
      const getData = async () => {
        const result = await fetchUserData(token);
        setUserData(result.data);
      };
      getData();
    }
  }, [token]);

  const logOut = (e) => {
    e.preventDefault();
    setToken(null);
    setUserData(null);
    navigate('/');
  };

  return (
    <div id='app'>
      <div className='navbar'>
        {token ? (
          <>
            <Link>
              <button className='link' onClick={logOut}>
                Log Out
              </button>
            </Link>
            <Link to={'/profile'}>Profile</Link>
          </>
        ) : (
          <>
            <Link to={'/account/login'}>Login</Link>
            <Link to={'/account/register'}>Sign up</Link>
          </>
        )}
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/'}>Home</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home userData={userData} />} />
        <Route
          path='/posts'
          element={<Posts posts={posts} setToken={setToken} token={token} />}
        />
        <Route
          path='/posts/create'
          element={<CreatePost setToken={setToken} token={token} />}
        />
        {/* Create a Route for posts/messages */}
        {/* Create a Route for posts/update */}
        <Route
          path='/posts/update/:id'
          element={<UpdatePost posts={posts} token={token} />}
        />
        <Route path='/posts/:id' element={<ViewPost posts={posts} />} />
        <Route
          path='/profile'
          element={<Profile userData={userData} posts={posts} />}
        />
        <Route
          path='/account/:action'
          element={<AccountForm setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
