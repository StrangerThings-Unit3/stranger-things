import React, { useState } from "react";

function makePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [token, setToken] = useState("");
  const [postData, setPostData] = useState(null);

  const handleCreatePost = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`,
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

    const responseData = await response.json();
    setPostData(responseData.post);
  };

  return (
    <div className="make-post">
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <label>
        Will Deliver:
        <input
          type="checkbox"
          checked={willDeliver}
          onChange={(event) => setWillDeliver(event.target.checked)}
        />
      </label>
      <button onClick={handleCreatePost}>Create Post</button>

      {postData && (
        <div className="post">
          <h3>New Post Created</h3>
          <p>Title: {postData.title}</p>
          <p>Description: {postData.description}</p>
        </div>
      )}
    </div>
  );
}

export default makePost;