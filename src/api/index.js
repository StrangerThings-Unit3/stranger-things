/***********************API_URL and Cohort Name variables ************************/
const COHORT_NAME = '2302-ACC-ET-WEB-PT-B';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/*************************Register, Login and User Data methods***************************/

// Creating a user with this POST request
export async function registerUser(username, password) {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await res.json();
    alert(result.data.message);
    return result;
  } catch (error) {
    console.error('Unable to create a player!', error);
  }
}

// Fetch method to login users
export async function LogUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    alert(result.data.message);
    return result;
  } catch (err) {
    console.error('Unable to log user.', err);
  }
}

// Fetch method for getting user data
export const fetchUserData = async (token) => {
  try {
    const res = await fetch(`${API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error('Unable to fetch user data!', error);
  }
};

/*******************************Posts methods******************************** */

// Fetch method to get all data
export async function getAllPosts(token) {
  try {
    const res = await fetch(`${API_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    const posts = result.data.posts;
    return posts;
  } catch (error) {
    console.error(`Unable to retrieve posts!`, error);
  }
}

// Fetch Method to update a post
export const updatePost = async (
  id,
  token,
  newTitle,
  newDescription,
  newPrice,
  newLocation,
  changedDeliver
) => {
  try {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: newTitle,
          description: newDescription,
          price: newPrice,
          location: newLocation,
          willDeliver: changedDeliver,
        },
      }),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(`Unable to update post!`, error);
  }
};

// Fetch method for making a post
export const makePost = async (
  title,
  description,
  price,
  location,
  willDeliver,
  token
) => {
  try {
    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(`Unable to make post!`, error);
  }
};

// Fetch method to delete Post
export const deletePost = async (id, token) => {
  //not sure if post_id is correct parameter here
  try {
    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    console.log(result);
    window.location.reload();
  } catch (error) {
    console.error(`Unable to delete post...`, error);
  }
};

/*******************************Messages method******************************** */

// Fetch method for posting messages inside a post
export const postMessage = async (id, token, content) => {
  try {
    const res = await fetch(`${API_URL}/posts/${id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    });
    const result = await res.json();
    alert('Message sent!');
    return result;
  } catch (error) {
    console.error(`Unable to post message!`, error);
  }
};
