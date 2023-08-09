import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../api';

const GetAllPosts = () => {
const [posts, setPosts] = useState([]);
useEffect(()=>{
    const fetchPosts = async () => {
        const response = await getAllPosts();
        setPosts(response);
    }
    fetchPosts();
},[]);
return(
    <div className="container">
        <div className="post">
            {}
        </div>
    </div>
);
}



export default GetAllPosts;