const COHORT_NAME = '2302-ACC-ET-WEB-PT-B';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// Fetch method to get all data
export async function getAllPosts() {
  try {
    const res = await fetch(`${API_URL}/posts`);
    const result = await res.json();
    const posts = result.data.posts;
    return posts;
  } catch (error) {
    console.error(`Unable to retrieve posts!`, error);
  }
}

// Fetch method for creating a new post

const postMessage = async (post) => {
  try {
    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.error(`Unable to post message!`, error);
  }
}

// Fetch method for making a post

const makePost = async (post) => {  
  try {
    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: post.title,
          description: post.description,
          price: post.price,
          willDeliver: post.willDeliver,
        }
      }),
    });
    const result = await res.json();
    console.log(result);
   return result;
   } catch (error) {
    console.error(`Unable to make post!`, error);
  }
}