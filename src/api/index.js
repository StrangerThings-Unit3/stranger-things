const COHORT_NAME = '2302-ACC-ET-WEB-PT-B';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// Fetch method to get all data
export async function getAllPosts() {
  try {
    const res = await fetch(`${API_URL}/posts`);
    const result = await res.json();
    const posts = result;
    return posts;
  } catch (error) {
    console.error(`Unable to retrieve posts!`, error);
  }
}
