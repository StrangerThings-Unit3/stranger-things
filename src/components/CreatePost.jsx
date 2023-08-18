import React from "react";
import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [willDeliver, setWillDeliver] = React.useState(false);
    const [token, setToken] = React.useState("");
    const [posts, setPosts] = React.useState([]);

    const handleCreatePost = async (event) => {
        event.preventDefault();
        const response = await fetch(
            "https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                post: {
                title,
                description,
                price,
                location,
                willDeliver,
                },
            }),
            }
        );

        const response = await fetch('/posts', {
            method: 'POST',
            headers: {
                contentType: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
            });

        const data = await response.json();
        setPostData(responseData.post);
    };

    return (
        <div className="create-post">
            <h2>Create Post</h2>
            <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <input type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
            <input type="text" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
            <input type="text" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
            <label>Will Deliver:
                <input type="checkbox" value={willDeliver} onChange={(event) => setWillDeliver(event.target.value)}></input>
            </label>
            <button onClick={handleCreatePost}>Create Post</button>

            {postData && (
                <div className="post">
                    <h3>New Post Created</h3>}
                    <p>Title: {postData.title}</p>
                    <p>Description: {postData.description}</p>
                    </div>
            )}
        </div>
    );

    export default CreatePost;
